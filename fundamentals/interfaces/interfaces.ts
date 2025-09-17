interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // Method to summarize the vehicle
}

// Can only have summmary field and no other fields
// In the function is we only ask for the sunmmary field then ts does not check whether other fiels are present or not
// interface Vehicle {
//   summary(): string; // Method to summarize the vehicle
// }

const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}\n`);
  //   console.log(vehicle.summary());
};

printVehicle(oldCivic);

// ----------------------------------------------------------------------
// Interfaces make functions reusable
interface Reportable {
  summary(): string; // Method to summarize the reportable item
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}, Carbonated: ${this.carbonated}, Sugar: ${this.sugar}`;
  },
};

// Common method for both Vehicle and drink
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Can pass any object that implements the Reportable interface
printSummary(drink);
printSummary(oldCivic);
