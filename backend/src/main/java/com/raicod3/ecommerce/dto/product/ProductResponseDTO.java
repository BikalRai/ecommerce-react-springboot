package com.raicod3.ecommerce.dto.product;

import com.raicod3.ecommerce.model.Product;

public class ProductResponseDTO {

    private int id;
    private String name;
    private double price;
    private String description;
    private String imageUrl;
    private String category;
    private int quantity;

    public ProductResponseDTO() {
    }

    public ProductResponseDTO(Product product) {
       this.id = product.getId();
       this.name = product.getName();
       this.price = product.getPrice();
       this.description = product.getDescription();
       this.imageUrl = product.getImageUrl();
       this.category = product.getCategory();
       this.quantity = product.getQuantity();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
