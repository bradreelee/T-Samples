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

// useState로 관리하는 array 조작
const SampleComponent2 = () => {
  const [array, setArray] = useState([]);

  // 조작

  // 1. spread operator를 통한 조작
  const tmp1 = [...array];
  tmp1.push("some value");
  setArray(tmp1);

  // 2. slice를 통한 조작
  const tmp2 = array.slice(-1);
  tmp1.push("some value");
  setArray(tmp1);
};

