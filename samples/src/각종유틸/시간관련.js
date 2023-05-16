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

// 2023년 5월 16일 14:00 <-- 이런 양식
const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = (0 + now.getHours()).slice(-2);
  const min = (0 + now.getMinutes()).slice(-2);

  return year + "년 " + month + "월 " + day + "일 " + hour + ":" + min;
};
