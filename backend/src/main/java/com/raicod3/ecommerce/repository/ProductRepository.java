package com.raicod3.ecommerce.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.raicod3.ecommerce.dto.product.ProductResponseDTO;
import com.raicod3.ecommerce.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	Page<Product> findByCategoryIgnoreCase(String category, Pageable pagable);
}
