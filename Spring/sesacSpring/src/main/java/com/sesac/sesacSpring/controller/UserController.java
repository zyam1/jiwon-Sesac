package com.sesac.sesacSpring.controller;

import com.sesac.sesacSpring.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserController {
@Autowired
UserService userService;
UserSe
public List<UserDTO> getUser(){
    public List<UserDTO> result =userService.retreiveAll();
    return result;
}

}
