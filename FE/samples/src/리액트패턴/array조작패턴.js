import { useState } from "react";

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
