//Creates a symbol with the name SYM
const SYM = Symbol();

//o is a object with a series of object within
const o = { a: 1, b: 2, c: 3, [SYM]: 4};

//for in loop that assigns prop to the vaules within o, a object with objects inside
//the if statement checks to see that o does not have its own property then continues
//it then logs prop identifier with a semi colon between the actual value of the objects
for(let prop in o) {
	if(!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}: ${o[prop]}`);
}