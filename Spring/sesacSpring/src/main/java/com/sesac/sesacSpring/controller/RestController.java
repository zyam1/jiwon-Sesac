package com.sesac.sesacSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class RestController {
    @GetMapping("/")
    public String getMain(){ return "request"; }

    // ===GET===
    // 매개변수를 넘겨받는 방법
    // 1. /test?id=123 -> @RequestParam
    // 2. /test/123 -> @PathVariable

    @GetMapping("/get/response1")
    public String getResponse1(
            @RequestParam(value = "name") String i,
            Model model){
        // @RequestParam 어노테이션
        // - ?name=112&id=11&age=abc ( o )
        // - ?id=11&hashtag=abc ( x )
        // - string query( ?뒤의 값 ) 에서 key("name")에 대한
        //   value("112")를 변수("i")에 매핑
        // - required=true 기본값 -> 요청 url에서 설정한 key가 필수로 있어야 해요.
        model.addAttribute("name", i);
        return "response";
    }
    @GetMapping("/get/response2")
    // required=false 옵션 ( @RequestParam(value="", required=false) )
    // - query string 에서 특정 key를 옵셔널하게 받아야 하는 경우
    // ex) 검색할 때 ( 검색어(필수) 해시태그(선택 )
    // @RequestParam(value="search") String search,
    // @RequestParam(value="hashtag", required=false) String hashtag
    public String getResponse2(
            @RequestParam(value="name", required = false) String name,
            Model model
    ){
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response3/{param1}/{param2}")
    public String getResponse3(
            @PathVariable String param1,
            @PathVariable(value = "param2") String age,
            Model model){
        /*
         * @PathVariable 어노테이션
         * - /test/{id} 형식의 URL 경로로 데이터를 넘겨줄 때 받는 방법
         * - 기본적으로 경로 변수의 값을 필수로 받아야 하기 때문 ( 보내지 않으면 404 error )
         * */
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "response";
    }

    // pathvariable을 보낼 때 선택적으로 처리해야 한다면
    @GetMapping({"/get/response4/{param1}","/get/response4/{param1}/{param2}"})
    public String getResponse4(
            @PathVariable String param1,
            @PathVariable(required = false, value = "param2") String age,
            Model model) {
        // 중요! optional한 parameter은 맨 뒤에 오도록 설정
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "response";
    }
    @PostMapping("/post/response1")
    public String postResponse1(
            @RequestParam(value = "name")String a,
            @RequestParam(value = "age")String b,
            Model model
    ){
        model.addAttribute("name",a);
        model.addAttribute("age",b);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postResponse2(
            @RequestParam(value = "name",required = false)String a,
            @RequestParam(value = "age",required = false)String b,
            Model model
    ){
        model.addAttribute("name",a);
        model.addAttribute("age",b);
        return "response";
    }

    @GetMapping("/dto/response1")
    @RequestBody
    public String dtoResponse1(@ModelAttribute UserDTO userDTO){
        return userDTO.getName() + "" +userDTO.getAge();
    }

}


