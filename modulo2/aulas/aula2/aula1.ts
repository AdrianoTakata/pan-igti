

function cadastrarAluno(aluno: Aluno) {
    console.log(aluno.nome);
}

cadastrarAluno({matricula: 1, nome:"Adriano", dataDeNascimento:"12/07/1991"})

interface Aluno {
    matricula: number;
    nome: string;
    dataDeNascimento: string;
};



// Class in typescript 
class Esttudante {
    matricula: number;
    nome: string;

    salvar(){

    }
};
