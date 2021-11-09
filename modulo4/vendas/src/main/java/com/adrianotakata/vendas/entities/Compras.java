package com.adrianotakata.vendas.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_compras")
public class Compras {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Double total_compra;
	private LocalDate data_compra;
	
	@ManyToOne
	@JoinColumn(name = "cliente_id") // adicionada uma coluna estrangeira
	private Cliente cliente; // relacionadas a um cliente
	
	public Compras(int id, Double total_compra, LocalDate data_compra) {
		this.id = id;
		this.total_compra = total_compra;
		this.data_compra = data_compra;
	}

	public Compras() {

	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Double getTotal_compra() {
		return total_compra;
	}

	public void setTotal_compra(Double totalCompra) {
		this.total_compra = total_compra;
	}

	public LocalDate getData_compra() {
		return data_compra;
	}

	public void setData_compra(LocalDate dataCompra) {
		this.data_compra = data_compra;
	}
	
}
