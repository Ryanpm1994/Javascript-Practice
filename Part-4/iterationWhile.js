//Declaring book, which is an array
const book = [
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
 "Up above the world you fly,",
 "Like a tea tray in the sky.",
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
];

//Declaring it equal to the values held within the book array and sets current to it with the next() function attached
const it = book.values();
let current = it.next();

//creates a while loop that states that if the current value is not equal to done in the 
//next() function then it will display the current value of that line
//and sets current to the next line in the array using the next() function
while(!current.done) {
	console.log(current.value);
	current = it.next();
}