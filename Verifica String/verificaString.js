function contemLetraA(string) {
  let count = 0;

  const lowerString = string.toLowerCase();

  for (let i = 0; i < lowerString.length; i++){
    if (lowerString[i] === "a") {
      count++;
    }
  }

  if (count > 0) {
    console.log(`A letra "a" ocorre ${count} vezes na string.`);
  } else {
    console.log(`A letra "a" não ocorre na string.`);
  }
}

const string = "Este é um teste para o estágio de Ribeirão Preto";

contemLetraA(string);