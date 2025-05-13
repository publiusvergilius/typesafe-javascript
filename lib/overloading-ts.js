// A simple function for sending a message
function sendMessage (name, obj) {
	// If both a name and an object are provided	
	if (arguments.length === 2) {
		if ( typeof name === undefined ) throw new Error ("Name cannot be undefined");
		if ( obj.handleMessage === undefined ) throw new Error("handleMessage cannot be undefined");
		obj.handleMessage( name );
	} else {
		console.log (name);
	}

}

sendMessage("Vini", { handleMessage: ( name ) => { console.log(`Olá, ${name}!`)} })

// A function that takes any number of arguments and makes an array out of them
function makeArray () {
	const arr = [];

	for ( let i = 0; i < arguments.length; i++ ) {
		arr.push( arguments[i] );
	}

	return arr;
}

console.log('make array: ', makeArray(1, "ai", false))

// Check to see if number is a string
const num = "24";

if (num.constructor !== Number) {
	console.log("That is not a number")
}

class User {
	constructor (name, age) {
		if( Object.values(arguments).some(arg => arg === undefined) ) 
			throw new Error("User fields cannot be undefined");
		this.name = name;
		this.age = age;
	}
}

const u1 = new User("Vini", 25);
console.log(u1.constructor);

