//Creates a class called Car with a constructor for make and model of car
class Car {
	constructor(make, model) {

//this is used to assign make and model to a spesific instance of make and 
//model of car inside the class		
		this.make = make;
		this.model = model;
		this.userGears = ['p', 'N', 'R', 'D'];
		this.userGear = this.userGears[0];
		
	}

//shift function allows the chnaging of the gear in the car from the default
	shift(gear) {
	
//the if statement looks for usergears that have an index lower than one
//which means that they are not included within the array of options
//it will then throw up and error with the stated gear
	if(this.userGears.indexOf(gear) < 0)
		throw new Error(`Invalid Gear: ${gear}`);
	this.userGear = gear;	
	}
}

//these declartions create new cars that have both the make and model for that specific car
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

//this tells the car what gear it should shift to which is then checked for what is in the array within userGears
car1.shift('1st');
car2.shift('R');

//this logs the gear that each car is in a the current instance
console.log(car1.userGear);
console.log(car2.userGear);