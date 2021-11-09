package com.adrianotakata.vendas.DTO;

import com.adrianotakata.vendas.entities.Cliente;

public class ClienteDTO {

	private long id;
	private String name;
	private String dn;
	
	
	// Constructor
	
	public ClienteDTO(Cliente entidade) {
		super();
		this.id = entidade.getId();
		this.name = entidade.getName();
		this.dn = entidade.getDn();
	}
	
	public ClienteDTO(long id, String name, String dn) {
		super();
		this.id = id;
		this.name = name;
		this.dn = dn;
	}
	
	// Getter and Setter
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDn() {
		return dn;
	}

	public void setDn(String dn) {
		this.dn = dn;
	}
}
