package com.raicod3.ecommerce;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TryController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
