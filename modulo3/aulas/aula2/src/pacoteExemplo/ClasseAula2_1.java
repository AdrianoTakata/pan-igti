package pacoteExemplo;

public class ClasseAula2_1 {

	public static void main(String[] args) {
		
		System.out.println("Hello World!");
		
		// Char deve ser declarado com aspas simples e apenas um caracter.
		//char estadoCivil = 'C';
		
		// String deve ser declarado com aspas duplas.
		//String nomeCompleto = "Adriano Sueke Takata";
		
		//System.out.println(nomeCompleto);
		
		//nomeCompleto = "Rosa Tomiko Yamada";
		
		//System.out.println(nomeCompleto);
		
		String nome, nome2;
		nome = "Adriano Sueke Takata";
		nome2 = "Rosa Yamada";
		
		System.out.println(nome);
		System.out.println(nome2);
		
		int tamanhoNome, tamanhoNome2;
		tamanhoNome = nome.length();
		tamanhoNome2 = nome2.length();
		
		System.out.println("A variável nome tem " + tamanhoNome + " caracteres");
		System.out.println("A variável nome2 tem " + tamanhoNome2 + " caracteres");

	}

}
