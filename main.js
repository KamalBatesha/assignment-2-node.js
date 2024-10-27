// 1. Write a function that uses a `for` loop to print numbers from 1 to 10. If the number is divisible by 3, skip printing the number
for (let i = 1; i <= 10; i++) {
  i % 3 && console.log(i);
}

//2. Write a function that uses a `while` loop to calculate the sum of numbers from 1 to 100.
let sum = 0;
let i = 1;
while (i <= 100) {
  sum += i++;
}
console.log(sum);

// 3. Implement a function using `forEach` to iterate over an array and print each element.
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => console.log(element));

//4. Explain the difference between `forEach` and `for...of` loops in JavaScript.
//forEach is a method that is called on an array and it takes a callback function as an argument
//for...of is a loop that can be used to iterate over arrays, sets, maps
//and other iterable objects. It is a more modern and flexible way of iterating over arrays.
//forEach is synchronous, while for...of is asynchronous.
// forEach is not supported in older browsers, while for...of is supported in all modern browsers.
// for...of can take  a break  and continue statement, while forEach cannot.

//forEach
arr.forEach((element) => {
  // do something with element
  console.log(element);
});
//for...of
for (const element of arr) {
  // do something with element
  console.log(element);
}

// 5. Write a function that destructures an object to extract values and returns a formatted string
const person = { name: "John", age: 25 };
function formatPerson(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}
console.log(formatPerson(person));

// 6. Use the spread operator to merge two arrays, then return the merged array
function mergeArr(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArr([1, 2, 3], [4, 5, 6]));

// 7. Write a function that accepts multiple parameters (two or more) and returns their sum
function sumParams(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sumParams(1, 2, 3, 4));

// 8. Compare primitive and non-primitive data types in JavaScript with examples
// Primitive data types: number, string, boolean, null, undefined, symbol
// Non-primitive data types: object, array, function
const primitive = 5;
const nonPrimitive = [1, 2, 3];
// Primitive data types are immutable, while non-primitive data types are mutable
// Primitive data types are passed by value, while non-primitive data types are passed by reference

// primitive=7; console.log(primitive); => error
// nonPrimitive.push(4); console.log(nonPrimitive); => [1, 2, 3, 4]

// primitive store the value 5, nonPrimitive store the reference to the array [1, 2, 3]
let primitive2 = primitive;
primitive2++;
console.log(primitive2, primitive); //  6 5 they are different

let nonPrimitive2 = nonPrimitive;
nonPrimitive2.push(4);
console.log(nonPrimitive2, nonPrimitive); // [1, 2, 3, 4] ,[1, 2, 3, 4]  they are the same

// 9. Explain how hoisting works in JavaScript and describe the Temporal Dead Zone (TDZ)
// Hoisting is the process of moving variable and function declarations to the top of their scope
// Variables are initialized with a value of undefined in the TDZ
// TDZ is the period between the start of the scope and the initialization of the variable
// TDZ is used to prevent the use of a variable before it is initialized
// let and const are hoisted, but let and const are not initialized until the code is executed
// var is hoisted, but var is initialized with a value of undefined in the TDZ
// var is initialized with a value of undefined in the TDZ, but var is not blocked by TDZ
// let and const are blocked by TDZ, but var is not blocked by TDZ
// function  declarations are hoisted, but expression function  are not hoisted and  are blocked by TDZ

// 10. Write a function that demonstrates closure by creating a counter function that returns the number of times it has been called.
function createCounter() {
  let count = 0; // Variable to store the count

  // Inner function that increments the count and returns it
  function counter() {
    count++;
    return count;
  }

  return counter; // Returning the inner function
}

// Creating a counter function using the createCounter function
const myCounter = createCounter();

// Testing the counter function
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

// 11. Create a function that returns a promise which resolves after 3 seconds with a 'Success' message
function delayedSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// 12. Convert the previous promise-based function to use `async` and `await`
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedSuccess2() {
  await delay(3000);
  console.log("Success2");
}
delayedSuccess2();

// 13. Create a function that returns a promise, which resolves if a random number is greater than 5, otherwise it rejects.
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
      resolve("Random number is greater than 5");
    } else {
      reject("Random number is not greater than 5");
    }
  });
}
// Testing the function
randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// 14. Implement a function that chains multiple .then() handlers to a promise to demonstrate promise chaining.
function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise resolved");
    }, 3000);
  });
}
function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second promise resolved");
    }, 2000);
  });
}
function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third promise resolved");
    }, 1000);
  });
}

// Testing the function
one()
  .then((message) => {
    console.log(message);
    return two();
  })
  .then((message) => {
    console.log(message);
    return three();
  })
  .then((message) => {
    console.log(message);
  });

// 15. Implement a function that handles errors using `try...catch` in an asynchronous operation
async function asyncOperation() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Something went wrong");
      }, 2000);
    });
    console.log(result); //  This will not be executed
  } catch (error) {
    console.error(error);
  }
}
asyncOperation();
