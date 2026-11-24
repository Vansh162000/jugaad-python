// Auto-generated and validated content: har code aur test CPython mein check kiya gaya.
window.CONCEPTS = [
 {
  "id": "vars",
  "emoji": "🏷️",
  "title": "Variables",
  "tagline": "Naam ek label hai, dabba nahi",
  "hook": {
   "q": "Socho: b = a likhne ke baad a ko badla. Kya b bhi badlega? Pehle guess karo, phir Run dabao.",
   "code": "a = [1, 2]\nb = a\na.append(3)\nprint(b)\n"
  },
  "idea": "Python mein variable ek label (naam) hai jo kisi object par chipka hota hai. `x = 5` ka matlab: 5 naam ka object bana aur 'x' label us par lag gaya. `b = a` copy nahi banata — dono labels ek hi object par lag jaate hain. Isliye upar a badla toh b bhi badla dikha.",
  "example": "name = \"Vansh\"\nage = 25\nage = age + 1      # naya object 26 bana, label 'age' ab us par\nprint(name, age)\nprint(type(age))\n",
  "inside": [
   "Python mein naam ka type nahi hota, object ka hota hai. Isliye `x = 5` ke baad `x = 'hi'` bhi chal jaata hai (dynamic typing).",
   "`a is b` check karta hai ki dono SAME object hain; `==` sirf value compare karta hai. Dono alag cheezein hain.",
   "int, str, tuple immutable hain — 'badalne' par naya object banta hai. list, dict, set mutable hain — wahi object badalta hai. Aadhe beginner bugs ki jad yahi hai."
  ],
  "power": {
   "text": "Ek line mein multiple assignment aur swap — doosri languages mein iske liye temp variable lagta hai:",
   "code": "a, b = 10, 20\na, b = b, a\nprint(a, b)\nx = y = 0\nprint(x, y)\n"
  },
  "trap": {
   "text": "Ek list ko do naamon se share karna. Copy chahiye toh `.copy()` ya `list(a)` use karo:",
   "code": "a = [1, 2]\nb = a.copy()\na.append(3)\nprint(a, b)\n"
  },
  "secret": {
   "title": "`is` aur `==` ka chhupa farak",
   "text": "`is` identity check karta hai (same object?), `==` value. Python chhote integers (-5 se 256) pehle se bana ke rakhta hai, isliye kabhi `is` bhi True aa jaata hai aur log galti se use karne lagte hain. Rule: values ke liye hamesha `==`, aur `is` sirf `None` ke liye — `if x is None:`.",
   "code": "a = [1, 2]\nb = [1, 2]\nprint(a == b)\nprint(a is b)\nresult = None\nprint(result is None)\n"
  },
  "tasks": [
   {
    "id": "vars-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "x = 5\ny = x\nx = x + 1\nprint(x, y)\n",
    "options": [
     "6 6",
     "6 5",
     "5 6",
     "Error"
    ],
    "answer": 1,
    "why": "int immutable hai: `x + 1` naya object 6 banata hai aur label x us par chala jaata hai. y abhi bhi purane 5 par chipka hai."
   },
   {
    "id": "vars-f",
    "type": "fill",
    "prompt": "`swap(a, b)` ko complete karo — `___` ki jagah sahi code likho taaki dono values ulti ho jaayein.",
    "starter": "def swap(a, b):\n    a, b = ___\n    return a, b\n",
    "solution": "def swap(a, b):\n    a, b = b, a\n    return a, b\n",
    "tests": [
     [
      "swap(1, 2)",
      "(2, 1)"
     ],
     [
      "swap('x', 'y')",
      "('y', 'x')"
     ]
    ],
    "hint": "Python mein ek line mein swap: `a, b = b, a`."
   },
   {
    "id": "vars-b",
    "type": "bug",
    "prompt": "Yeh function original list ko bhi badal deta hai! Theek karo: nayi list mein item jude, original same rahe.",
    "starter": "def add_item(items, item):\n    new_items = items\n    new_items.append(item)\n    return new_items\n",
    "solution": "def add_item(items, item):\n    new_items = items.copy()\n    new_items.append(item)\n    return new_items\n",
    "setup": "orig = [1, 2]\nres = add_item(orig, 3)\n",
    "tests": [
     [
      "res",
      "[1, 2, 3]",
      "Nayi list mein 3 juda?"
     ],
     [
      "orig",
      "[1, 2]",
      "Original list same rahi?"
     ]
    ],
    "hint": "`new_items = items` copy nahi banata — dono ek hi list hain. `items.copy()` se nayi list banao."
   },
   {
    "id": "vars-w",
    "type": "write",
    "prompt": "`rotate3(a, b, c)` likho jo `(b, c, a)` lautaye. Multiple assignment use karo.",
    "starter": "def rotate3(a, b, c):\n    # yahan likho\n    pass\n",
    "solution": "def rotate3(a, b, c):\n    a, b, c = b, c, a\n    return a, b, c\n",
    "tests": [
     [
      "rotate3(1, 2, 3)",
      "(2, 3, 1)"
     ],
     [
      "rotate3('x', 'y', 'z')",
      "('y', 'z', 'x')"
     ]
    ],
    "hint": "`a, b, c = b, c, a` likho, phir teeno return karo: `return a, b, c`."
   }
  ],
  "test": [
   {
    "q": "Kaunsa check batata hai ki do naam SAME object par hain?",
    "options": [
     "==",
     "is",
     "equals()",
     "id =="
    ],
    "answer": 1,
    "why": "`is` identity check karta hai, `==` sirf value."
   },
   {
    "q": "Output kya hoga?",
    "code": "a = [1]\nb = a\nb.append(2)\nprint(a)\n",
    "options": [
     "[1]",
     "[1, 2]",
     "[2]",
     "Error"
    ],
    "answer": 1,
    "why": "a aur b ek hi list hain, toh b badla matlab a badla."
   },
   {
    "q": "In mein se kaunsa mutable hai?",
    "options": [
     "int",
     "str",
     "tuple",
     "list"
    ],
    "answer": 3,
    "why": "list ko jagah par badal sakte ho; baaki teeno immutable hain."
   },
   {
    "q": "Output kya hoga?",
    "code": "x = \"hi\"\ny = x\nx = x + \"!\"\nprint(y)\n",
    "options": [
     "hi!",
     "hi",
     "Error",
     "None"
    ],
    "answer": 1,
    "why": "String immutable hai: `x + '!'` naya string banata hai, y purane 'hi' par hi hai."
   }
  ]
 },
 {
  "id": "str",
  "emoji": "🔤",
  "title": "Strings",
  "tagline": "Text ka superpower",
  "hook": {
   "q": "Ek hi line mein string ulti kaise karoge? Guess karo, phir Run.",
   "code": "s = \"python\"\nprint(s[::-1])\nprint(s[1:4])\n"
  },
  "idea": "String characters ki sequence hai. Index 0 se shuru hota hai, aur -1 aakhri character hai. Slicing `s[start:stop:step]` — stop wala index shamil nahi hota. String immutable hai: `s[0] = 'P'` error dega, naya string banana padta hai.",
  "example": "s = \"Hello World\"\nprint(s[0], s[-1])\nprint(s.lower(), s.upper())\nprint(s.replace(\"World\", \"Python\"))\nprint(len(s))\n",
  "inside": [
   "f-string sabse clean formatting hai: `f'{name} is {age}'`. Andar expression bhi chalta hai (`f'{2*3}'`), aur `f'{price:.2f}'` 2 decimal tak dikhata hai.",
   "`split()` bina argument ke saare spaces/tabs/newlines par todta hai aur khaali tukde hata deta hai. `' '.join(list)` iska ulta kaam karta hai.",
   "Loop mein `s = s + x` karke bada string banana slow hai (har baar naya string banta hai). Tukde list mein jodo, aakhir mein `''.join()` karo."
  ],
  "power": {
   "text": "f-string ke pro tricks — `=` se naam aur value dono, format specs se alignment:",
   "code": "name = \"Vansh\"\nscore = 91.456\nprint(f\"{name=}\")\nprint(f\"{score:.1f}\")\nprint(f\"{'hi':*^10}\")\n"
  },
  "trap": {
   "text": "String methods original ko nahi badalte — result naya string hota hai, use variable mein lena padta hai:",
   "code": "s = \"hello\"\ns.upper()\nprint(s)\ns = s.upper()\nprint(s)\n"
  },
  "secret": {
   "title": "Bina loop ke string ka jaadu",
   "text": "`'-' * 20` se line ban jaati hai, `'py' in 'python'` substring check karta hai, aur palindrome check sirf ek comparison: `s == s[::-1]`. Interviews mein yeh ek-liners bahut kaam aate hain.",
   "code": "print(\"-\" * 20)\nprint(\"py\" in \"python\")\nword = \"madam\"\nprint(word == word[::-1])\n"
  },
  "tasks": [
   {
    "id": "str-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "s = \"banana\"\nprint(s[1:4], s[-2:])\n",
    "options": [
     "ana na",
     "ban na",
     "nan an",
     "ana an"
    ],
    "answer": 0,
    "why": "`s[1:4]` index 1,2,3 = 'ana'. `s[-2:]` aakhri do = 'na'."
   },
   {
    "id": "str-f",
    "type": "fill",
    "prompt": "`initials(full_name)` complete karo: 'vansh kumar' → 'VK'. `___` mein sahi index likho.",
    "starter": "def initials(full_name):\n    parts = full_name.split()\n    return \"\".join(p[___] for p in parts).upper()\n",
    "solution": "def initials(full_name):\n    parts = full_name.split()\n    return \"\".join(p[0] for p in parts).upper()\n",
    "tests": [
     [
      "initials('vansh kumar')",
      "'VK'"
     ],
     [
      "initials('a b c')",
      "'ABC'"
     ]
    ],
    "hint": "Har word ka pehla akshar index 0 par hota hai."
   },
   {
    "id": "str-b",
    "type": "bug",
    "prompt": "`greet(name)` ko 'Hello, Vansh!' lautana chahiye, par `{name}` hi print ho raha hai. Bug pakdo!",
    "starter": "def greet(name):\n    return \"Hello, {name}!\"\n",
    "solution": "def greet(name):\n    return f\"Hello, {name}!\"\n",
    "tests": [
     [
      "greet('Vansh')",
      "'Hello, Vansh!'"
     ],
     [
      "greet('Riya')",
      "'Hello, Riya!'"
     ]
    ],
    "hint": "Curly brackets ke andar variable tabhi bharta hai jab string ke aage `f` lago."
   },
   {
    "id": "str-w",
    "type": "write",
    "prompt": "`is_palindrome(word)` likho — case ignore karke check kare ki ulta-seedha same hai ya nahi ('Madam' → True).",
    "starter": "def is_palindrome(word):\n    # yahan likho\n    pass\n",
    "solution": "def is_palindrome(word):\n    w = word.lower()\n    return w == w[::-1]\n",
    "tests": [
     [
      "is_palindrome('Madam')",
      "True"
     ],
     [
      "is_palindrome('Python')",
      "False"
     ],
     [
      "is_palindrome('a')",
      "True"
     ]
    ],
    "hint": "Pehle `.lower()` karo, phir use `[::-1]` se compare karo."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "s = \"hello\"\nprint(s[-1])\n",
    "options": [
     "h",
     "o",
     "l",
     "Error"
    ],
    "answer": 1,
    "why": "-1 aakhri character hai."
   },
   {
    "q": "`s = 'abc'` ke baad `s[0] = 'z'` kya karega?",
    "options": [
     "'zbc' ban jaayega",
     "TypeError aayega",
     "'z' print hoga",
     "Kuch nahi hoga"
    ],
    "answer": 1,
    "why": "String immutable hai, uske character badle nahi ja sakte."
   },
   {
    "q": "Output kya hoga?",
    "code": "print(\"a,b,,c\".split(\",\"))\n",
    "options": [
     "['a', 'b', 'c']",
     "['a', 'b', '', 'c']",
     "['a,b,,c']",
     "Error"
    ],
    "answer": 1,
    "why": "Separator diya ho toh khaali tukde bhi aate hain."
   },
   {
    "q": "Output kya hoga?",
    "code": "x = 3.14159\nprint(f\"{x:.2f}\")\n",
    "options": [
     "3.14",
     "3.1",
     "3.14159",
     "3.15"
    ],
    "answer": 0,
    "why": "`.2f` = 2 decimal tak."
   }
  ]
 },
 {
  "id": "num",
  "emoji": "🔢",
  "title": "Numbers",
  "tagline": "Jo calculator nahi batata",
  "hook": {
   "q": "0.1 + 0.2 == 0.3 — True ya False? Guess karo!",
   "code": "print(0.1 + 0.2)\nprint(0.1 + 0.2 == 0.3)\n"
  },
  "idea": "Python mein `int` (poore number) aur `float` (decimal) hote hain. `/` hamesha float deta hai (7/2 = 3.5), `//` neeche wala poora number (floor division), `%` remainder, aur `**` power.",
  "example": "print(7 / 2, 7 // 2, 7 % 2)\nprint(2 ** 10)\nprint(abs(-5), round(3.7))\nprint(int(\"42\") + 1)\n",
  "inside": [
   "Python ka int unlimited size ka hota hai — `2 ** 100` bhi bilkul exact. C/Java mein yahan overflow ho jaata.",
   "Float binary mein store hota hai, isliye 0.1 exact nahi hota. Paise ka hisaab ho toh paise ko integer (paise) mein rakho ya `decimal` module lo; floats compare karne ke liye `math.isclose()`.",
   "`round(2.5)` 2 deta hai aur `round(3.5)` 4 — yeh 'banker's rounding' hai (even ki taraf). Bahut log yahan confuse hote hain."
  ],
  "power": {
   "text": "Bade numbers ko padhne layak banao aur `divmod` se quotient-remainder ek saath lo:",
   "code": "salary = 1_200_000\nprint(salary)\nprint(f\"{salary:,}\")\nmins, secs = divmod(135, 60)\nprint(mins, secs)\n"
  },
  "trap": {
   "text": "Text se aaye number asal mein string hote hain — jodne se pehle `int()` karo:",
   "code": "a = \"5\"\nb = \"10\"\nprint(a + b)\nprint(int(a) + int(b))\n"
  },
  "secret": {
   "title": "Negative numbers ka // aur % raaz",
   "text": "`-7 // 2` = -4 hota hai, -3 nahi — kyunki `//` hamesha neeche (floor) jaata hai. Python ka `%` hamesha divisor ke sign wala result deta hai: `-7 % 3 == 2`. Isliye clock jaisi circular counting `% n` se Python mein bilkul safe hai.",
   "code": "print(-7 // 2)\nprint(-7 % 3)\nhour = (2 - 5) % 12\nprint(hour)\n"
  },
  "tasks": [
   {
    "id": "num-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "print(17 // 5, 17 % 5, 2 ** 3)\n",
    "options": [
     "3 2 8",
     "3.4 2 6",
     "3 2 6",
     "4 2 8"
    ],
    "answer": 0,
    "why": "17 // 5 = 3, 17 % 5 = 2, 2 ** 3 = 8."
   },
   {
    "id": "num-f",
    "type": "fill",
    "prompt": "`to_minutes(hours, minutes)` complete karo jo total minutes lautaye.",
    "starter": "def to_minutes(hours, minutes):\n    return hours * ___ + minutes\n",
    "solution": "def to_minutes(hours, minutes):\n    return hours * 60 + minutes\n",
    "tests": [
     [
      "to_minutes(2, 30)",
      "150"
     ],
     [
      "to_minutes(0, 45)",
      "45"
     ]
    ],
    "hint": "Ek ghante mein kitne minute?"
   },
   {
    "id": "num-b",
    "type": "bug",
    "prompt": "`average(a, b, c)` galat average de raha hai. Operator precedence ka chakkar hai!",
    "starter": "def average(a, b, c):\n    return a + b + c / 3\n",
    "solution": "def average(a, b, c):\n    return (a + b + c) / 3\n",
    "tests": [
     [
      "average(3, 3, 3)",
      "3.0"
     ],
     [
      "average(1, 2, 3)",
      "2.0"
     ]
    ],
    "hint": "`/` pehle chalta hai, `+` baad mein. Jod ko bracket mein rakho."
   },
   {
    "id": "num-w",
    "type": "write",
    "prompt": "`split_bill(total, people)` likho jo har insaan ka hissa 2 decimal tak round karke lautaye.",
    "starter": "def split_bill(total, people):\n    # yahan likho\n    pass\n",
    "solution": "def split_bill(total, people):\n    return round(total / people, 2)\n",
    "tests": [
     [
      "split_bill(100, 3)",
      "33.33"
     ],
     [
      "split_bill(90, 2)",
      "45.0"
     ],
     [
      "split_bill(10, 4)",
      "2.5"
     ]
    ],
    "hint": "`round(value, 2)` 2 decimal tak round karta hai."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "print(10 / 5)\n",
    "options": [
     "2",
     "2.0",
     "2.5",
     "Error"
    ],
    "answer": 1,
    "why": "`/` hamesha float deta hai."
   },
   {
    "q": "Output kya hoga?",
    "code": "print(round(2.5), round(3.5))\n",
    "options": [
     "3 4",
     "2 4",
     "2 3",
     "3 3"
    ],
    "answer": 1,
    "why": "Banker's rounding: .5 par even number ki taraf."
   },
   {
    "q": "Rupees-paise ka exact hisaab rakhna hai. Best tareeka?",
    "options": [
     "float use karo",
     "Paise ko int mein rakho ya decimal module",
     "str mein rakho",
     "Har jagah round()"
    ],
    "answer": 1,
    "why": "Float mein 0.1 jaise numbers exact nahi hote."
   },
   {
    "q": "Output kya hoga?",
    "code": "print(9 % 4 + 9 // 4)\n",
    "options": [
     "3",
     "4",
     "2",
     "2.25"
    ],
    "answer": 0,
    "why": "9 % 4 = 1 aur 9 // 4 = 2, total 3."
   }
  ]
 },
 {
  "id": "list",
  "emoji": "📋",
  "title": "Lists",
  "tagline": "Python ka Swiss knife",
  "hook": {
   "q": "1 se 10 tak ke squares ek hi line mein? Run karke dekho.",
   "code": "squares = [n * n for n in range(1, 11)]\nprint(squares)\n"
  },
  "idea": "List ordered aur mutable collection hai: `[1, 'a', 3.5]`. Index aur slicing strings jaisi hi hai. `append()` aakhir mein jodta hai, `insert(i, x)` beech mein, `pop()` nikaalta hai, `sort()` usi list ko sort kar deta hai.",
  "example": "fruits = [\"apple\", \"banana\"]\nfruits.append(\"mango\")\nfruits.insert(0, \"kiwi\")\nprint(fruits)\nprint(fruits.pop(), fruits)\nprint(len(fruits), \"apple\" in fruits)\n",
  "inside": [
   "`list.sort()` list ko jagah par badalta hai aur `None` lautata hai; `sorted(list)` nayi list deta hai. `x = x.sort()` likhoge toh x None ho jaayega!",
   "`append` aakhir mein fast hai, par `insert(0, x)` aur `pop(0)` poori list khiskaate hain — badi list mein slow. Queue chahiye toh `collections.deque`.",
   "`a[:]` ya `a.copy()` shallow copy hai: andar ki lists ab bhi shared rehti hain. Nested copy ke liye `copy.deepcopy()`."
  ],
  "power": {
   "text": "List comprehension — loop + filter ek line mein, fast bhi aur Pythonic bhi:",
   "code": "nums = [5, 12, 7, 20, 3]\nbig = [n for n in nums if n > 6]\ndoubled = [n * 2 for n in nums]\nprint(big)\nprint(doubled)\nprint(sum(nums), max(nums), min(nums))\n"
  },
  "trap": {
   "text": "`[[0] * 3] * 3` se grid banaoge toh teeno rows SAME list hongi:",
   "code": "grid = [[0] * 3] * 3\ngrid[0][0] = 1\nprint(grid)\ngood = [[0] * 3 for _ in range(3)]\ngood[0][0] = 1\nprint(good)\n"
  },
  "secret": {
   "title": "Star (*) unpacking",
   "text": "`first, *rest = items` se pehla item alag aur baaki list mein aa jaate hain. Aur `*items` se list ko function ke arguments mein khol sakte ho. Yeh pattern pro code mein har jagah dikhta hai.",
   "code": "first, *middle, last = [1, 2, 3, 4, 5]\nprint(first, middle, last)\nitems = [\"a\", \"b\", \"c\"]\nprint(*items, sep=\" | \")\n"
  },
  "tasks": [
   {
    "id": "list-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "a = [3, 1, 2]\nb = sorted(a)\na.append(0)\nprint(b, a[-1])\n",
    "options": [
     "[1, 2, 3] 0",
     "[0, 1, 2, 3] 0",
     "[1, 2, 3] 2",
     "None 0"
    ],
    "answer": 0,
    "why": "`sorted()` nayi list banata hai, isliye baad wala append b ko nahi chhoota."
   },
   {
    "id": "list-f",
    "type": "fill",
    "prompt": "`evens(nums)` complete karo jo sirf even numbers ki list lautaye.",
    "starter": "def evens(nums):\n    return [n for n in nums if ___]\n",
    "solution": "def evens(nums):\n    return [n for n in nums if n % 2 == 0]\n",
    "tests": [
     [
      "evens([1, 2, 3, 4])",
      "[2, 4]"
     ],
     [
      "evens([])",
      "[]"
     ],
     [
      "evens([7, 9])",
      "[]"
     ]
    ],
    "hint": "Even number ka 2 se remainder 0 hota hai: `n % 2 == 0`."
   },
   {
    "id": "list-b",
    "type": "bug",
    "prompt": "`top3(scores)` sabse bade 3 score (bade se chhote) lautana chahiye, par crash ho raha hai.",
    "starter": "def top3(scores):\n    ordered = scores.sort(reverse=True)\n    return ordered[:3]\n",
    "solution": "def top3(scores):\n    ordered = sorted(scores, reverse=True)\n    return ordered[:3]\n",
    "tests": [
     [
      "top3([5, 1, 9, 7, 3])",
      "[9, 7, 5]"
     ],
     [
      "top3([2, 1])",
      "[2, 1]"
     ]
    ],
    "hint": "`.sort()` None lautata hai. Nayi sorted list chahiye toh `sorted()` use karo."
   },
   {
    "id": "list-w",
    "type": "write",
    "prompt": "`chunk(items, size)` likho jo list ko `size` ke tukdon mein tode: chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]].",
    "starter": "def chunk(items, size):\n    # yahan likho\n    pass\n",
    "solution": "def chunk(items, size):\n    return [items[i:i + size] for i in range(0, len(items), size)]\n",
    "tests": [
     [
      "chunk([1, 2, 3, 4, 5], 2)",
      "[[1, 2], [3, 4], [5]]"
     ],
     [
      "chunk([], 3)",
      "[]"
     ],
     [
      "chunk([1, 2, 3], 3)",
      "[[1, 2, 3]]"
     ]
    ],
    "hint": "`range(0, len(items), size)` se har tukde ka start milega; `items[i:i + size]` se tukda."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "x = [1, 2, 3]\ny = x.append(4)\nprint(y)\n",
    "options": [
     "[1, 2, 3, 4]",
     "None",
     "4",
     "Error"
    ],
    "answer": 1,
    "why": "`append` list badalta hai par None lautata hai."
   },
   {
    "q": "Output kya hoga?",
    "code": "nums = [10, 20, 30, 40]\nprint(nums[1:3])\n",
    "options": [
     "[20, 30]",
     "[10, 20, 30]",
     "[20, 30, 40]",
     "[10, 20]"
    ],
    "answer": 0,
    "why": "Index 1 aur 2; stop (3) shamil nahi."
   },
   {
    "q": "Badi list ke shuru se baar-baar item nikaalna hai. Sabse fast?",
    "options": [
     "list.pop(0)",
     "del list[0]",
     "deque.popleft()",
     "list.remove()"
    ],
    "answer": 2,
    "why": "deque dono taraf se fast hai; list shuru se slow."
   },
   {
    "q": "Output kya hoga?",
    "code": "print([c.upper() for c in 'abc' if c != 'b'])\n",
    "options": [
     "['A', 'C']",
     "['A', 'B', 'C']",
     "['a', 'c']",
     "AC"
    ],
    "answer": 0,
    "why": "'b' filter ho gaya, baaki upper case."
   }
  ]
 },
 {
  "id": "cond",
  "emoji": "🔀",
  "title": "Conditions",
  "tagline": "Faisle lene wala code",
  "hook": {
   "q": "`if []:` chalega ya nahi? Aur `0 or 'default'` kya dega? Guess karo!",
   "code": "print(bool([]), bool([0]), bool(\"\"), bool(\" \"))\nprint(0 or \"default\")\nprint(5 and 10)\n"
  },
  "idea": "`if / elif / else` se code faisla leta hai. Condition sirf True/False nahi hoti — Python har cheez ko 'truthy' ya 'falsy' maanta hai. Falsy: `0, 0.0, '', [], {}, set(), None, False`. Baaki sab truthy.",
  "example": "marks = 72\nif marks >= 90:\n    print(\"A\")\nelif marks >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")\nname = \"\"\nif not name:\n    print(\"Naam khaali hai\")\n",
  "inside": [
   "`and`/`or` True/False nahi, ek operand hi lautate hain: `a or b` pehla truthy value deta hai. Isliye `name = user_input or 'Guest'` default dene ka common trick hai.",
   "Short-circuit: `x != 0 and 10 / x > 1` — agar x 0 hai toh doosra hissa chalta hi nahi, error se bachav.",
   "Chained comparison: `18 <= age < 60` Python mein seedha chalta hai. Doosri languages mein `and` lagana padta."
  ],
  "power": {
   "text": "Ek line ka if-else (ternary) aur `in` se kai checks ek saath:",
   "code": "age = 20\nstatus = \"adult\" if age >= 18 else \"minor\"\nprint(status)\nday = \"sun\"\nif day in (\"sat\", \"sun\"):\n    print(\"Weekend!\")\nprint(18 <= age < 60)\n"
  },
  "trap": {
   "text": "`if x == 'a' or 'b':` HAMESHA True hota hai! Kyunki `'b'` khud truthy hai. Sahi tareeka: `if x in ('a', 'b'):`",
   "code": "x = \"z\"\nprint(bool(x == \"a\" or \"b\"))\nprint(x in (\"a\", \"b\"))\n"
  },
  "secret": {
   "title": "match-case: Python ka switch",
   "text": "Python 3.10+ mein `match` statement hai — ek value ko kai patterns se milata hai, aur list/dict ka shape bhi check kar sakta hai. Bahut kam beginners ko pata hai.",
   "code": "command = \"go north\"\nmatch command.split():\n    case [\"go\", direction]:\n        print(\"Jaa rahe hain:\", direction)\n    case [\"quit\"]:\n        print(\"Bye\")\n    case _:\n        print(\"Samajh nahi aaya\")\n"
  },
  "tasks": [
   {
    "id": "cond-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "x = 0\nprint(\"yes\" if x else \"no\", x or 7)\n",
    "options": [
     "no 7",
     "yes 7",
     "no 0",
     "yes 0"
    ],
    "answer": 0,
    "why": "0 falsy hai, isliye 'no'; `0 or 7` pehla truthy = 7."
   },
   {
    "id": "cond-f",
    "type": "fill",
    "prompt": "`grade(marks)` complete karo: 90+ → 'A', 60+ → 'B', baaki → 'C'. `___` ki jagah sahi keyword.",
    "starter": "def grade(marks):\n    if marks >= 90:\n        return \"A\"\n    ___ marks >= 60:\n        return \"B\"\n    else:\n        return \"C\"\n",
    "solution": "def grade(marks):\n    if marks >= 90:\n        return \"A\"\n    elif marks >= 60:\n        return \"B\"\n    else:\n        return \"C\"\n",
    "tests": [
     [
      "grade(95)",
      "'A'"
     ],
     [
      "grade(60)",
      "'B'"
     ],
     [
      "grade(59)",
      "'C'"
     ]
    ],
    "hint": "if ke baad doosri condition ke liye keyword: `elif`."
   },
   {
    "id": "cond-b",
    "type": "bug",
    "prompt": "`is_weekend(day)` har din ko weekend bata raha hai! Bug pakdo.",
    "starter": "def is_weekend(day):\n    return day == \"sat\" or \"sun\"\n",
    "solution": "def is_weekend(day):\n    return day in (\"sat\", \"sun\")\n",
    "tests": [
     [
      "is_weekend('sat')",
      "True"
     ],
     [
      "is_weekend('mon')",
      "False"
     ],
     [
      "is_weekend('sun')",
      "True"
     ]
    ],
    "hint": "`or 'sun'` hamesha truthy hai. `in (...)` use karo."
   },
   {
    "id": "cond-w",
    "type": "write",
    "prompt": "`fizzbuzz(n)` likho: 15 se divide → 'FizzBuzz', 3 se → 'Fizz', 5 se → 'Buzz', warna number string mein ('7').",
    "starter": "def fizzbuzz(n):\n    # yahan likho\n    pass\n",
    "solution": "def fizzbuzz(n):\n    if n % 15 == 0:\n        return \"FizzBuzz\"\n    if n % 3 == 0:\n        return \"Fizz\"\n    if n % 5 == 0:\n        return \"Buzz\"\n    return str(n)\n",
    "tests": [
     [
      "fizzbuzz(15)",
      "'FizzBuzz'"
     ],
     [
      "fizzbuzz(9)",
      "'Fizz'"
     ],
     [
      "fizzbuzz(10)",
      "'Buzz'"
     ],
     [
      "fizzbuzz(7)",
      "'7'"
     ]
    ],
    "hint": "Pehle 15 check karo (warna 3 wala pehle pakad lega). Number ko string banane ke liye `str(n)`."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "print(bool(\"False\"))\n",
    "options": [
     "True",
     "False",
     "Error",
     "None"
    ],
    "answer": 0,
    "why": "Khaali nahi hai, isliye truthy — chahe text 'False' ho."
   },
   {
    "q": "Output kya hoga?",
    "code": "print(None or 0 or \"hi\")\n",
    "options": [
     "None",
     "0",
     "hi",
     "True"
    ],
    "answer": 2,
    "why": "`or` pehla truthy value deta hai."
   },
   {
    "q": "`if x == 'a' or 'b':` mein kya problem hai?",
    "options": [
     "Syntax error",
     "Hamesha True hota hai",
     "Hamesha False hota hai",
     "Koi problem nahi"
    ],
    "answer": 1,
    "why": "`'b'` akela truthy hai."
   },
   {
    "q": "Output kya hoga?",
    "code": "a = 5\nprint(1 < a < 10, 10 > a > 6)\n",
    "options": [
     "True False",
     "True True",
     "False False",
     "Error"
    ],
    "answer": 0,
    "why": "5, 1 aur 10 ke beech hai; par 6 se bada nahi."
   }
  ]
 },
 {
  "id": "loop",
  "emoji": "🔁",
  "title": "Loops",
  "tagline": "Ek baar likho, hazaar baar chalao",
  "hook": {
   "q": "Index aur value dono chahiye? Pro developers yeh likhte hain:",
   "code": "names = [\"Asha\", \"Ravi\", \"Zoya\"]\nfor i, name in enumerate(names, start=1):\n    print(i, name)\n"
  },
  "idea": "`for` kisi bhi sequence (list, string, range, dict) ke har item par chalta hai. `range(start, stop, step)` numbers deta hai (stop shamil nahi). `while` tab tak chalta hai jab tak condition True ho. `break` loop tod deta hai, `continue` agle round par chala jaata hai.",
  "example": "for n in range(1, 10, 3):\n    print(n)\ncount = 3\nwhile count > 0:\n    print(\"T-minus\", count)\n    count -= 1\n",
  "inside": [
   "`for i in range(len(items))` beginner style hai. Pro style: `for item in items`; index chahiye toh `enumerate`, do lists saath mein toh `zip`.",
   "Loop chalte waqt usi list mein se delete karoge toh items skip ho jaate hain. Nayi list banao (comprehension) ya copy par loop karo.",
   "`for ... else`: else tab chalta hai jab loop bina `break` ke poora ho. 'Mila nahi' wale search ke liye perfect."
  ],
  "power": {
   "text": "`zip` se do lists saath mein, aur `any`/`all` se poora loop ek word mein:",
   "code": "names = [\"Asha\", \"Ravi\"]\nmarks = [91, 78]\nfor n, m in zip(names, marks):\n    print(n, m)\nprint(any(m > 90 for m in marks))\nprint(all(m > 80 for m in marks))\n"
  },
  "trap": {
   "text": "List ko loop ke andar delete karna — items chupchaap chhoot jaate hain:",
   "code": "nums = [2, 4, 5, 6]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)\nprint([n for n in [2, 4, 5, 6] if n % 2 != 0])\n"
  },
  "secret": {
   "title": "for-else: search ka hidden hero",
   "text": "Zyada tar developers ko pata hi nahi ki `for` ke saath `else` lagta hai. Yeh 'found = False' wale flag variable ki zaroorat khatam kar deta hai.",
   "code": "nums = [3, 7, 11]\nfor n in nums:\n    if n % 2 == 0:\n        print(\"Even mila:\", n)\n        break\nelse:\n    print(\"Koi even number nahi\")\n"
  },
  "tasks": [
   {
    "id": "loop-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "total = 0\nfor i in range(1, 5):\n    if i == 3:\n        continue\n    total += i\nprint(total)\n",
    "options": [
     "7",
     "10",
     "6",
     "3"
    ],
    "answer": 0,
    "why": "1 + 2 + 4 = 7; 3 ko `continue` ne skip kiya. range(1, 5) mein 5 shamil nahi."
   },
   {
    "id": "loop-f",
    "type": "fill",
    "prompt": "`count_vowels(text)` complete karo jo vowels (a, e, i, o, u) gine, case ignore karke.",
    "starter": "def count_vowels(text):\n    count = 0\n    for ch in text.lower():\n        if ch in ___:\n            count += 1\n    return count\n",
    "solution": "def count_vowels(text):\n    count = 0\n    for ch in text.lower():\n        if ch in \"aeiou\":\n            count += 1\n    return count\n",
    "tests": [
     [
      "count_vowels('Hello')",
      "2"
     ],
     [
      "count_vowels('PYTHON')",
      "1"
     ],
     [
      "count_vowels('xyz')",
      "0"
     ]
    ],
    "hint": "Saare vowels ek string mein: `\"aeiou\"`."
   },
   {
    "id": "loop-b",
    "type": "bug",
    "prompt": "`find_index(items, target)` target ka pehla index lautaye, na mile toh -1. Abhi galat aa raha hai — indentation dhyan se dekho!",
    "starter": "def find_index(items, target):\n    for i, item in enumerate(items):\n        if item == target:\n            return i\n        return -1\n",
    "solution": "def find_index(items, target):\n    for i, item in enumerate(items):\n        if item == target:\n            return i\n    return -1\n",
    "tests": [
     [
      "find_index([5, 6, 7], 7)",
      "2"
     ],
     [
      "find_index([5, 6, 7], 5)",
      "0"
     ],
     [
      "find_index([], 1)",
      "-1"
     ],
     [
      "find_index([1, 2], 9)",
      "-1"
     ]
    ],
    "hint": "`return -1` loop ke andar hai, isliye pehle hi round mein function khatam. Use loop ke bahar le aao."
   },
   {
    "id": "loop-w",
    "type": "write",
    "prompt": "`running_total(nums)` likho jo har step ka jod lautaye: [1, 2, 3] → [1, 3, 6].",
    "starter": "def running_total(nums):\n    # yahan likho\n    pass\n",
    "solution": "def running_total(nums):\n    result = []\n    total = 0\n    for n in nums:\n        total += n\n        result.append(total)\n    return result\n",
    "tests": [
     [
      "running_total([1, 2, 3])",
      "[1, 3, 6]"
     ],
     [
      "running_total([])",
      "[]"
     ],
     [
      "running_total([5, -5, 5])",
      "[5, 0, 5]"
     ]
    ],
    "hint": "Ek `total = 0` aur ek khaali list rakho. Har number par total badhao aur list mein append karo."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "for i in range(3):\n    pass\nprint(i)\n",
    "options": [
     "2",
     "3",
     "0",
     "Error"
    ],
    "answer": 0,
    "why": "Loop variable loop ke baad bhi rehta hai, aakhri value 2."
   },
   {
    "q": "Output kya hoga?",
    "code": "print(list(range(10, 0, -3)))\n",
    "options": [
     "[10, 7, 4, 1]",
     "[10, 7, 4]",
     "[9, 6, 3]",
     "[]"
    ],
    "answer": 0,
    "why": "10 se -3 ke step mein, 0 tak (shamil nahi)."
   },
   {
    "q": "Do lists ke items ek saath (pair mein) loop karne ka best tareeka?",
    "options": [
     "range(len())",
     "zip()",
     "enumerate()",
     "while loop"
    ],
    "answer": 1,
    "why": "`zip(a, b)` dono ke items jode mein deta hai."
   },
   {
    "q": "Output kya hoga?",
    "code": "for n in [1, 3, 5]:\n    if n > 4:\n        break\nelse:\n    print('done')\nprint(n)\n",
    "options": [
     "done\n5",
     "5",
     "done",
     "Error"
    ],
    "answer": 1,
    "why": "`break` chala, isliye else skip hua."
   }
  ]
 },
 {
  "id": "func",
  "emoji": "🧰",
  "title": "Functions",
  "tagline": "Apna khud ka tool banao",
  "hook": {
   "q": "Yeh function do baar call kiya. Doosri baar kya aayega? Output dekh ke chaunk jaoge!",
   "code": "def add_item(item, box=[]):\n    box.append(item)\n    return box\n\nprint(add_item(\"a\"))\nprint(add_item(\"b\"))\n"
  },
  "idea": "`def` se function banta hai: naam, parameters aur `return`. `return` ke bina function `None` lautata hai. Default value dene se parameter optional ho jaata hai, aur call karte waqt naam se (keyword argument) bhi value de sakte ho.",
  "example": "def greet(name, greeting=\"Namaste\"):\n    return f\"{greeting}, {name}!\"\n\nprint(greet(\"Vansh\"))\nprint(greet(\"Riya\", greeting=\"Hello\"))\nresult = print(\"hi\")\nprint(result)\n",
  "inside": [
   "Default values sirf ek baar (function banate waqt) banti hain. Isliye `box=[]` jaisa mutable default saare calls mein share hota hai — hook mein yahi hua. Sahi tareeka: `box=None`, aur andar `if box is None: box = []`.",
   "Function ke andar bana variable local hota hai. Bahar ka variable badalne ki jagah achha code value `return` karta hai.",
   "Functions bhi objects hain: variable mein rakh sakte ho, list mein daal sakte ho, doosre function ko de sakte ho — jaise `sorted(words, key=len)`."
  ],
  "power": {
   "text": "`*args` aur `**kwargs` — kitne bhi arguments lo:",
   "code": "def total(*nums):\n    return sum(nums)\n\ndef profile(**info):\n    for k, v in info.items():\n        print(k, \"=\", v)\n\nprint(total(1, 2, 3, 4))\nprofile(name=\"Vansh\", city=\"Delhi\")\n"
  },
  "trap": {
   "text": "`return` bhool jaana — function print toh karta hai, par value nahi deta:",
   "code": "def double(x):\n    print(x * 2)\n\ny = double(4)\nprint(y)\n"
  },
  "secret": {
   "title": "Functions ko bhi function milte hain",
   "text": "`key=` mein function do aur `sorted`, `max`, `min` tumhare hisaab se chalenge. `lambda` ek line ka bina naam ka function hai — aage pandas aur ML code mein yeh har jagah dikhega.",
   "code": "words = [\"kiwi\", \"banana\", \"fig\", \"apple\"]\nprint(sorted(words, key=len))\nprint(max(words, key=len))\npeople = [(\"Asha\", 31), (\"Ravi\", 25)]\nprint(sorted(people, key=lambda p: p[1]))\n"
  },
  "tasks": [
   {
    "id": "func-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "def f(x):\n    x = x * 2\n\nn = 5\nf(n)\nprint(n, f(n))\n",
    "options": [
     "5 None",
     "10 None",
     "10 10",
     "5 10"
    ],
    "answer": 0,
    "why": "f andar sirf local x badalta hai aur kuch return nahi karta, isliye None."
   },
   {
    "id": "func-f",
    "type": "fill",
    "prompt": "`power(base, exp)` mein exp ka default 2 karo — `___` ki jagah likho.",
    "starter": "def power(base, exp___):\n    return base ** exp\n",
    "solution": "def power(base, exp=2):\n    return base ** exp\n",
    "tests": [
     [
      "power(3)",
      "9"
     ],
     [
      "power(2, 3)",
      "8"
     ]
    ],
    "hint": "Default value: `exp=2`."
   },
   {
    "id": "func-b",
    "type": "bug",
    "prompt": "`add_tag(tag, tags=[])` har naye call mein purane tags bhi dikha raha hai. Mutable default theek karo!",
    "starter": "def add_tag(tag, tags=[]):\n    tags.append(tag)\n    return tags\n",
    "solution": "def add_tag(tag, tags=None):\n    if tags is None:\n        tags = []\n    tags.append(tag)\n    return tags\n",
    "setup": "first = add_tag('a')\nsecond = add_tag('b')\n",
    "tests": [
     [
      "second",
      "['b']",
      "Naye call mein purana tag nahi aaya?"
     ],
     [
      "add_tag('x', ['y'])",
      "['y', 'x']"
     ]
    ],
    "hint": "Default ko `None` rakho, aur andar `if tags is None: tags = []`."
   },
   {
    "id": "func-w",
    "type": "write",
    "prompt": "`stats(*nums)` likho jo (min, max, average) ka tuple lautaye. Koi number na ho toh None.",
    "starter": "def stats(*nums):\n    # yahan likho\n    pass\n",
    "solution": "def stats(*nums):\n    if not nums:\n        return None\n    return min(nums), max(nums), sum(nums) / len(nums)\n",
    "tests": [
     [
      "stats(1, 2, 3)",
      "(1, 3, 2.0)"
     ],
     [
      "stats(5)",
      "(5, 5, 5.0)"
     ],
     [
      "stats()",
      "None"
     ]
    ],
    "hint": "`nums` ek tuple hai. Khaali ho toh `if not nums: return None`."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "def f():\n    pass\nprint(f())\n",
    "options": [
     "None",
     "0",
     "''",
     "Error"
    ],
    "answer": 0,
    "why": "Bina return ke function None deta hai."
   },
   {
    "q": "`def add(x, items=[])` mein kya khatra hai?",
    "options": [
     "Koi nahi",
     "Default list saare calls mein share hoti hai",
     "Syntax error",
     "items hamesha khaali rehta hai"
    ],
    "answer": 1,
    "why": "Default sirf ek baar banta hai."
   },
   {
    "q": "Output kya hoga?",
    "code": "def f(a, b=3):\n    return a * b\nprint(f(2), f(2, b=5))\n",
    "options": [
     "6 10",
     "5 7",
     "6 6",
     "Error"
    ],
    "answer": 0,
    "why": "2*3 = 6, 2*5 = 10."
   },
   {
    "q": "Output kya hoga?",
    "code": "def f(*args):\n    return len(args)\nprint(f(1, 'a', [2, 3]))\n",
    "options": [
     "3",
     "4",
     "1",
     "Error"
    ],
    "answer": 0,
    "why": "Teen arguments diye; list ek hi argument hai."
   }
  ]
 },
 {
  "id": "dict",
  "emoji": "📒",
  "title": "Dictionaries",
  "tagline": "Data ka phonebook",
  "hook": {
   "q": "Ek line mein: sentence mein kaunse words sabse zyada aaye?",
   "code": "from collections import Counter\ntext = \"to be or not to be\"\nprint(Counter(text.split()).most_common(2))\n"
  },
  "idea": "Dict key → value ki jodiyan rakhta hai: `{'name': 'Vansh', 'age': 25}`. Key se value seedha milti hai — list ki tarah dhoondhna nahi padta. Key unique hoti hai aur immutable honi chahiye (str, int, tuple).",
  "example": "person = {\"name\": \"Vansh\", \"age\": 25}\nperson[\"city\"] = \"Delhi\"\nperson[\"age\"] += 1\nprint(person)\nprint(person[\"name\"], len(person))\nfor key, value in person.items():\n    print(key, \"->\", value)\n",
  "inside": [
   "`d['x']` key na ho toh `KeyError` deta hai; `d.get('x', default)` chup-chaap default deta hai. Real code mein `.get()` bahut use hota hai.",
   "Dict lookup average O(1) hai — 10 lakh items mein bhi utna hi fast jitna 10 mein. 'Yeh hai ya nahi?' wale kaam ke liye list ki jagah dict/set.",
   "Python 3.7+ mein dict insertion order yaad rakhta hai — jis order mein daala, usi mein loop chalega."
  ],
  "power": {
   "text": "Ginti ka pro pattern aur dict comprehension:",
   "code": "votes = [\"a\", \"b\", \"a\", \"c\", \"a\"]\ncount = {}\nfor v in votes:\n    count[v] = count.get(v, 0) + 1\nprint(count)\nprices = {\"tea\": 10, \"coffee\": 30}\nprint({k: v * 2 for k, v in prices.items()})\n"
  },
  "trap": {
   "text": "Loop chalate waqt dict mein key delete/add karoge toh RuntimeError. Keys ki copy par loop karo — `for k in list(d):`",
   "code": "d = {\"a\": 1, \"b\": 0, \"c\": 2}\nfor k in list(d):\n    if d[k] == 0:\n        del d[k]\nprint(d)\n"
  },
  "secret": {
   "title": "Dicts jodne ka sabse chhota tareeka",
   "text": "Python 3.9+ mein `|` operator do dicts merge karta hai (right wali values jeet-ti hain). Aur `defaultdict` grouping ko ek line bana deta hai — data science code mein bahut common.",
   "code": "base = {\"theme\": \"dark\", \"lang\": \"en\"}\nuser = {\"lang\": \"hi\"}\nprint(base | user)\nfrom collections import defaultdict\ngroups = defaultdict(list)\nfor w in [\"apple\", \"avocado\", \"banana\"]:\n    groups[w[0]].append(w)\nprint(dict(groups))\n"
  },
  "tasks": [
   {
    "id": "dict-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "d = {\"a\": 1}\nd[\"b\"] = 2\nd[\"a\"] = 5\nprint(d, d.get(\"z\", 0))\n",
    "options": [
     "{'a': 5, 'b': 2} 0",
     "{'a': 1, 'b': 2} 0",
     "{'a': 5, 'b': 2} None",
     "Error"
    ],
    "answer": 0,
    "why": "'a' ki value 5 ho gayi; 'z' nahi hai toh get ne default 0 diya."
   },
   {
    "id": "dict-f",
    "type": "fill",
    "prompt": "`word_count(text)` complete karo jo har word ki ginti ka dict lautaye.",
    "starter": "def word_count(text):\n    counts = {}\n    for w in text.split():\n        counts[w] = counts.___(w, 0) + 1\n    return counts\n",
    "solution": "def word_count(text):\n    counts = {}\n    for w in text.split():\n        counts[w] = counts.get(w, 0) + 1\n    return counts\n",
    "tests": [
     [
      "word_count('a b a')",
      "{'a': 2, 'b': 1}"
     ],
     [
      "word_count('')",
      "{}"
     ]
    ],
    "hint": "Key na ho toh default dene wala method: `.get(key, 0)`."
   },
   {
    "id": "dict-b",
    "type": "bug",
    "prompt": "`price_of(menu, item)` item na mile toh 0 lautaye — abhi crash hota hai.",
    "starter": "def price_of(menu, item):\n    return menu[item]\n",
    "solution": "def price_of(menu, item):\n    return menu.get(item, 0)\n",
    "tests": [
     [
      "price_of({'tea': 10}, 'tea')",
      "10"
     ],
     [
      "price_of({'tea': 10}, 'cake')",
      "0"
     ]
    ],
    "hint": "`menu[item]` KeyError deta hai. `.get(item, 0)` use karo."
   },
   {
    "id": "dict-w",
    "type": "write",
    "prompt": "`invert(d)` likho jo keys aur values ulti kar de: {'a': 1, 'b': 2} → {1: 'a', 2: 'b'}.",
    "starter": "def invert(d):\n    # yahan likho\n    pass\n",
    "solution": "def invert(d):\n    return {v: k for k, v in d.items()}\n",
    "tests": [
     [
      "invert({'a': 1, 'b': 2})",
      "{1: 'a', 2: 'b'}"
     ],
     [
      "invert({})",
      "{}"
     ]
    ],
    "hint": "Dict comprehension: `{v: k for k, v in d.items()}`."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "d = {\"x\": 1}\nprint(d.get(\"y\"))\n",
    "options": [
     "None",
     "0",
     "KeyError",
     "''"
    ],
    "answer": 0,
    "why": "get bina default ke None deta hai."
   },
   {
    "q": "1 lakh usernames mein baar-baar check karna hai 'yeh naam hai ya nahi'. Best?",
    "options": [
     "list + in",
     "set ya dict + in",
     "string + find",
     "har baar sort karo"
    ],
    "answer": 1,
    "why": "set/dict lookup bahut fast (O(1)) hai."
   },
   {
    "q": "Output kya hoga?",
    "code": "d = {\"b\": 2, \"a\": 1}\nprint(list(d))\n",
    "options": [
     "['b', 'a']",
     "['a', 'b']",
     "[2, 1]",
     "Error"
    ],
    "answer": 0,
    "why": "Dict insertion order yaad rakhta hai; list(d) keys deta hai."
   },
   {
    "q": "Kaunsi cheez dict ki key NAHI ban sakti?",
    "options": [
     "'name'",
     "42",
     "(1, 2)",
     "[1, 2]"
    ],
    "answer": 3,
    "why": "List mutable hai, isliye key nahi ban sakti."
   }
  ]
 },
 {
  "id": "tupset",
  "emoji": "🎯",
  "title": "Tuples & Sets",
  "tagline": "Chhupe rustam",
  "hook": {
   "q": "List se duplicates hatane ka sabse chhota tareeka? Run karke dekho.",
   "code": "nums = [3, 1, 3, 2, 1]\nprint(set(nums))\nprint(sorted(set(nums)))\n"
  },
  "idea": "Tuple list jaisa hai par immutable: `point = (3, 4)`. Jo data badalna nahi chahiye (coordinates, RGB) uske liye. Set unique items ka unordered collection hai: `{1, 2, 3}` — duplicates apne aap hat jaate hain, aur `in` check bahut fast hota hai.",
  "example": "point = (3, 4)\nx, y = point\nprint(x + y)\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b, a | b, a - b)\n",
  "inside": [
   "Ek item ka tuple: `(5,)` — comma zaroori hai! `(5)` sirf number 5 hai.",
   "Tuple immutable hai isliye dict ki key ban sakta hai: `{(28.6, 77.2): 'Delhi'}`. List nahi ban sakti.",
   "Khaali set `set()` se banta hai — `{}` khaali DICT hai, set nahi."
  ],
  "power": {
   "text": "Function se multiple values lautana asal mein tuple hai, aur set operations se data compare ek line mein:",
   "code": "def min_max(nums):\n    return min(nums), max(nums)\n\nlo, hi = min_max([4, 9, 1])\nprint(lo, hi)\nyesterday = {101, 102, 103}\ntoday = {102, 103, 104}\nprint(\"Naye users:\", today - yesterday)\nprint(\"Wapas aaye:\", today & yesterday)\n"
  },
  "trap": {
   "text": "Set ka koi order/index nahi hota — `s[0]` error dega. Order chahiye toh `sorted(s)`:",
   "code": "s = {30, 10, 20}\nprint(sorted(s))\nprint(type({}), type(set()))\n"
  },
  "secret": {
   "title": "Order bachate hue duplicates hatao",
   "text": "`set()` order bigaad sakta hai. Pro trick: `list(dict.fromkeys(items))` — duplicates hat jaate hain aur pehli baar wala order bana rehta hai. Bahut kam log jaante hain!",
   "code": "items = [\"b\", \"a\", \"b\", \"c\", \"a\"]\nprint(list(dict.fromkeys(items)))\n"
  },
  "tasks": [
   {
    "id": "tupset-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "t = (1, 2, 3)\na, *b = t\nprint(a, b, type(t).__name__)\n",
    "options": [
     "1 [2, 3] tuple",
     "1 (2, 3) tuple",
     "1 [2, 3] list",
     "Error"
    ],
    "answer": 0,
    "why": "Star unpacking hamesha list deta hai; t khud tuple hi rehta hai."
   },
   {
    "id": "tupset-f",
    "type": "fill",
    "prompt": "`unique_count(items)` complete karo jo unique items ki ginti lautaye.",
    "starter": "def unique_count(items):\n    return len(___(items))\n",
    "solution": "def unique_count(items):\n    return len(set(items))\n",
    "tests": [
     [
      "unique_count([1, 1, 2])",
      "2"
     ],
     [
      "unique_count([])",
      "0"
     ],
     [
      "unique_count(['a', 'A'])",
      "2"
     ]
    ],
    "hint": "Duplicates hatane wala type: `set`."
   },
   {
    "id": "tupset-b",
    "type": "bug",
    "prompt": "`common(a, b)` dono lists ke COMMON items sorted list mein lautaye. Abhi saare items aa rahe hain.",
    "starter": "def common(a, b):\n    return sorted(set(a) | set(b))\n",
    "solution": "def common(a, b):\n    return sorted(set(a) & set(b))\n",
    "tests": [
     [
      "common([1, 2, 3], [2, 3, 4])",
      "[2, 3]"
     ],
     [
      "common([1], [2])",
      "[]"
     ]
    ],
    "hint": "`|` union hai (sab). Common (intersection) ke liye `&`."
   },
   {
    "id": "tupset-w",
    "type": "write",
    "prompt": "`dedupe(items)` likho jo duplicates hataye par pehli baar wala order rakhe: ['b', 'a', 'b'] → ['b', 'a'].",
    "starter": "def dedupe(items):\n    # yahan likho\n    pass\n",
    "solution": "def dedupe(items):\n    seen = set()\n    result = []\n    for x in items:\n        if x not in seen:\n            seen.add(x)\n            result.append(x)\n    return result\n",
    "tests": [
     [
      "dedupe(['b', 'a', 'b'])",
      "['b', 'a']"
     ],
     [
      "dedupe([3, 1, 3, 2, 1])",
      "[3, 1, 2]"
     ],
     [
      "dedupe([])",
      "[]"
     ]
    ],
    "hint": "Ek `seen = set()` rakho. Jo item seen mein na ho, use result mein jodo aur seen mein daalo."
   }
  ],
  "test": [
   {
    "q": "Output kya hoga?",
    "code": "x = (5)\ny = (5,)\nprint(type(x).__name__, type(y).__name__)\n",
    "options": [
     "int tuple",
     "tuple tuple",
     "int int",
     "tuple int"
    ],
    "answer": 0,
    "why": "Comma hi tuple banata hai, bracket nahi."
   },
   {
    "q": "Output kya hoga?",
    "code": "print(len({1, 2, 2, 3, 3, 3}))\n",
    "options": [
     "3",
     "6",
     "1",
     "Error"
    ],
    "answer": 0,
    "why": "Set mein duplicates hat jaate hain."
   },
   {
    "q": "`{}` kya banata hai?",
    "options": [
     "Khaali set",
     "Khaali dict",
     "Khaali tuple",
     "Error"
    ],
    "answer": 1,
    "why": "Khaali set ke liye `set()`."
   },
   {
    "q": "Output kya hoga?",
    "code": "a = {1, 2, 3}\nb = {3, 4}\nprint(sorted(a ^ b))\n",
    "options": [
     "[1, 2, 4]",
     "[3]",
     "[1, 2, 3, 4]",
     "[1, 2]"
    ],
    "answer": 0,
    "why": "`^` = jo sirf ek mein ho (symmetric difference)."
   }
  ]
 },
 {
  "id": "err",
  "emoji": "🛡️",
  "title": "Errors",
  "tagline": "Dushman nahi, dost hain",
  "hook": {
   "q": "Galat input par program crash na ho, user ko achha message mile — kaise? Run karke dekho:",
   "code": "for value in [\"42\", \"abc\"]:\n    try:\n        print(int(value) * 2)\n    except ValueError:\n        print(f\"'{value}' number nahi hai\")\n"
  },
  "idea": "Error (exception) aane par Python ruk jaata hai aur traceback dikhata hai. Traceback NEECHE se padho: aakhri line error ka type aur wajah batati hai, uske upar wali line batati hai kahan hua. `try/except` se error pakad ke program chalta rakh sakte ho.",
  "example": "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n\nprint(safe_divide(10, 2))\nprint(safe_divide(1, 0))\n",
  "inside": [
   "Kabhi khaali `except:` mat likho — woh har error (typo wale NameError bhi) chhupa deta hai aur bug dhoondhna mushkil ho jaata hai. Specific error pakdo.",
   "`try / except / else / finally`: else tab chalta hai jab error na aaye; finally hamesha chalta hai (file band karna, cleanup).",
   "Python ka style 'EAFP' hai — pehle karo, error aaye toh sambhalo — har cheez pehle se check karne ki jagah."
  ],
  "power": {
   "text": "Apni condition par khud error uthao (`raise`) — functions ko safe banane ka tareeka:",
   "code": "def set_age(age):\n    if age < 0:\n        raise ValueError(\"Age negative nahi ho sakti\")\n    return age\n\ntry:\n    set_age(-3)\nexcept ValueError as e:\n    print(\"Error:\", e)\n"
  },
  "trap": {
   "text": "Bahut bada `try` block — asli galti kahan hui pata nahi chalta. `try` mein sirf woh line rakho jo fail ho sakti hai, baaki `else` mein:",
   "code": "data = {\"price\": \"100\"}\ntry:\n    price = int(data[\"price\"])\nexcept (KeyError, ValueError) as e:\n    print(\"Data kharab hai:\", type(e).__name__)\nelse:\n    print(\"Price:\", price)\nfinally:\n    print(\"Check complete\")\n"
  },
  "secret": {
   "title": "Traceback padhne ka 10-second rule",
   "text": "Pro developers traceback ko neeche se upar padhte hain: (1) aakhri line = error type + message, (2) uske upar = tumhari file ki line number, (3) baaki upar ki lines library ke andar ki — skip. 90% bugs pehle do steps mein mil jaate hain. Aur `assert` se apne assumptions pakdo:",
   "code": "def apply_discount(price, pct):\n    assert 0 <= pct <= 100, \"pct 0-100 ke beech hona chahiye\"\n    return price * (100 - pct) / 100\n\nprint(apply_discount(200, 10))\ntry:\n    apply_discount(200, 150)\nexcept AssertionError as e:\n    print(\"Pakda gaya:\", e)\n"
  },
  "tasks": [
   {
    "id": "err-p",
    "type": "predict",
    "prompt": "Output kya hoga?",
    "code": "try:\n    x = [1, 2][5]\nexcept IndexError:\n    x = -1\nfinally:\n    print(\"done\")\nprint(x)\n",
    "options": [
     "done\n-1",
     "-1\ndone",
     "done",
     "Error"
    ],
    "answer": 0,
    "why": "IndexError pakda gaya (x = -1), finally ne 'done' print kiya, phir x print hua."
   },
   {
    "id": "err-f",
    "type": "fill",
    "prompt": "`to_int(text)` complete karo: number ho toh int lautaye, warna None.",
    "starter": "def to_int(text):\n    try:\n        return int(text)\n    except ___:\n        return None\n",
    "solution": "def to_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return None\n",
    "tests": [
     [
      "to_int('12')",
      "12"
     ],
     [
      "to_int('abc')",
      "None"
     ],
     [
      "to_int('-5')",
      "-5"
     ]
    ],
    "hint": "`int('abc')` kaunsa error deta hai? Wahi pakdo: `ValueError`."
   },
   {
    "id": "err-b",
    "type": "bug",
    "prompt": "`safe_get(items, i)` index galat ho toh None lautaye — par abhi bhi crash hota hai.",
    "starter": "def safe_get(items, i):\n    try:\n        return items[i]\n    except KeyError:\n        return None\n",
    "solution": "def safe_get(items, i):\n    try:\n        return items[i]\n    except IndexError:\n        return None\n",
    "tests": [
     [
      "safe_get([1, 2], 0)",
      "1"
     ],
     [
      "safe_get([1, 2], 5)",
      "None"
     ]
    ],
    "hint": "List ka galat index KeyError nahi, `IndexError` deta hai."
   },
   {
    "id": "err-w",
    "type": "write",
    "prompt": "`parse_prices(items)` likho: strings ki list ko int mein badlo, jo number na ho use skip karo. ['10', 'x', '25'] → [10, 25].",
    "starter": "def parse_prices(items):\n    # yahan likho\n    pass\n",
    "solution": "def parse_prices(items):\n    result = []\n    for s in items:\n        try:\n            result.append(int(s))\n        except ValueError:\n            pass\n    return result\n",
    "tests": [
     [
      "parse_prices(['10', 'x', '25'])",
      "[10, 25]"
     ],
     [
      "parse_prices([])",
      "[]"
     ],
     [
      "parse_prices(['a'])",
      "[]"
     ]
    ],
    "hint": "Loop mein har item par `try: result.append(int(s))`, `except ValueError: pass`."
   }
  ],
  "test": [
   {
    "q": "Traceback padhte waqt sabse pehle kaunsi line dekhni chahiye?",
    "options": [
     "Sabse upar wali",
     "Sabse neeche wali (error type + message)",
     "Beech wali",
     "Koi bhi"
    ],
    "answer": 1,
    "why": "Aakhri line batati hai kya hua."
   },
   {
    "q": "Output kya hoga?",
    "code": "try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('zero')\nelse:\n    print('ok')\n",
    "options": [
     "zero",
     "ok",
     "zero\nok",
     "Error"
    ],
    "answer": 0,
    "why": "Error aaya, isliye else nahi chala."
   },
   {
    "q": "Khaali `except:` kyun bura hai?",
    "options": [
     "Slow hota hai",
     "Har error (typo bhi) chhupa deta hai",
     "Syntax error deta hai",
     "Kabhi chalta hi nahi"
    ],
    "answer": 1,
    "why": "Bugs chhup jaate hain."
   },
   {
    "q": "Output kya hoga?",
    "code": "def f():\n    try:\n        return 'try'\n    finally:\n        print('finally')\nprint(f())\n",
    "options": [
     "finally\ntry",
     "try\nfinally",
     "try",
     "finally"
    ],
    "answer": 0,
    "why": "finally return se pehle chalta hai, phir value print hoti hai."
   }
  ]
 }
];
