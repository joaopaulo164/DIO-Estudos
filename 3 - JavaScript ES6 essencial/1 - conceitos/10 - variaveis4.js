const name = "Joao";

// Não podemos alterar o valor
// name = "Bruna";

const user = {
  name: "Joao"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro nome";

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//  name: "Joao"
//};

const persons = ["Joao", "Maicon", "Tatiana"];

// Podemos adicionar novos itens
persons.push("Eduardo");
// persons = ["Joao", "Maicon", "Tatiana", "Eduardo"]

// Podemos remover algum item
persons.shift();
// persons = ["Maicon", "Tatiana", "Eduardo"]

// Podemos alterar diretamente
persons[1] = "Cleberson";
// persons = ["Maicon", "Cleberson", "Eduardo"]

console.log("\nArray após as alterações: ", persons);