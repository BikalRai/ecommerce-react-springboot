package com.raicod3.ecommerce.service;

import com.raicod3.ecommerce.custom.exception.CustomException;
import com.raicod3.ecommerce.dto.product.ProductRequestDTO;
import com.raicod3.ecommerce.dto.product.ProductResponseDTO;
import com.raicod3.ecommerce.model.Product;
import com.raicod3.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    //create a product
    public ProductResponseDTO createProduct(ProductRequestDTO productRequestDTO) throws CustomException {
        if (productRequestDTO == null) {
            throw new CustomException("Invalid product request...cannot create product.");
        }
        Product product = new Product();
        product.setName(productRequestDTO.getName());
        product.setDescription(productRequestDTO.getDescription());
        product.setPrice(productRequestDTO.getPrice());
        product.setCategory(productRequestDTO.getCategory());
        product.setImageUrl(productRequestDTO.getImageUrl());
        product.setQuantity(productRequestDTO.getQuantity());

        productRepository.save(product);

        ProductResponseDTO productResponseDTO = new ProductResponseDTO();
        productResponseDTO.setId(product.getId());
        productResponseDTO.setName(product.getName());
        productResponseDTO.setDescription(product.getDescription());
        productResponseDTO.setPrice(product.getPrice());
        productResponseDTO.setCategory(product.getCategory());
        productResponseDTO.setImageUrl(product.getImageUrl());
        productResponseDTO.setQuantity(product.getQuantity());
        return productResponseDTO;
    }

    // get all products
    public List<ProductResponseDTO> getProducts() throws CustomException {

        List<Product> products = productRepository.findAll();

        if (products.isEmpty()) {
            throw new CustomException("No products found");
        }

        List<ProductResponseDTO> productResponseDTOs = new ArrayList<>();

        for (Product product : products) {
            ProductResponseDTO dto = new ProductResponseDTO();
            dto.setId(product.getId());
            dto.setName(product.getName());
            dto.setPrice(product.getPrice());
            dto.setDescription(product.getDescription());
            dto.setCategory(product.getCategory());
            dto.setImageUrl(product.getImageUrl());
            dto.setQuantity(product.getQuantity());
            productResponseDTOs.add(dto);
        }

        return productResponseDTOs;
    }

    // get product by id
    public ProductResponseDTO getProductById(int id) throws CustomException {
        if (id <= 0) {
            throw new CustomException("Invalid product id...cannot get product.");
        }
        Optional<Product> productOptional = productRepository.findById(id);

        if (productOptional.isEmpty()) {
            throw new CustomException("No product found with id " + id);
        }

        Product product = productOptional.get();
        return new ProductResponseDTO(product);
    }

    // update product by id
    public ProductResponseDTO updateProduct(int id, ProductRequestDTO productRequestDTO) throws CustomException {
        if (id <= 0) {
            throw new CustomException("Invalid product id...cannot update product.");
        }

        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            throw new CustomException("No product found with id " + id);
        }

        Product product = productOptional.get();
        product.setName(productRequestDTO.getName());
        product.setDescription(productRequestDTO.getDescription());
        product.setPrice(productRequestDTO.getPrice());
        product.setCategory(productRequestDTO.getCategory());
        product.setImageUrl(productRequestDTO.getImageUrl());
        product.setQuantity(productRequestDTO.getQuantity());
        productRepository.save(product);

        return new ProductResponseDTO(product);
    }

    // delete product by id

    public String deleteProduct(int id) throws CustomException {
        if (id <= 0) {
            throw new CustomException("Invalid product id...cannot delete product.");
        }

        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            throw new CustomException("No product found with id " + id);
        }
        productRepository.delete(productOptional.get());
        return "Product deleted successfully";
    }
}
