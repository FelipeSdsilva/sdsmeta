package com.devsuperior.dsmeta.dto;

import java.io.Serializable;
import java.util.Date;

public class SaleDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String sellerName;
	private Integer visited;
	private Integer deals;
	private Double amount;

	private Date date;

	public SaleDTO() {
	}

	public SaleDTO(Long id, String sellerName, Integer visited, Integer deals, Double amount, Date date) {
		super();
		this.id = id;
		this.sellerName = sellerName;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
