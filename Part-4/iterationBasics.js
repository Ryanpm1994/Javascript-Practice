//Declaring book, which is an array
const book = [
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
 "Up above the world you fly,",
 "Like a tea tray in the sky.",
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
];

//Declaring it equal to the values held within the book array
const it = book.values();

//logs it but uses a function that cycles through the lines of the array one line at a time
//each time the next() function is used it moves one line
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());