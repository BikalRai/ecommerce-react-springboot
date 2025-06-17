package com.raicod3.ecommerce.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.raicod3.ecommerce.dto.order.OrderResponseDTO;
import com.raicod3.ecommerce.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepo;

	public List<OrderResponseDTO> getCustomerOrder(int id) {
		List<OrderResponseDTO> orderList = new ArrayList<>();
		return orderList;
	}

	public OrderResponseDTO getOrderByOrderId(int orderId) {
		// TODO Auto-generated method stub
		return null;
	}

}
