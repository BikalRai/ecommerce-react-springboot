package com.raicod3.ecommerce.dto.order;

import java.time.LocalDate;
import java.util.List;

public class OrderRequestDTO {

	private int customerId;

	private List<OrderItemRequestDTO> orderItems;

	private double subTotal;
	private double shippingFee;
	private double Total;
	private LocalDate createAt;
	private String status;

	public OrderRequestDTO() {

	}

	public OrderRequestDTO(int customerId, List<OrderItemRequestDTO> orderItems, double subTotal, double shippingFee,
			double total, LocalDate createAt, String status) {

		this.customerId = customerId;
		this.orderItems = orderItems;
		this.subTotal = subTotal;
		this.shippingFee = shippingFee;
		Total = total;
		this.createAt = createAt;
		this.status = status;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public List<OrderItemRequestDTO> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItemRequestDTO> orderItems) {
		this.orderItems = orderItems;
	}

	public double getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(double subTotal) {
		this.subTotal = subTotal;
	}

	public double getShippingFee() {
		return shippingFee;
	}

	public void setShippingFee(double shippingFee) {
		this.shippingFee = shippingFee;
	}

	public double getTotal() {
		return Total;
	}

	public void setTotal(double total) {
		Total = total;
	}

	public LocalDate getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDate createAt) {
		this.createAt = createAt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
