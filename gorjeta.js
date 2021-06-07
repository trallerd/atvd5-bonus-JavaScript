const gorjeta = function () {
  if (this.valor < 50) {
    return (this.gorjeta = this.valor * (20 / 100));
  } else if (this.valor > 50 && this.valor < 200) {
    return (this.gorjeta = this.valor * (15 / 100));
  } else if (this.valor > 200) {
    return (this.gorjeta = this.valor * (10 / 100));
  }
};
const exibirTotal = function () {
  return (this.toString = `Restaurante ${this.nome} [Valor: R$${
    this.valor
  } | Gorjeta: R$ ${this.gorjeta}| Total: R$ ${this.gorjeta + this.valor} ]`);
};

let rest = prompt("Quantos restaurantes são?");
let restaurantes = new Array(rest);

for (let r = 0; r <= rest - 1; r++) {
  restaurantes[r] = {
    nome: prompt("nome do restaurante"),
    valor: parseInt(prompt("valor da conta")),
    gorjeta: gorjeta,
    toString: exibirTotal,
  };
  restaurantes[r].gorjeta();
  restaurantes[r].toString();
}

restaurantes.imprimir = function () {
  maior = 0
  gastos = new Array(restaurantes.length);
  console.log(`Restaurantes visitados no feriado ${restaurantes.length}
     Lista de restaurantes:`);
  for (let i=0; i<restaurantes.length;i++) {
    console.log(`${restaurantes[i].toString}`);
    gastos[i] = (restaurantes[i].gorjeta + restaurantes[i].valor);
    if(gastos[i]>maior){
      maior = gastos[i];
      resta = restaurantes[i]
    }
  }
  tudo = 0;
  for(const gast of gastos){
    tudo += gast;
  }
  console.log(`Total de gastos: R$ ${tudo}
  Média de gastos: R$ ${ tudo/ restaurantes.length}
  Restaurante com maior gasto total: 
  ${resta.toString}`);
};
restaurantes.imprimir();
