package com.raicod3.ecommerce.controller;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.raicod3.ecommerce.custom.exception.CustomException;
import com.raicod3.ecommerce.dto.product.ProductRequestDTO;
import com.raicod3.ecommerce.dto.product.ProductResponseDTO;
import com.raicod3.ecommerce.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductRestController {

    private final ProductService productService;

    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO productRequestDTO) throws CustomException {
        return ResponseEntity.ok(productService.createProduct(productRequestDTO));
    }

    @GetMapping("/products")
    public ResponseEntity<Page<ProductResponseDTO>> getProducts(
    		@RequestParam(defaultValue = "0") int page,
    		@RequestParam(defaultValue = "20") int size,
    		@RequestParam(required = false) String category
    		) throws CustomException {    	
    	
        return ResponseEntity.ok(productService.getProducts(page, size, category));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProduct(@PathVariable int id) throws CustomException {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@PathVariable int id, @RequestBody ProductRequestDTO productRequestDTO) throws CustomException {
        return ResponseEntity.ok(productService.updateProduct(id, productRequestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) throws CustomException {
        return ResponseEntity.ok(productService.deleteProduct(id));
    }
}
