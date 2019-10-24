class User {
	constructor(email, name){
		this.email = email;
		this.name = name;
		this.score = 0;
	}
	login(){
		console.log(this.email, 'Just logged in');
		return this;
	}
	logout(){
		console.log(this.email, 'Just logged out');
		return this;
	}
	updateScore(){
		this.score++;
		console.log(this.email + 'score is now' + this.score);
		return this;
		
	}
}

class Admin extends User {
	deleteUser(user){
		users = users.filter( u => {
			return u.email != user.email;
		})
	}
}

const userOne = new User('Eve@gmail.com', 'Eve');
const userTwo = new User('Holly@gmail.com', 'Holly');
const admin = new Admin('Ryan@gmail.com', 'Ryan');


let users = [userOne, userTwo, admin]

admin.deleteUser(userOne);

console.log(users);

//userOne.login();
//userTwo.logout();




