//creates a function that takes a email and checks to see if it contains a "@" or not
//if it does it returns the value and moves on
//if it doesnt it throws out an erro syaing "Invalid Email"
function validateEmail(email) {
	return email.match(/@/) ? email: 
	new Error(`Invalid Email: ${email}`);
}

const email = "jane@doe.com";

//delares that the above valid email is now validated
const validatedEmail = validateEmail(email);

//creates a if statment that checks if validatedEmail is a instance of error
//if it is it throws out and error and give the validatedEmail value
//if it isnt a instance of error then it is considered valid and is logged to console
if(validatedEmail instanceof Error) {
	console.error(`Error: ${validatedEmail.message}`);
} 
else {
	console.log(`Valid Email: ${validatedEmail}`);
}