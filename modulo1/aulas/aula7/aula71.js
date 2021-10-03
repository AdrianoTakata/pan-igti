let primos  = [2, 3, 5, 7, 11, 13];

let curso = {
    nome: "Bootcamp Front End",
    modulo: 4,
    presencial: false,
    turma: 1,
}

let primos2 = [...primos, 17];

let primos3 = [1, ...primos, 17];

console.log(primos)
console.log(primos2)
console.log(primos3)

let curso2 = {
    ...curso,
    descricao: "bla bla bla",
    ativo: true,
}

console.log(curso)
console.log(curso2)


// Templete Literal

a = 3;
b = 4;
soma = a + b;

console.log(`${a} + ${b} = ${soma}`)