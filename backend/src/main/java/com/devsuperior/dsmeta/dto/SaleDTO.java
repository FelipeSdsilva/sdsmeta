package com.devsuperior.dsmeta.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.devsuperior.dsmeta.entites.Sale;

public class SaleDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String sellerName;
	private Integer visited;
	private Integer deals;
	private Double amount;

	private LocalDate date;

	public SaleDTO() {
	}

	public SaleDTO(Long id, String sellerName, Integer visited, Integer deals, Double amount, LocalDate date) {
		super();
		this.id = id;
		this.sellerName = sellerName;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
	}
	
	

	public SaleDTO(Sale entity) {
		id = entity.getId();
		sellerName = entity.getSellerName();
		visited = entity.getVisited();
		deals = entity.getDeals();
		amount = entity.getAmount();
		date = entity.getDate();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
}
