package com.raicod3.ecommerce.dto.order;

import com.raicod3.ecommerce.model.order.OrderItem;

public class OrderItemResponseDTO {

	private int id;
	private String imgUrl;
	private String orderName;
	private double orderPrice;
	private int quantity;

	public OrderItemResponseDTO() {

	}

	public OrderItemResponseDTO(OrderItem orderItem) {

		this.id = orderItem.getId();
		this.imgUrl = orderItem.getImgUrl();
		this.orderName = orderItem.getOrderName();
		this.orderPrice = orderItem.getOrderPrice();
		this.quantity = orderItem.getQuantity();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getOrderName() {
		return orderName;
	}

	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}

	public double getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(double orderPrice) {
		this.orderPrice = orderPrice;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
