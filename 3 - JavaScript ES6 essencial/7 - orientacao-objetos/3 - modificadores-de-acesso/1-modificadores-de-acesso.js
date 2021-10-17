'user script';

/*
//como function
function Person(initialName) {
	let name = initialName;

	this.getName = function() {
		return name
	}

	this.setName = function(newName) {
		name = newName;
	}
}
*/

//versão 12
class Person {
	#name = '';

	constructor(initialName) {
		this.#name = initialName;
	}

	getName = function() {
		return this.#name
	}

	setName = function(newName) {
		this.#name = newName;
	}
}


const p = new Person('Jose');

//Person {getName: f, setName: f}
console.log(p)

//Jose
console.log(p.getName());

//undefined
console.log(p.name);


p.setName('Joao');

//Joao
console.log(p.getName());
