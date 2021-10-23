package aula3_11;

import java.util.*;

public class ClasseAula3_11 {

	public static void main(String[] args) {
		
		// Array
		// tipo[] nome = new tipo[tamanho]
		int[] numeros = new int[5];
		int total=0;
		Scanner  ent = new Scanner(System.in);
		
		for (int i= 0; i<numeros.length; i++) {
			System.out.printf("Digite o %dº inteiro: ", i+1);
			numeros[i] = ent.nextInt();
			total += numeros[i];
		}
		
		
		/*
		numeros[0] = 10;
		numeros[1] = 15;
		numeros[2] = 13;
		numeros[3] = 1;
		numeros[4] = 7;
		*/
		
		System.out.printf("O valor total é %d.", total);
		
	}

}
