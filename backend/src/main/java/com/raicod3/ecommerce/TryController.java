package com.raicod3.ecommerce;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TryController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
