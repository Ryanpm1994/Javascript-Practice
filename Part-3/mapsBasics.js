const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Oliver' };
const u4 = { name: 'James' };

const userRoles = new Map();

//Default Method of Setting
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

//Chainable Version of Method
//userRoles
	//.set(u1, 'User')
	//.set(u2, 'User')
	//.set(u3, 'Admin');

//Array of Arrays method including declaration
//const userRoles = new Map([
	//[u1, 'User'],
	//[u2, 'User'],
	//[u3, 'Admin'],
//]);

//logs the role and the name of the user
//console.log(userRoles.get(u1) + ": " + u1.name);
//console.log(userRoles.get(u2) + ": " + u2.name);
//console.log(userRoles.get(u3) + ": " + u3.name);

//Checks the map / object to see if it contains u1 & u4
//console.log(userRoles.has(u1));
//console.log(userRoles.get(u1));
//console.log(userRoles.has(u4));
//console.log(userRoles.get(u4));

//checks the user role of u1 and replaces it with "Admin" 
//console.log(userRoles.get(u1));
//userRoles.set(u1, 'Admin');
//console.log("User u1 changed to Admin")
//console.log(userRoles.get(u1));

//Checks the objecvt userRoles for the amount of values within it
console.log(userRoles.size);

