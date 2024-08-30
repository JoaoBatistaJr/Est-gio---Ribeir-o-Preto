const INDICE = 12;
let SOMA = 0;
let numeros = [];

for (let i = 1; i <= INDICE; i++) {
  numeros.push(i);
}

for (let k = 0; k < numeros.length; k++) {
  SOMA += numeros[k];
}

let formula = numeros.join(" + ") + " = " + SOMA;
console.log(formula);
console.log("O resultado da soma é: " + SOMA);
