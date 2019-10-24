//creates a function that takes a email and checks to see if it contains a "@" or not
//if it does it returns the value and moves on
//if it doesnt it throws out an erro syaing "Invalid Email"
function validateEmail(email) {
	return email.match(/@/) ? email: 
	new Error(`Invalid Email: ${email}`);
}

const email = undefined; // whoops

//creats a try and catch statment that sets the value of validateEmail to the email above and stores it in validatedEmail
//the if statment checks to see if the value is a inhstance of an error
//the catchj part throws out and error if the value is null or undefined and create a human reperenmstaion of an error messege
try {
 const validatedEmail = validateEmail(email);
 if(validatedEmail instanceof Error) {
 console.error(`Error: ${validatedEmail.message}`);
 } else {
 console.log(`Valid email: ${validatedEmail}`);
 }
} catch(err) {
 console.error(`Error: ${err.message}`);
}
