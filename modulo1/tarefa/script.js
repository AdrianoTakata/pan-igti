
let valorProduto = document.getElementById('valor').value;
let prazoAno = document.getElementById('prazo').value;
let jurosAnual = document.getElementById('juros').value;

let jurosMensal;
let prazoMeses;

valorProduto = +valorProduto;
prazoAno = +prazoAno;
jurosAnual = +jurosAnual;

console.log(valorProduto)
console.log(prazoAno)
console.log(jurosAnual)

// juros mensal
jurosMensal = (1.0 + jurosAnual)**(1.0/12.0) - 1.0;
console.log(jurosMensal);

// prazo total em meses
prazoMeses = 12 * prazoAno;
console.log(prazoMeses)

function jurosAcumladoCalculo (valorProduto, jurosMensal, prazoMeses) {

    console.log('teste');
    let jurosAcumlado = 0;
    let jurosTabela = [];
    let amortizacao = valorProduto / prazoMeses;
    let contador = 0;
    for (let mes=0; mes<= prazoMeses; mes++ ){
        contador = (valorProduto - mes*amortizacao) * jurosMensal;
        jurosAcumlado += contador;
        console.log(contador.toFixed(2));
        console.log(jurosAcumlado.toFixed(2));
    }

}