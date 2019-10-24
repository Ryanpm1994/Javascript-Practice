//function calls "b"
function a() {
	console.log('a: Calling b');
	b();
	console.log('a: Done');
}

//function calls "c"
function b() {
	console.log('b: Calling c');
	c();
	console.log('b: Done');
}

//function throws and error
function c() {
	console.log('C: Throwing Error');
	throw new Error ('c Error');
	console.log('c: Done');
}

//function calls "c"
function d() {
	console.log('d: Calling c');
	c();
	console.log('d: Done');
}

//try and catch statment that calls "a", catches the error and logs the error stack
try {
	a();
} catch(err){
	console.log(err.stack);
}

//try and catch statment that calls "d", catches the error and logs the error stack
try {
	d();
} catch(err) {
	console.log(err.stack);
}