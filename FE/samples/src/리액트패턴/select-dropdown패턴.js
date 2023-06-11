import { useState } from "react";

const Sample = () => {
  // 이거 대문자로 안쓰는거 실수하기 쉽다.
  const [filter, setFilter] = useState("ALL");
  const [order, setOrder] = useState("normal");

  // 정렬 완료 후 특정 조건에 있는 아이템들을 먼저 보여주기
  const bringAdToTop = (list) => {
    const tmp1 = [...list].filter((list) => list.adFlag === "Y");
    const tmp2 = [...list].filter((list) => list.adFlag === "N");
    return tmp1.concat(tmp2);
  };

  // filter 가 안되연 option value에 제대로 들어갔나 확인!
  return (
    <div>
      {/* select 처리 */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="ALL">전체</option>
        <option value="CK">치킨</option>
        <option value="PZ">피자</option>
        <option value="SF">분식</option>
        <option value="CF">카페</option>
      </select>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value="normal">기본 정렬순</option>
        <option value="star">별점 높은순</option>
        <option value="review">리뷰 많은순</option>
      </select>
    </div>
  );
};
