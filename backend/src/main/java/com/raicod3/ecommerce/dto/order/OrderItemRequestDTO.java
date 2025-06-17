package com.raicod3.ecommerce.dto.order;

public class OrderItemRequestDTO {

	private String imgUrl;
	private String orderName;
	private double orderPrice;
	private int quantity;

	public OrderItemRequestDTO() {

	}

	public OrderItemRequestDTO(String imgUrl, String orderName, double orderPrice, int quantity) {

		this.imgUrl = imgUrl;
		this.orderName = orderName;
		this.orderPrice = orderPrice;
		this.quantity = quantity;
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
