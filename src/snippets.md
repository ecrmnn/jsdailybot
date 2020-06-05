-----

> ♾ Did you know console.log() accepts an infinite number of arguments? #JavaScript #100DaysOfCode
```js
console.log(
  firstVariable,
  secondVariable,
  thirdVariable,
  fourthVariable,
);
```

-----

> 👋 Did you know console.table() will render your data in a table? #JavaScript #ES6 #100DaysOfCode
```js
// Array of strings
console.table(["apples", "oranges", "bananas"]);

// Object
console.table({
  name: 'John Doe',
  age: 30,
});
```

-----

> ⏳ You can time your functions using console.time() and console.timeEnd(). #JavaScript #100DaysOfCode
```js
console.time('My Timer');

console.timeEnd('My Timer');
//=> My Timer: 4831.248046875ms
```

-----

> ⚠️ You can display a warning in the console with console.warn() #JavaScript #100DaysOfCode
```js
console.warn('This is a warning');
console.log('Normal console.log');
```

-----

> 🖨 Did you know that you can use the spread operator to copy an array in #JavaScript?
```js
const original = [1, 2, 3, 4, 5];
const copy = [...original];
```

-----

> 🥇 You can also use destructuring when getting the first item in an array! #ES6 #100DaysOfCode #JavaScript
```js
const fruits = ['apple', 'orange', 'mango'];

const [apple] = fruits;
```

-----

> 😲 Did you know that you can destructure a string to an array? #100DaysOfCode #JavaScript #ES6
```js
const numbers = '123456789';

const [...integers] = numbers;
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

-----

> 🙌 Use the find method when you want the first item that passes a test function! #JavaScript #ES6 #100DaysOfCode
```js
const numbers = [4, 9, 16, 25, 29];
const first = numbers.find((value) => value > 18);
//=> 25
```

-----

> ♾ Pro tip! Infinity is a numeric value representing infinity. #JavaScript #ES6 #100DaysOfCode
```js
Infinity > 9999999999999999
//=> true
```

-----

> 🤙 Here's how to merge multiple arrays with the spread operator! #ES6 is amazing! #JavaScript #100DaysOfCode
```js
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const merged = [...firstArray, ...secondArray];
//=> [1, 2, 3, 4, 5, 6]
```

-----

> 🔥 Hot tip! You can merge objects using only the spread operator! No more Object.assign! #E6
```js
const player = {
  name: 'Mohamed Salah',
  nationality: 'Egyptian',
};

const club = {
  club: 'Liverpool FC',
};

const merged = { ...player, ...club };
```

-----

> 🔥 Nullish coalescing operator (??) returns its right-hand side value when its left-hand side value is null or undefined! #JavaScript #ES2021 #100DaysOfCode
```js
const name = undefined ?? 'John';
//=> John

const score = 0 ?? 42;
//=> 0
```

-----

> 🔢 Number.isInteger() returns true if the argument is an integer! #JavaScript #ES6 #100DaysOfCode
```js
Number.isInteger(10);
//=> true

Number.isInteger(10.5);
//=> false
```

-----

> 💄 Use Set objects to filter out duplicates in your arrays! #JavaScript #100DaysOfCode
```js
const array = [1, 1, 1, 1, 2, 3];
const uniqueArray = [...new Set(array)]
//=> [ 1, 2, 3 ]
```

-----

> 😂 Make your #JavaScript talk with #SpeechSynthesis! #ES2020 #WebSpeechAPI #100DaysOfCode
```js
const utterance = "This is your console speaking";

speechSynthesis.speak(
  new SpeechSynthesisUtterance(utterance)
);
```

-----

> You can verify the end of a string with String.endsWith() 🌶 #JavaScript #ES6 #100DaysOfCode
```js
const statement = 'I love JavaScript';

statement.endsWith('JavaScript');
//=> true
```

-----

> Use String.startsWith() to determine whether a string begins with the characters of a specified string 😍 #JavaScript #ES6 #100DaysOfCode
```js
const statement = 'Awesome JavaScript';

statement.startsWith('Awesome');
//=> true

statement.startsWith('Awe');
//=> true

