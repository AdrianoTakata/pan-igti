package aula2_13;

import java.math.*;

public class ClasseAula2_13 {

	public static void main(String[] args) {
		
		double nota1, nota2, nota3, nota4, frequencia, totalNotas;
		String nomeAluno;
		char statusAluno;
		boolean aprovado;
		
		nomeAluno = "Ana Paulo da Silva Couto";
		statusAluno = 'M';
		
		nota1 = 20;
		nota2 = 20;
		nota3 = 30;
		nota4 = 5;
		
		frequencia = 0.80;
		
		totalNotas = nota1 + nota2 + nota3 + nota4;
		
		aprovado = totalNotas >= 70 && frequencia >= 0.75;
		
		System.out.printf("O(a) aluno(a) %s obteve nota final %.2f e frequência %.2f%%.\n"
				+ "A situação do(a) aluno(a) é %c.\n"
				+ "Aluno(a) aprovado(a)? %b", 
				nomeAluno, totalNotas, frequencia*100,  statusAluno, aprovado);
		
	}

}
