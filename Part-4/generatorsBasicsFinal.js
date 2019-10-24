function* abc() {
	yield 'a';
	yield 'b';
	yield 'c';
	return;
}

const it = abc();
it.next();
it.next();
it.next();

for(let l of abc()) {
	console.log(l);
}