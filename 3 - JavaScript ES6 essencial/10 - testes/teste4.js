function Conta() {}
  Conta.prototype.rendimento = 0;
  Conta.prototype.depositar = function() {}
  Conta.prototype.retirar = function() {}
  Conta.prototype.exibirSaldo = function() {
    return `O saldo da conta é: ${this.saldo}.`;
}

function ContaPoupanca() {
  this.exibirSaldo = function() {
    return 'Operação não disponível';
  }
}

ContaPoupanca.prototype.rendimento = 0.03;
ContaPoupanca.prototype = Object.create(Conta.prototype);

const contaPoupanca = new ContaPoupanca();

console.log(contaPoupanca instanceof ContaPoupanca);

console.log(contaPoupanca);

console.log(contaPoupanca.proto.exibirSaldo());