package com.adrianotakata.springboot;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lista-pessoa/") //path da requisição

public class Test {

	/*
	@GetMapping("")
	public String textHelloWorld() {
		return "Hello World!";
	}
	*?
	*
	/* 
	@GetMapping("/soma/")
	public int soma(@RequestParam int n1, @RequestParam int n2) {
		return n1 + n2;
	}
	*/
	/*
	@GetMapping("/upper-case/{msg}")
	public String upperCase(@PathVariable String msg) {
		return msg.toUpperCase();
	}
	*/
	
	
	@GetMapping("")
	public ResponseEntity<Pessoas> listaPessoas(){
		Pessoas pessoa = new Pessoas("André", "São Paulo", "27/09/1991");
		return new ResponseEntity<>(pessoa, HttpStatus.OK);
	}
	
}
