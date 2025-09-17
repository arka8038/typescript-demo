enum Role {
  Admin = 1, // Admin role starts at 1 instead of 0 if assigned explicitly
  User,
  Guest,
}

let userRole: Role = Role.User;
let guestRole: Role = Role.Guest;
let admintRole: Role = 1; // No error, but this is not a valid role
// userRole = 5; // No error, but this is not a valid role
console.log(userRole); // Output: 5 
console.log(guestRole); // Output: 2 
console.log(admintRole); // Output: 0 

// Assigning string values to enum members
enum StringRole {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  User = 'USER',
}

let stringUserRole: StringRole = StringRole.User;
let stringGuestRole: StringRole = StringRole.Guest;
let stringAdminRole: StringRole = StringRole.Admin;
// userRole = 'ADMIN'; // No error, but this is not a valid role
console.log(stringUserRole); // Output: ADMIN 
console.log(stringGuestRole); // Output: GUEST 
console.log(stringAdminRole); // Output: USER
