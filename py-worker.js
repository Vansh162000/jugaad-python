// Python engine: Pyodide (asli CPython, WebAssembly) ek alag worker thread mein.
// Infinite loop ho toh main page worker ko 5 sec baad band karke naya bana deta hai.
importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

const HARNESS = `
import sys, io, json, traceback

def __jp_fmt(e, fname="main.py"):
    line = None
    if isinstance(e, SyntaxError) and e.filename == fname:
        line = e.lineno
    else:
        for fr in traceback.extract_tb(e.__traceback__):
            if fr.filename == fname:
                line = fr.lineno
    return {"type": type(e).__name__, "msg": str(e), "line": line}

def __jp_input(*a, **k):
    raise OSError("input() is app mein nahi chalta")

def __jp_run(code, setup, tests_json):
    g = {"__name__": "__main__", "input": __jp_input}
    buf = io.StringIO()
    old = sys.stdout
    sys.stdout = buf
    err = None
    results = []
    try:
        try:
            exec(compile(code, "main.py", "exec"), g)
        except BaseException as e:
            err = __jp_fmt(e)
        tests = json.loads(tests_json)
        if err is None and tests:
            if setup:
                try:
                    exec(compile(setup, "setup.py", "exec"), g)
                except BaseException as e:
                    err = __jp_fmt(e)
                    err["where"] = "test"
            if err is None:
                for t in tests:
                    label = t[2] if len(t) > 2 else t[0]
                    try:
                        want = eval(t[1], {})
                    except BaseException as e:
                        results.append({"label": label, "ok": False, "got": "-", "want": "Test hi galat hai: " + str(e)})
                        continue
                    try:
                        got = eval(t[0], g)
                        results.append({"label": label, "ok": bool(got == want), "got": repr(got)[:300], "want": repr(want)[:300]})
                    except BaseException as e:
                        f = __jp_fmt(e)
                        results.append({"label": label, "ok": False, "got": f["type"] + ": " + f["msg"], "want": repr(want)[:300], "line": f["line"]})
    finally:
        sys.stdout = old
    return json.dumps({"out": buf.getvalue()[-6000:], "err": err, "results": results})
`;

let py = null;
const ready = (async () => {
  py = await loadPyodide();
  py.runPython(HARNESS);
  postMessage({type: "ready"});
})().catch(e => postMessage({type: "fatal", error: String(e)}));

onmessage = async e => {
  const {id, code, setup, tests} = e.data;
  try {
    await ready;
    // numpy/pandas jaise packages import hon toh pehle unhe load karo (pehli baar download)
    try { await py.loadPackagesFromImports(code + "\n" + (setup || "")); } catch {}
    postMessage({type: "started", id});
    const run = py.globals.get("__jp_run");
    const res = run(code, setup || "", JSON.stringify(tests || []));
    run.destroy();
    postMessage({type: "result", id, res: JSON.parse(res)});
  } catch (err) {
    postMessage({type: "result", id, res: {out: "", err: {type: "EngineError", msg: String(err), line: null}, results: []}});
  }
};
