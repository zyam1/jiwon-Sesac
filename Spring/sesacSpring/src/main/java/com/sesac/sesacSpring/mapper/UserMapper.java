package com.sesac.sesacSpring.mapper;

import com.sesac.sesacSpring.domain.User;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
@Mapper
public interface UserMapper {
    //sql문을 정의 하거나 xml파일을 읽거나

    List<User> retrieveAll();
}
