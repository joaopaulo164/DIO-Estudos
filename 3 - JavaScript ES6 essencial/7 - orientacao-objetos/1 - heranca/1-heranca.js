'use strict';

function Pessoa(name) {
	this.name = name;
}

const p = new Pessoa('Joao');

//tipo Pessoa
console.log(p);


//exemplo simples de herança, onde um construtor chama o outro
function Animal(quatidadePatas) {
	this.quatidadePatas = quatidadePatas;
}

function Cachorro(morde) {
	Animal.call(this, 4);

	this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug);
//Cachorro {quatidadePatas: 4, morde: false}




