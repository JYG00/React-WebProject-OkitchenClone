// 레시피 배열
let RcpArr = [];

// 최근 본 레시피 데이터 설정
export const setRcp = (name) => {
  if (name.length > 0) {
    name.map((rcp) => RcpArr.push(rcp));
  } else {
    RcpArr.push(name);
  }
};

// 데이터 리턴
export const getRcp = () => {
  // 사용자가 시청한 데이터부터 보여주기 위함
  RcpArr.reverse();
  // 중복 데이터를 없애기 위함
  const data = RcpArr.filter((ele, index) => RcpArr.indexOf(ele) === index);
  return data;
};
