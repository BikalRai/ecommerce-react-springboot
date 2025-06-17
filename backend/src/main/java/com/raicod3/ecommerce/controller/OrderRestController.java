package com.raicod3.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.raicod3.ecommerce.dto.order.OrderResponseDTO;
import com.raicod3.ecommerce.service.OrderService;

@RestController
@RequestMapping("/api/order")
public class OrderRestController {
	
	@Autowired
	private OrderService orderService;

	// get all orders based on customer/user id
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<List<OrderResponseDTO>> getordersByCusomterIDr(@PathVariable int customerId) {
		return new ResponseEntity<>(orderService.getCustomerOrder(customerId), HttpStatus.OK);
	}
	
	// find order based on order id
	@GetMapping("/order/{orderId}")
	public ResponseEntity<OrderResponseDTO> getOrderbyOrderId(@PathVariable int orderId) {
		return new ResponseEntity<>(orderService.getOrderByOrderId(orderId), HttpStatus.OK);
	}
	
	// create order using post method
	
	//delete order based on id
}
