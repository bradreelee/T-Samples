/*
 * 주의사항
 * 
 * 1. RequestMethod.POST 명시
 * 2. 무조건 파라미터에 @RequestBody 명시
 * 3. CommonResponseVO 객체를 정의해줘야함
 * 4. 필요시 response DTO 객체로 만들어야함
*/
public ResponseEntity<CommonResponseVO<String>> addUser(@RequetBody UserInfoDto userInfo) {
    userService.addUser(userInfo);
    return new ResponseEntity<>(CommonResponseVO.<String>builder()
                                .successOrNot("Y")
                                .statusCode("SUCCESS")
                                .data("yes")
                                .build(), HttpStatus.OK);
}

// GET 요청에서 요청 값받기
// 컨트롤러 파라미터에 다음과 같이 지정
// getSth(@PathVariable("user_no")String user_no, @RequestParam("ptype")int ptype)
// 이렇게  @PathVariable이나 @RequestParam을 사용한다.



