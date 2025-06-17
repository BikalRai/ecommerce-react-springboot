package com.raicod3.ecommerce.dto.order;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.raicod3.ecommerce.model.User;
import com.raicod3.ecommerce.model.order.Order;

public class OrderResponseDTO {
	private int id;
	private User customerId;

	private List<OrderItemResponseDTO> orderItems;

	private double subTotal;
	private double shippingFee;
	private double total;
	private LocalDate createAt;
	private String status;

	public OrderResponseDTO() {

	}

	public OrderResponseDTO(Order order) {
		super();
		this.id = order.getId();
		this.customerId = order.getCustomer();
		this.orderItems = order.getOrderItems().stream().map(orderItem -> new OrderItemResponseDTO(orderItem))
				.collect(Collectors.toList());
		this.subTotal = order.getSubTotal();
		this.shippingFee = order.getShippingFee();
		this.total = order.getTotal();
		this.createAt = order.getCreateAt();
		this.status = order.getStatus();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getCustomerId() {
		return customerId;
	}

	public void setCustomerId(User customerId) {
		this.customerId = customerId;
	}

	public List<OrderItemResponseDTO> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItemResponseDTO> orderItems) {
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
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
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
