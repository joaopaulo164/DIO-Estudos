const myNumber = 12.4032;

//transformar número para string
const numberAsString = myNumber.toString();
console.log('Número trasnformado em string: ', numberAsString, typeof numberAsString);

//retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casa decimais: ', fixedTwoDecimals);

//transforma uma string em float
console.log('\nString convertida para float: ', parseFloat('13.22'));

//Só exite tipo number tanto para float quanto para int
console.log('\nString convertida para float. Tipo = ', typeof parseFloat('13.22'));

//transforma uma string em int
console.log('\nString convertida para int: ', parseInt('13.20'));

//Só exite tipo number tanto para int quanto para float
console.log('\nString convertida para int. Tipo = ', typeof parseInt('13.20'))