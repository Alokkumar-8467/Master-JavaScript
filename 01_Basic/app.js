console.log("first");

/* 
Basically Console is an Object and inside 
this console we have lots of method to do.
*/

console.log(2 + 2);

console.log({ name: "alok" });

console.warn("This is human made warning");

console.table({ name: "alok", age: "24" });

/* 
Variable

  (reserved keyword) (variable name) (type of value)

  const name = alok;

*/

// 1. Declared variable.
let name;
console.log(
  "This variable is undefined bacause it decalred but never assign any value to it. ",
  name
);
// when we see this name in console it give undefine,
// because name is declared but never assign any value to it.

// 2. Assign value to variable.
let fruit;
fruit = "mango";
console.log(fruit);

// 3. We can't provide any reserved keyword to variable.

// If we decalre any variable with const then we can't change that variable value further.

const age = "kola";
// age = "ram";
// TypeError: Assignment to constant variable.at app.js:41:5

/* *********************************************** */

// Variable Exercise.
let whatDoYouWannaBecomeInYourLife = "Programmer";
let gender = "male";
let twitterHandle = "kola@kola";

console.log(whatDoYouWannaBecomeInYourLife)
console.log(gender)
console.log(twitterHandle)

/* *********************************************** */

// Primitive Types

  // 1. Number

  let num = 2;
  console.log(num)

  console.log(2 + 2);
  console.log(2 - 2);
  console.log(2 * 2);
  console.log(2 % 2);
  console.log(2 / 2);
  console.log(3 ** 3);

  let counters = 0;
  counters++;
  console.log(counters)
    counters--;
  console.log(counters)

  let num1 = 10;
  console.log(num1 + undefined)   

/* *********************************************** */
// Number Exercise.

let firstNum = 20;
let secondNum = 10;

console.log(firstNum + secondNum);
console.log(firstNum - secondNum);
console.log(firstNum * secondNum);
console.log(firstNum / secondNum);
console.log(firstNum % secondNum);
console.log(firstNum ** firstNum);
console.log(secondNum ** secondNum);



/* *********************************************** */
  // 2. Boolean

  let number1 = true
  console.log(number1)

  let number2 = false
  console.log(number2)

/* *********************************************** */

// falsy value

/* 

false
null
undefined
0
-0 
NaN
'', "", ``, (empty quotes)

other than these are all truthy value.

*/

/* 
null VS undefined

null: null can be defined by programmers.
undefined: undefined is defined or set by JavaScript Compiler.
*/

