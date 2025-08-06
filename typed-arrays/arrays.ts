// 1. Auto inferences types
const carMakers = ['ford', 'toyota', 'chevrolet'];
const dates = [new Date(), new Date()]; // can put complex object ex = Date[]

// When to add type annotations?
// During initialization array as empty array we add annotation
const bikeMakers: string[] = [];

// Multi dimensional array declaration
const bikeMakersMultiDim: string[][] = [];

//--------------------------------------------------------------------

// 1. Helps with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// 2. Helps prevent incompatible values
// carMakers.push(100) // Will throw incomatible error

// 3. Help with 'map', 'forEach', 'reduce' etc...
carMakers.map((car: string): string => {
  return car.toUpperCase(); // as ts inferences car as string we get a lotta autocomplete methods on car using .
});

// ----------------------------------------------------------------------

// Flexible types in array
const impDates: (string | Date)[] = [];
impDates.push(new Date());
impDates.push('2020-09-12');

//throw error incompatible type
// impDates.push(100)

// -----------------------------------------------------------------------
