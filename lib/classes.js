class Test {
	constructor () {
		this.test = "Testando"
	}

	#getTest() {
		console.log("This is private!")
	}

	getSecond() {
		this.#getTest()
		return "This is public"
	}
}

const t1 = new Test()
console.log(t1.getSecond())

