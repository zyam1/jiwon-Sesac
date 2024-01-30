package _05_class;

public class Shape {
    //필드 선언
    String color;

    public Shape(){
        this.color
    }
    abstract  void draw();
    void start(){
        System.out.println("도형을 그려보자~");

    }
    String getColor(){
        return color;
    }
}
