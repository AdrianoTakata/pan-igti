package com.adrianotakata.springboot;

public class Pessoas {

	private String name;
	private String address;
	private String dn;
	
	
	public Pessoas(String name, String address, String dn) {
		super();
		this.name = name;
		this.address = address;
		this.dn = dn;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDn() {
		return dn;
	}
	public void setDn(String dn) {
		this.dn = dn;
	}
	
	
}
