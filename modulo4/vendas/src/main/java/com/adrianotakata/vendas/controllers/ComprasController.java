package com.adrianotakata.vendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adrianotakata.vendas.DTO.ClienteDTO;
import com.adrianotakata.vendas.DTO.ComprasDTO;
import com.adrianotakata.vendas.services.ClienteService;
import com.adrianotakata.vendas.services.CompraService;

@RestController
@RequestMapping("/compras")
public class ComprasController {

	@Autowired
	private CompraService comprasService;
	
	@GetMapping
	public ResponseEntity<List<ComprasDTO>>findAll() {
		List<ComprasDTO>lista = comprasService.findAll();
		return ResponseEntity.ok(lista);
	}
}
