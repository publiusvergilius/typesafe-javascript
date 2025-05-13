// Strictlyu check a list of variable types against a list of arguemnts
class Address {}

const ad1 = new Address();

const UserType = {
	[String]: "Vini",
	[Number]: 25,
	[Address]: ad1,
}

function strict (types, args) {
	if ( types.length !== args.length ) {
		throw new Error(`Invalid number of arguments. Expected ${types.length}, received ${args.length} instead.`);
	}

	for ( let i = 0; i < args.length; i++ ) {
		if ( args[i].constructor !== types[i]) {
			throw new Error(`Invalid argument type. Expected ${types[i]}.name, received ${args[i].constructor.name} instead.`)
		}	
	}
} 

strict([String, Number, Address], Object.values(UserType))
