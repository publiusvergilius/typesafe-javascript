const errorMessages = {
	argLen: "Wrong number of arguments.",
	typeArg: "Wrong type argument."
}

class TypeBuilder {
	constructor (value, type) {
		this.value == value
		this.type == type
	}
}

function Type(value, type){
	return new TypeBuilder(value, type)
}

class ObjectTypeBuilder {
	constructor(field, value) {
		if (arguments.length !== 2) {
			throw new Error(errorMessages.argLen)
		}		

		if (field.constructor !== String) {
			throw new Error(errorMessages.typeArg)
		}
		
		if ( value.constructor !== Type ) {
			throw new Error(errorMessages.typeArg)
		}
	}
}

new ObjectTypeBuilder("name", Type("Vini", Number))

class User {
	constructor() {
		if (arguments.length !== 1) {
			throw new Error(errorMessages.argLen)
		}
	}
}

const initialValues = {
	name: "Vini",
	age: 25
}

new User(initialValues)
