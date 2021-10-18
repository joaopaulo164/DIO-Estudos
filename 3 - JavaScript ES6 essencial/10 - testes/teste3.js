const name = 'Foo';
const lastName = String('Bar');

console.log('name.constructor === lastName.constructor');
console.log(name.constructor === lastName.constructor);

console.log('name.prototype === String.prototype');
console.log(name.prototype === String.prototype);

console.log('lastName.proto === String.prototype');
console.log(lastName.proto === String.prototype);

console.log('name.proto.split === lastName.proto.split');
console.log(name.proto.split === lastName.proto.split);






