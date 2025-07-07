// 📘 JavaScript: call(), apply(), bind() - Complete Guide

// 🔹 1. Understanding `this`
// In JavaScript, `this` depends on HOW a function is called, not where it is defined.

const personOne = {
    name: "Anuj",
    age: 22,
    greet() {
        console.log(this.name);
    }
};

personOne.greet(); 
// Output: Anuj, no prblem work fine (this reffer -> personOne)


// ❗ 2. But problem tab aati hai jaab function ka context change ho jata hai, for example :-
// 🔸 Case 1: Normal function call
function printProperty(propertyName) {
    console.log(this[propertyName]);
}

printProperty("name"); 
// Output: undefined (this → global object)


// 🔸 Case 2: Function reference (context lost)
const personTwo = {
    name: "Arun",
    age: 24,
    greet() {
        console.log(this.name);
    }
};

const detachedGreet = personTwo.greet;
detachedGreet(); 
/*  Output: undefined (this lost) 
    because this is pointing to global object and global object me name property nahi hai, so this is undefined
*/ 

// ✅ 3. To solve this problem we can use Call, Apply and Bind methods.These methods allow you to manually set `this`.

// NOTE:
// - First argument is always `this`
// - call, apply, bind arrow functions par kaam nahi karte (for this)
// - Arrow functions do not have their own this; 
//   therefore, methods like call(), apply(), and bind() cannot override their this context.

// 🔹 4. call() Method

// 👉 Executes immediately
// 👉 Arguments passed individually

function printUserDetail(propertyName) {
    console.log(this[propertyName]);
}

const userA = { name: "Anuj", age: 22 };
const userB = { name: "Arun", age: 24 };

printUserDetail.call(userA, "name"); // Anuj
printUserDetail.call(userB, "age");  // 24

// ❗ call returns result not a function, so we cannot store it in a variable and call it later, 
// because call method returns the result of the function call, and in this case, 
// printUserDetail function does not return anything, so result is undefined and undefined is not a function.

const result = printUserDetail.call(userA, "name");
console.log(result); // undefined


// 🔹 5. apply() Method
// 👉 Similar to call() but arguments are passed as an array 
// 👉 Executes immediately
// 👉 Arguments passed as array

function greetUser(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);
}

const userC = { name: "Anuj" };

greetUser.apply(userC, ["Delhi", "India"]);
// Output: Hello Anuj from Delhi, India


// 🔹 6. bind() Method
// 👉 Returns a new function
// 👉 Does NOT execute immediately
// 👉 Permanently binds `this`

const userD = { name: "Arun" };

const boundGreet = greetUser.bind(userD, "Mumbai", "India");

boundGreet(); 
// Output: Hello Arun from Mumbai, India


// 🔥 7. Quick Summary

// call()  → immediate execution, comma-separated args
// apply() → immediate execution, array args
// bind()  → returns new function, delayed execution


// ⚠️ Important Notes

// ❌ Arrow functions ignore call/apply/bind
// Because they do NOT have their own `this`

const arrowFunction = () => {
    console.log(this);
};

arrowFunction.call(userA); 
// ❌ this will NOT change (still lexical)

// ✅ Final Takeaway

// Use call()  → when you want immediate execution
// Use apply() → when arguments are in array
// Use bind()  → when you need reusable function with fixed `this`