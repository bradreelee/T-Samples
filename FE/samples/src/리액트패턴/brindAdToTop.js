
  // 정렬 완료 후 특정 조건에 있는 아이템들을 먼저 보여주기
  const bringAdToTop = (list) => {
    const tmp1 = [...list].filter((list) => list.adFlag === "Y");
    const tmp2 = [...list].filter((list) => list.adFlag === "N");
    return tmp1.concat(tmp2);
  };