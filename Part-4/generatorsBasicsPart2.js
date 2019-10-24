function* interrogate() {
	const name = yield "What is your Name?";
	const color = yield "What is favorite color?";
	return `${name}'s favorite color is ${color}`;
}

const it = interrogate();
it.next();
it.next('Ethan');
console.log(it.next('orange'));
