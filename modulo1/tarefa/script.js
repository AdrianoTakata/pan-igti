
function simular () {
    let valor = document.getElementById("valor").valueAsNumber;
    let prazo = document.getElementById("prazo").valueAsNumber;
    let jurosaa = document.getElementById("jurosaa").valueAsNumber;
    
    let prestacoes = prazo * 12;
    let jurosam = (1+jurosaa)**(1/12) - 1;
    let amortizacao = valor / prestacoes;

    document.getElementById("prestacoes").valueAsNumber = prestacoes;
    document.getElementById("jurosam").valueAsNumber = jurosam;

    let tbody = document.querySelector("tbody");
    let jurosTotal = 0;
    for (let i = 0; i < prestacoes; i++) {
        let saldoDevedor = valor - i*amortizacao;
        let jurosPrestacao = saldoDevedor * jurosam;
        let totalPrestacao = jurosPrestacao + amortizacao;
        jurosTotal = jurosTotal + jurosPrestacao;

        if (i < 5){
            let tr = tbody.children[i];
            tr.children[1].textContent = amortizacao.toFixed(2)
            tr.children[2].textContent = jurosPrestacao.toFixed(2)
            tr.children[3].textContent = jurosPrestacao.toFixed(2)
        }
    }

    document.getElementById("jurosTotal").valueAsNumber = jurosTotal.toFixed(2);

}

simular();
