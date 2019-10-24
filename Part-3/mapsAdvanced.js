const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Oliver' };
const u4 = { name: 'James' };

const userRoles = new Map();

// Default Method of Setting
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

// Gets the keys of the object e.g. "Cynthia"
//for(let u of userRoles.keys())
	//console.log(u.name);

// Gets the values of the object e.g. "User"
//for(let r of userRoles.values())
	//console.log(r)

// Gets both the keys and the values from the userRoles object e.g. "Cynthia", "User"
//for(let ur of userRoles.entries())
	//console.log(`${ur[0].name}: ${ur[1]}`);

// Gets both the keys and the values from the userRoles object e.g. "Cynthia", "User"
//for(let [u, r] of userRoles.entries())
	//console.log(`${u.name}: ${r}`);

// short way fo doing whats above
//for(let [u, r] of userRoles)
	//console.log(`${u.name}: ${r}`);

// Creates a array of all teh values in the userRoles object
//console.log([...userRoles.values()]);

// Deletes u2 from the userRoles object
//console.log(userRoles.size);
//userRoles.delete(u2);
//console.log(userRoles.size);

//Clears the entire of the userRoles object including keys and values
//console.log(userRoles.size);
//userRoles.clear();
//console.log(userRoles.size);
