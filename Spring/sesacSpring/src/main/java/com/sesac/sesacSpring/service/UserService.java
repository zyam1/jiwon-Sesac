package com.sesac.sesacSpring.service;

import com.sesac.sesacSpring.domain.User;
import com.sesac.sesacSpring.dto.UserDTO;
import com.sesac.sesacSpring.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Autowired
UserMapper userMapper;
public class UserService {

    public List<UserDTO> retrieveAll(){
        List<User> users = userMapper.retrieveAll();
        return null;
    }
}
