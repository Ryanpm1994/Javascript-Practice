//Creates a symbol with the name SYM
const SYM = Symbol();

//o is a object with a series of object within
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

//this statemnet uses object.keys to display find the object o and creates a function 
//that console logs all the values that are in the object within o
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));