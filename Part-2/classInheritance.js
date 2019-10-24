class Vehicle {
	constructor() {
		this.passengers = [];
		console.log("Vehicle Created");
	}
	addPassenger(p) {
		this.passengers.push(p);
	}
}

class Car extends Vehicle {
	constructor() {
		super();
		console.log("Car Created");
	}
	deployAirbags() {
		console.log("BWoosh!");
	}
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);
//v.deployAirbags();
c.deployAirbags();

