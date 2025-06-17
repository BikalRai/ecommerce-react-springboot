package com.raicod3.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.raicod3.ecommerce.model.order.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
	
}
