const naughty = new WeakSet();

const children = [
	{name: "Suzy"},
	{name: "Derek"},
];

//adds the naughty value to the derek as he is [1] in the array of objects
naughty.add(children[1]);

//creats a for loop with a imbedded if statement. The for loop cycles through all 
//the values within the children array and uses the if stsmnet to check if there 
//is a naughty value under connected tyo the children  
for(let child of children) {
	if(naughty.has(child))
		console.log(`coal for ${child.name}!`);
	else
		console.log(`presents for ${child.name}!`);
}