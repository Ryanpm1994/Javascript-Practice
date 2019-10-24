// class is log which contains a constructor function
class Log {
	// constructor function contains a delaration that this.messages is teh begaining of an array
	constructor() {
		this.messages = [];
	}
	//the add function will take a value and use the push function to put in within the array will a linked timestamp of the current date
	add(message) {
		this.messages.push({ message, timestamp: Date.now() });
	}
	// creates a function that creates a iterable and declares it as "i", declares messages as this.messages
	// using the next function with the return to move to the next value within the messages array
	//if satmnet is used to check if "i" is greater than or equal to the length of the messages array, if so it will return the first statment
	//failing that it will return the second statement with messages value, i++ and "done: false"
	[Symbol.iterator]() {
		let i = 0;
		const messages = this.messages;
		return {
			next() {
				if(i >= messages.length)
					return { value: undefined, done: true };
				return { value: messages[i++], done: false };
			}
		}
	}
}

//delares "log" as a new Log 
const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

//for of loop that console.logs every "entry" that is in the messeges array 
for(let entry of log) {
console.log(`${entry.message} @ ${entry.timestamp}`);
}



