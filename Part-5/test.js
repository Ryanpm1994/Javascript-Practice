function addThreeSquaredAddFiveTakeSquareRoot(x) {
	return Math.sqrt(Math.pow(x+3, 4)+ 5);
}

const f = addThreeSquaredAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) / f(7);

console.log(answer); 