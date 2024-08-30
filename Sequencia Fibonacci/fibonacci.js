function isFibonacci(numero) {
  const fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < numero) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }
  return fibonacci.includes(numero);
}

const numero = 3;

if (isFibonacci(numero)) {
  console.log(`O número ${numero}, pertence à sequencia de Fibonacci`);
} else {
  console.log(`O número ${numero}, não pertence à sequencia de Fibonacci`);
}