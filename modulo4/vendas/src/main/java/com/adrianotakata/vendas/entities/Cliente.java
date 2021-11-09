package com.adrianotakata.vendas.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "tb_cliente") // create table tb_cliente
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Increment
	private long id;
	private String name;
	private String dn;
	
	@OneToMany // One client can do several buyers
	private List<Compras>compras = new ArrayList<>();
	
	// Constructor
	public Cliente(long id, String name, String dn) {
		this.id = id;
		this.name = name;
		this.dn = dn;
	}
	
	public Cliente() {
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
