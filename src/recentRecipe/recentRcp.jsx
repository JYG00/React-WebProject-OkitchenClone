let RcpArr = [];
// 최근 본 레시피 데이터 설정
export const setRcp = (name) => {
  if (name.length > 0) {
    name.map((rcp) => RcpArr.push(rcp));
  } else {
    RcpArr.push(name);
  }

  // console.log('test code >> ');
  // console.log(RcpArr);
};

// 데이터 리턴
export const getRcp = () => {
  RcpArr.reverse();
  const data = RcpArr.filter((ele, index) => RcpArr.indexOf(ele) === index);
  console.log('result');
  console.log(data);
  return data;
};
