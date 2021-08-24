package com.temocabl.solarsystem.ui.model.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("solar")
public class IndexController {

    @GetMapping("test")
    public String test(){
        return "this is test";
    }
}
