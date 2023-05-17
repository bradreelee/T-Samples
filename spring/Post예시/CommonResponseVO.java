//패키지 쓸것!!

@Data
@Builder
@NoArgsContructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CommonResponseVO<T> {
    private String successOrNot;
    private String statusCode;
    private T data;
    
}
