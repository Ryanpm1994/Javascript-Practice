// class is log which contains a constructor function
class Log {
	// constructor function contains a delaration that this.messages is teh begaining of an array
	constructor() {
		this.messages = [];
	}
	//the add function will take a value and use the push function to put in within the array will a linked timestamp of the current date
	add(messege) {
		this.messages.push({message, timestamp: Date.now()});
	}
	// creates a function that creates a iterable that will return the values contained with in the messages array
	[Symbol.iterator]() {
		return this.messages.values();
	}
}
//delares "log" as a new Log 
const log = new Log();

//values that will be added to the database
log.add("First day at sea");
log.add("Spotted Whale");
log.add("Spotted another ship");

//for of loop that console.logs every "entry" that is in the messeges array  
for(let entry of log) {
	console.log(`${entry.message} @ ${entry.timestamp}`);
}