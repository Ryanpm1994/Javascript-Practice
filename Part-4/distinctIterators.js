//Declaring book, which is an array
const book = [
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
 "Up above the world you fly,",
 "Like a tea tray in the sky.",
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
];

//Declaring it1 and it2 equal to the values held within the book array but in diffrent iterations of the book array
const it1 = book.values();
const it2 = book.values();

//logs two lines of the array for it1 iteration
console.log(it1.next());
console.log(it1.next());

//logs a line of the array for it2 iteration which is unaffected by anything that is related to it1
console.log(it2.next());

//logs another line of it1 but as above it is not affected by anything related to it2
console.log(it1.next());