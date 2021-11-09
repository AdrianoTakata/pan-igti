package com.adrianotakata.vendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adrianotakata.vendas.DTO.ClienteDTO;
import com.adrianotakata.vendas.DTO.ComprasDTO;
import com.adrianotakata.vendas.entities.Cliente;
import com.adrianotakata.vendas.entities.Compras;
import com.adrianotakata.vendas.repository.ClienteRepository;
import com.adrianotakata.vendas.repository.ComprasRepository;

@Service
public class CompraService {

	@Autowired
	private ComprasRepository comprasRepository;
	
	public List<ComprasDTO> findAll() {
		List<Compras>res = comprasRepository.findAll();
		return res.stream().map(c->new ComprasDTO(c)).collect(Collectors.toList());
	}
}
