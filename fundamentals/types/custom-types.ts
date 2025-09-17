// Custom Types - Creating Your Own Types

// Custom types allow you to define your own types in TypeScript.
// This can be done using interfaces, type aliases, and classes.
// Custom types help in creating more readable and maintainable code by providing meaningful names to complex structures.

type Roles = 'admin' | 'user' | 'guest'; // Custom type using union types
type User = {
  name: string; // Required property
  age: number; // Required property
  role: Roles; // Custom type using union types
  email?: string; // Optional property
  readonly id: number; // Readonly property
  [key: string]: any; // Index signature for additional properties
};

let user1: User = {
  name: 'Alice',
  age: 30,
  role: 'admin',
  id: 1,
  email: 'OYB0j@example.com',
};

console.log(user1.name); // Output: Alice
console.log(user1.age); // Output: 30
console.log(user1.role); // Output: admin
console.log(user1.email); // Output:
console.log(user1);
