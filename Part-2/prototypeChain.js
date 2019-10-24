function User(email, name){
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function(){
	this.online = true;
	console.log(this.email + ' has logged in');
}

User.prototype.logout = function(){
	this.online = false;
	console.log(this.email + ' has logged out');
}

function Admin(...args){
	User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
	users = users.filter(user => {
		return user.email != u.email;
	});
};

const userOne = new User('Eve@gmail.com', 'Eve');
const userTwo = new User('Holly@gmail.com', 'Holly');
const admin = new Admin('Ryan@gamil.com', 'Ryan');

let users = [userOne, userTwo, admin];

console.log(users);
admin.deleteUser(users[1]);
console.log(users);