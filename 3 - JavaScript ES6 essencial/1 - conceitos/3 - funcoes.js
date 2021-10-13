function getName(){
    return "Bruna Cristina";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);


a = getName() + "2";
console.log(a);

console.log(getName() + "3");