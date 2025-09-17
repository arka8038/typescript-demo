// Literal Types - Specific Values
// Literal types are specific values that a variable can hold. They can be used to create more precise types in TypeScript.

let literalString: 'Word' | 'Hello' = 'Hello'; // No error
literalString = 'Word'; // No error
// literalString = 'World'; // Error: Type '"World"' is not assignable to type '"Word" | "Hello"'.
console.log(literalString); // Output: Word

let nums: [-1 | 1, number] = [1, 2]; // No error
// nums = [2, 3]; // Error: Type 'number' is not assignable to type '-1 | 1'.
// nums = [1, 2]; // No error
console.log(nums); // Output: [ 1, 2 ]