statement.startsWith('a');
//=> false
```

-----

> 🔥 You can cast a value to a string with the String object. #100DaysOfCode #ES6 #JavaScript
```js
String(1000);
//=> '1000'

String([1, 2, 3]);
//=> '1,2,3'
```

-----

> 💡 String.substr() is considered a legacy function. Prefer using String.substring(). #100DaysOfCode #JavaScript #ES6
```js
const string = 'Awesome';

// Legacy
string.substr(1, 2);
//=> we

// Preferred
string.substring(1, 3);
//=> we
```

-----

> 🔥 Template literals are string literals allowing embedded expressions. #100DaysOfCode #JavaScript #ES6
```js
// Single line
`string text`

// Multi line
`string text line 1
 string text line 2`

// Embedded expression
`string text ${expression} string text`
```

-----

> ⚡️ Simply use filter(Boolean) to remove falsy values from an array in #JavaScript. #100DaysOfCode
```js
const myArray = ['Hello', '', false, undefined, null];

myArray.filter(Boolean);
//=> ['Hello']
```

-----

> ☄️ Fastest way to check if an array only contains truthy values in #JavaScript. #ES6 #100DaysOfCode
```js
['My', 'name', 'is', 'John'].every(Boolean);
//=> true

['My', 'name', 'is', ''].every(Boolean);
//=> false

['My', 'name', 'is', null].every(Boolean);
//=> false
```

-----

> 💥 Use Object.values() to retrieve all the given object's enumerable property values. #ES6 #JavaScript #100DaysOfCode
```js
const person = {
  name: 'Elon Musk',
  company: 'Space X',
  title: 'CEO',
};

Object.values(person);
//=> ["Elon Musk", "Space X", "CEO"]
```
-----

> ⭐️ You can repeat a string using String.repeat(). #JavaScript #ES6 #100DaysOfCode
```js
'xo'.repeat(2);
//=> xoxo
```

-----

> 🔥 Awesome querySelectorAll() cheat sheet #JavaScript #ES6 #100DaysOfCode #CheatSheet
```js
// Returns all <form> elements
document.querySelectorAll('form');

// Returns all elements with the text-red class
document.querySelectorAll('.text-red');

// Returns all links that opens in a new tab
document.querySelectorAll('a[target=_blank]');

// Returns all elements with data-hotkey attribute
document.querySelectorAll('[data-hotkey]')
```

-----

> 🤙 Set and get attributes on elements using #JavaScript. #100DaysOfCode
```js
// Set disabled="true" on an element
el.setAttribute('disabled', true);
// Set id on an element
el.setAttribute('id', 'title');

// Get classes from an element
el.getAttribute('class');
// Get data attributes from an element
el.getAttribute('data-lazy');
```

-----

> 🎨 Apply styles to elements with #JavaScript. #100DaysOfCode
```js
// Set background-color to "red"
el.style.backgroundColor = 'red';

// Set padding "10px" in all directions
el.style.padding = '10px';

// Rotate element 18 degrees
el.style.transform = 'rotate(18deg)';
```

-----

> ☄️ Got to love filter, map and reduce. #JavaScript #100DaysOfCode #ES6
```js
// Filter out numbers that are not greater than 2
[1, 2, 3].filter((number) => number > 2);
//=> [3]

// Multiply each number by 2
[1, 2, 3].map((number) => number * 2);
//=> [2, 4, 6]

// Reduce all numbers to a single value
[1, 2, 3].reduce((acc, number) => acc + number);
//=> 6
```

-----

> 👀 Toggle elements using native #JavaScript. #100DaysOfCode
```js
// Get element with ID "modal"
const el = document.querySelector('#modal');

// Hide element
el.style.display = 'none';

// Show element
el.style.display = 'block';
```

-----

> ⭐️ Use Buffer.from when you need to encode and decode in #JavaScript. #100DaysOfCode
```js
Buffer.from('Convert me').toString('base64');
// 'Q29udmVydCBtZQ=='

Buffer.from('Q29udmVydCBtZQ==', 'base64');
// 'Convert me'
```

-----

> 🗂 Did you know process.cwd() returns the current working directory of the #Nodejs process? #JavaScript #100DaysOfCode
```js
console.log(`Current directory: ${process.cwd()}`);
```
