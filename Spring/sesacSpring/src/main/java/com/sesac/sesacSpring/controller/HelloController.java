package com.sesac.sesacSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.thymeleaf.model.IAttribute;

@Controller
//@Controller :해당클래스가 Comtroller역할을 하는 클래스 라는것을
//Spring Controller에세 알려준다.
public class HelloController {
    @GetMapping("/hi")
    public String getHi(Model model){
        //Model :Controller  안의 메서드가 파라미터로 받을 수 있는 객체 중 하나
        //Model 안에 정보를 담아서 view로 전달
       model.addAttribute("name", "홍길동");
        model.addAttribute("name2", "<strong>utext사용</strong>");
        model.addAttribute("age", 15);
        return "hi";//템플릿 파일의 이름
    }
}
