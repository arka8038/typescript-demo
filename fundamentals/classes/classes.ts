// ✅ Parent Class: Vehicle1
// This class demonstrates the use of:
// - Class properties
// - Constructor shorthand
// - Access modifiers (public, private, protected)
// - Instance methods

class Vehicle1 {
  // ✅ Constructor using shorthand to declare and initialize 'color'
  constructor(public color: string) {}

  // ✅ Protected method: Accessible within this class and subclasses
  protected drive(): void {
    console.log('Moving');
  }

  // ✅ Private method: Only accessible within this class (not from subclass or instance)
  private honk(): void {
    console.log('Beep');
  }

  // ✅ Public method: Accessible from outside the class
  public stop(): void {
    console.log('Stopping');
  }
}

// ✅ Create an instance of Vehicle1
const vehicle = new Vehicle1('blue');
console.log(vehicle.color); // Accessing public property

// ------------------------------------------------------

// ✅ Child Class: Car10 extends Vehicle1
// Demonstrates:
// - Inheritance using 'extends'
// - Calling the parent constructor using 'super'
// - Method overriding
// - Accessing protected methods

class Car10 extends Vehicle1 {
  // ✅ Declare a new property 'wheels' and pass 'color' to parent constructor
  constructor(public wheels: number, color: string) {
    super(color); // Call to parent class constructor is required
  }

  // ✅ Method Overriding:
  // Overriding the 'drive' method from Vehicle1 with new behavior
  public drive(): void {
    console.log('Voom');
  }

  // ✅ Custom method in subclass
  public startDrivingProcess(): void {
    // Call the overridden 'drive' method
    this.drive();

    // Access the new property defined in this class
    console.log(`Number of wheels: ${this.wheels}`);

    // ❌ this.honk();
    // ERROR: 'honk' is private in Vehicle1, so it's not accessible here
  }
}

// ✅ Create an instance of Car10
const car10 = new Car10(4, 'red');

// ✅ Call method defined in child class
car10.startDrivingProcess(); // Output: Voom, Number of wheels: 4

// ✅ Call method inherited from parent class
car10.stop(); // Output: Stopping
