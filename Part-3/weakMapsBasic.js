//creates a function that contains a weak that stores a secret that can only be accessed by this function
const SecretHolder = (function() {
	const secrets = new WeakMap();
	return class {
		//Creates a function that can set the secret
		setSecret(secret) {
			secrets.set(this, secret);
		}
		//creates a function that can get the stored secret
		getSecret() {
			return secrets.get(this);
		}
	}
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret("Secret A");
b.setSecret("Secret B");

console.log(a.getSecret());
console.log(b.getSecret());