const roles = new Set();

//Adds new roles to the set
roles.add("User");
roles.add("Admin");

//Logs the size of the set
console.log(roles.size);

//deletes the "Admin" role from the set and then logs the active roles in the set
roles.delete("Admin");
console.log(roles);



