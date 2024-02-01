package com.sesac.sesacSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class TestController {
    @GetMapping("/test0201")
    public String testMain(){ return "test0201A"; }
    @GetMapping("/introduce/{param1}")
    public String apigetTest(@PathVariable String param1, Model model){
        //
        model.addAttribute("testName", param1);
        return "test0201";
    }

    @GetMapping("/introduce2")
    public String apigetTest2( @RequestParam(value="name", required = false) String name,
                               @RequestParam(value="age", required = false) String age,

                               Model model
    ){
        model.addAttribute("testName", name);
        model.addAttribute("age", age);
        return "test0201";}

    @PostMapping("/testform")
    public  String apiPostTest(@RequestParam String name,
                               @RequestParam String gender,
                               @RequestParam String birth,
                               @RequestParam String hobby,
                               Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birth", birth);
        model.addAttribute("hobby", hobby);

        return "testform";
    }

//동적 폼 전송(VO 사용)


}

