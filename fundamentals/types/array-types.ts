// Arrays and Objects in TypeScript
// Arrays - A collection of elements of the same type
// Objects - A collection of key-value pairs

// Arrays in TypeScript
let hobbies: string[] = ['Reading', 'Gaming', 'Cooking'];
hobbies.push('Traveling'); // No error
// hobbies.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log('Hobbies:', hobbies); // Output: Hobbies: [ 'Reading', 'Gaming', 'Cooking', 'Traveling' ]

// Advanced Array Types -
let mixedArray: (string | number)[] = ['Hello', 42, 'World'];
mixedArray.push(42); // No error
mixedArray.push('Hello'); // No error
mixedArray = [5, 1]; // No error
console.log('Mixed Array:', mixedArray); // Output: Mixed Array: [ 'Hello', 42, 'World', 42, 'Hello' ]

// Generic Arrays - Using Array<T> Syntax
let genericArray: Array<string | number> = ['TypeScript', 'JavaScript'];
genericArray.push('Python'); // No error
genericArray.push(3.14); // No error
console.log('Generic Array:', genericArray); // Output: Generic Array: [ 'TypeScript', 'JavaScript', 'Python', 3.14 ]

// Tuple Types - Fixed Length Arrays
let tuple: [string, number] = ['Alice', 30]; // No error
// tuple = [30, 'Alice']; // Error: Type 'number' is not assignable to type 'string'.
tuple[0] = 'Bob'; // No error
tuple[1] = 40; // No error
console.log('Tuple:', tuple); // Output: Tuple: [ 'Bob', 40 ]
