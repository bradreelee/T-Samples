public interface Service {
    // 요런식으로 @Params를 써줘야한다!! DTO를 받아도 마찬가지!
    // mybatis의 annotatin임
    // impl에서는 이럴 필요 없음
    public UseDataDto getUseData(@Params("user_no")String user_no, @Params("user_name")String user_name) ;

}

//mapper 클래스에서도 동일하게 param써라

// mapper에서 post의 경우 <insert id=매퍼메소드명> 이렇게!
