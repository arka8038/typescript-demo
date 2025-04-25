// Object types

// Object types are used to define the shape of an object, including its properties and their types. They are useful for creating complex data structures and ensuring type safety in your code.
// In TypeScript, you can define object types using interfaces or type aliases. Both approaches are valid, but interfaces are generally preferred for defining object shapes due to their extensibility and compatibility with class-based programming.

// In this example, we will explore how to define and use object types in TypeScript, including optional properties, readonly properties, and index signatures.

let user: {
  name: string; // Required property
  age: number; // Required property
  email?: string; // Optional property
  readonly id: number; // Readonly property
  [key: string]: any; // Index signature for additional properties
} = {
  name: 'Alice',
  age: 30,
  id: 1,
};

console.log(user.name); // Output: Alice
console.log(user.age); // Output: 30
console.log(user.email); // Output: undefined (optional property)
console.log(user.id); // Output: 1 (readonly property)
console.log(user); // Output: { name: 'Alice', age: 30, id: 1 }

// Must not be null or undefined
let val: {} = 'Hello'; // no error - Can take any value except null or undefined
// val = {}; // No error - Empty object
// val = []; // No error - Empty array
// val = null; // Error: Type 'null' is not assignable to type '{}'.
// val = undefined; // Error: Type 'undefined' is not assignable to type '{}'.
val = 42; // No error
val = true; // No error
console.log(val);

// Record types
// Record types are a built-in utility type in TypeScript that allows you to create an object type with specific keys and values.
// The Record type is defined as Record<K, T>, where K is the type of the keys and T is the type of the values.
let data: Record<string, number | string>;

data = {
  name: 'John',
  age: 30,
  id: 'abc',
};

console.log(data);
