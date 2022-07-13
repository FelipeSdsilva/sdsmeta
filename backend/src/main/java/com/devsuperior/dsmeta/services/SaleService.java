package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

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

	public Page<SaleDTO> findAllPaged(String minDate, String maxDate, Pageable pageable) {

		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		//LocalDate yearOld = LocalDate.parse("2019-01-01");

		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(maxDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		Page<Sale> page = salerepository.findSales(min, max, pageable);
		return page.map(x -> new SaleDTO(x));
	}

}
