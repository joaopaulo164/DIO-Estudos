'use strict';

class Animal {
	constructor(quatidadePatas) {
		this.quatidadePatas = quatidadePatas
	}
	movimentar () {}
}

class Cachorro extends Animal {
	constructor(morde) {
		super(4);
		this.morde = morde;
	}
	latir () {
		console.log('Au au');
	}
}

const pug = new Cachorro(false);
console.log(pug);
//Cachorro {quatidadePatas: 4, morde: false}

