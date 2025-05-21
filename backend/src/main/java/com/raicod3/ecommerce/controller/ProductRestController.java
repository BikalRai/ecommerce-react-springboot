package com.raicod3.ecommerce.controller;


import com.raicod3.ecommerce.custom.exception.CustomException;
import com.raicod3.ecommerce.dto.product.ProductRequestDTO;
import com.raicod3.ecommerce.dto.product.ProductResponseDTO;
import com.raicod3.ecommerce.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getProducts() throws CustomException {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProduct(@PathVariable int id) throws CustomException {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@PathVariable int id, @RequestBody ProductRequestDTO productRequestDTO) throws CustomException {
        return ResponseEntity.ok(productService.updateProduct(id, productRequestDTO));
    }

    @DeleteMapping("{/id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) throws CustomException {
        return ResponseEntity.ok(productService.deleteProduct(id));
    }
}
