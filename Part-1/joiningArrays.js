//An Array Cointaining a mix of values and deletes world from the array
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];

//logs everything in the array 
console.log(arr.join());

//logs everything in the array but in a single string
//console.log(arr.join(''));

////logs everything in the array but in a single string with dashes in between
//console.log(arr.join(' -- '));

