class Employee {
    constructor(name, age) {
        this.name = name; // Initialize name
        this.age = age;   // Initialize age
        console.log("Employee created");
    }

    display() {
        console.log(`Employee name: ${this.name}`);
        console.log(`Employee age: ${this.age}`);
    }
}

// Example Usage:
const emp = new Employee("John", 30);
emp.display();
