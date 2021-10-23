package aula3_1;

import java.util.Scanner;
import java.math.*;

public class ClasseAula3_1 {

	public static void main(String[] args) {
		
		double nota1, nota2, nota3, nota4, frequencia, totalNotas;
		char statusAluno;
		boolean aprovado;
		
		Scanner entradaNotas = new Scanner(System.in);
		Scanner entradaCaractere = new Scanner(System.in);

		System.out.print("Digite o nome do aluno: ");
		String nomeAluno = entradaCaractere.nextLine();
		System.out.print(nomeAluno);
		
		System.out.print("Digite um caractere para a situação do aluno (O --> Ok; P --> Pendência): ");
		statusAluno = entradaCaractere.nextLine().charAt(0);
		System.out.printf("Status: %c\n", statusAluno);
		
		System.out.print("Digite a primeira nota : ");
		nota1 = entradaNotas.nextDouble();
		System.out.printf("Nota: %.0f\n", nota1);
		
		System.out.print("Digite a segunda nota : ");
		nota2 = entradaNotas.nextDouble();
		System.out.printf("Nota: %.0f\n", nota2);
		
		System.out.print("Digite a terceira nota : ");
		nota3 = entradaNotas.nextDouble();
		System.out.printf("Nota: %.0f\n", nota3);
		
		System.out.print("Digite a quarta nota : ");
		nota4 = entradaNotas.nextDouble();
		System.out.printf("Nota: %.0f\n", nota4);
		
		System.out.print("Digite a frequência do aluno(a): ");
		frequencia = entradaNotas.nextDouble();
		System.out.printf("Frequencia: %.2f\n", frequencia);
		
		totalNotas = nota1 + nota2 + nota3 + nota4;
		
		aprovado = totalNotas >= 70 && frequencia >= 0.75;
		
		System.out.printf("O(a) aluno(a) %s obteve nota final %.2f e frequência %.2f%%.\n"
				+ "A situação do(a) aluno(a) é %c.\n"
				+ "Aluno(a) aprovado(a)? %b", 
				nomeAluno, totalNotas, frequencia*100,  statusAluno, aprovado);
	}

}
