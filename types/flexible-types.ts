// Using 'any'
let anyValue: any = "Hello, World!";

anyValue = 42; // No error
anyValue = true; // No error
anyValue = { name: "John" }; // No error

// Using union types (using | operator)
let unionValue: string | number | boolean = "Hello, World!";
unionValue = 42; // No error
unionValue = true; // No error
// unionValue = { name: "John" }; // Error: Type '{ name: string; }' is not assignable to type 'string | number | boolean'.
// unionValue = null; // Error: Type 'null' is not assignable to type 'string | number | boolean'.