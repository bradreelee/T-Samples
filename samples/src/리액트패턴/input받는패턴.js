import { useState } from "react";
/**
 * react 코딩 관련
 */

// 1. input 처리 패턴
// 2. div로 input을 감싸서 크기조절 쉽게
// 3. input의 default 스타일 삭제
const SampleComponent1 = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        style={{ outline: "none", background: "none", border: "none" }} // input의 default 스타일 삭제
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};

