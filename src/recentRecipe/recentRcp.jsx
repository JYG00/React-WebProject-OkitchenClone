let nameArr = [];

// 최근 본 레시피 데이터 설정
export const setRcp = (param) => {
  nameArr.push(param);
  console.log('받은 데이터');
  console.log(nameArr);
};

// 데이터 리턴
export const getRcp = (param) => {
  return nameArr;
};
