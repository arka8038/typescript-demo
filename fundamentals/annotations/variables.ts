// Variable Annotations in TypeScript

// Primitives with Explicit Type Annotations
let apples: number = 5; // Declaring a variable 'apples' with type 'number'
let speed: string = 'fast'; // Declaring a variable 'speed' with type 'string'

// Uncommenting the next line would cause a TypeScript error
// apples = 'hi'; // Error: Type 'string' is not assignable to type 'number'

// Special Types: null and undefined
let nothingMuch: null = null; // Explicitly typed as 'null'
let nothing: undefined = undefined; // Explicitly typed as 'undefined'

// Built-in Objects
let now: Date = new Date(); // Declaring 'now' as a Date object

// Arrays with Type Annotations
let colors: string[] = ['a', 'b', 'c']; // Array of strings
let myNumbers: number[] = [1, 2, 3]; // Array of numbers
let truths: boolean[] = [true, false, true]; // Array of booleans

// Classes and Type Annotations
class Car {} // Defining a class 'Car'
let car: Car = new Car(); // Declaring a variable of type 'Car'

// Object Literal Type Annotations
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}; // An object with 'x' and 'y' properties, both of type 'number'

// Function Type Annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}; // Function that takes a number as an argument and returns nothing (void)

// When to Use Type Annotations in TypeScript

// 1) Handling 'any' type from JSON.parse
const json = '{"x": 10, "y": 20}';
// JSON.parse() returns 'any', meaning TypeScript cannot infer the structure automatically
const coordinates = JSON.parse(json); // Type is 'any'
console.log(coordinates); // {x: 10, y: 20}

// The issue: TypeScript doesn't know 'coordinates' has 'x' and 'y' properties
// Fix: Explicitly annotate the expected structure
const json1 = '{"x": 10, "y": 20}';
const coordinates1: { x: number; y: number } = JSON.parse(json1); // Explicit type annotation
console.log(coordinates1); // {x: 10, y: 20}

// 2) Declaring a variable first and assigning it later
let words = ['red', 'green', 'blue'];

// If we don't initialize 'foundWord', TypeScript infers it as 'any'
// let foundWord: boolean; // Without initialization, it would be implicitly 'any'

// A better approach:
let foundWord = false; // Explicitly initializing as 'false' (boolean)

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // If 'green' is found, set 'foundWord' to true
  }
}

// 3) Handling variables whose type inference might be incorrect
let numbers = [-10, -1, 12];

// Without an explicit annotation, TypeScript might not infer the correct type
let numberAboveZero: number | boolean = false; // This allows storing either a 'number' or 'boolean'

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // TypeScript allows this since 'numberAboveZero' can be a number or boolean
  }
}
