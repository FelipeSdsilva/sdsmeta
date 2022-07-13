package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.dto.SaleDTO;
import com.devsuperior.dsmeta.entites.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository salerepository;
	
	public Page<SaleDTO> findAllPaged(Pageable pageable) {
		Page<Sale> page = salerepository.findAll(pageable);
		return page.map(x -> new SaleDTO(x));
	}

}
