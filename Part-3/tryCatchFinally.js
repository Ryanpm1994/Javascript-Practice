//create a try, catch and finally statement that logs errors and other infomation
//this logs the first statemnet always and throws and throws an error
//the second log is never executed
try {
	console.log("this line is executed...");
	throw new Error("whoops");
	console.log("this line is not executed...");
}
//this catches the err and logs a messege
catch(err) {
	console.log("there was an error...");
}
//this allows for some final cleanup code after it has detected an error
//the first line and onwards is always executed 
finally {
	console.log("...always exectuted");
	console.log("preform cleanup here!");
}