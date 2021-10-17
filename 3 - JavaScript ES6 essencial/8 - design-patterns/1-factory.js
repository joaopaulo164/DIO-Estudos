//Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são considerasd funções *Factory*.

function Pessoa(customProperties) {
	return {
		name: 'Joao',
		lastName: 'Mendes',
		...customProperties
	}
}

// Factory
const pessoa = Pessoa({name: 'Custom Name', age: 36});
console.log(pessoa);