/*************************************************
 *************  시간관련
 */

import { useState } from "react";

// 현재 시작을 오전 00:00 형태로 가져오는 함수
const getTime1 = () => {
  const now = new Date();
  let hour = now.getHours();
  const am = hour < 12 ? "오전" : "오후";
  hour = hour > 12 ? hour % 12 : hour;
  hour = ("0" + hour).slice(-2);
  const min = ("0" + now.getMinutes()).slice(-2);

  return am + " " + hour + ":" + min;
};

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

// overflow 설정하는법
/**
 * {
 *  overflowY: "scroll", //auto가 나을듯
 *  overflowX: "hidden",
 *  height: "500px"     <-- 얘가 꼭 필요!!
 *
 * }
 */