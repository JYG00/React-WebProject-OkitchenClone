const foodList = [
  {
    src: require("./img/호두마늘볶음.jpg"),
    id: 1,
    hash: ["#밑반찬", "#매실청", "#단짠단짠"],
    name: "호두마늘볶음",
    view: 300,
  },
  {
    src: require("./img/햄마요덮밥.jpg"),
    id: 2,
    hash: ["#덮밥요리", "#오뚜기햄", "#골드마요네스"],
    name: "햄마요덮밥",
    view: 310,
  },
  {
    src: require("./img/푸팟퐁커리.jpg"),
    id: 3,
    hash: ["#태국식", "#게맛살", "#오뚜기카레"],
    name: "푸팟퐁커리",
    view: 320,
  },
  {
    src: require("./img/토마토 냉파스타.jpg"),
    id: 4,
    hash: ["#파스타샐러드", "#키즈셰프", "#토마토퓨레"],
    name: "토마토 냉파스타",
    view: 313,
  },
  {
    src: require("./img/북어채 무침.jpg"),
    id: 5,
    hash: ["#밑반찬", "#매실청", "#집밥"],
    name: "북어채 무침",
    view: 280,
  },
  {
    src: require("./img/토마토 미트볼파스타.jpg"),
    id: 6,
    hash: ["#미트볼X파스타면", "#오즈키친", "#스파게티"],
    name: "토마토 미트볼파스타",
    view: 500,
  },
  {
    src: require("./img/콘치즈.jpg"),
    id: 7,
    hash: ["#치즈듬뿍", "#단짠단짠", "#골드마요네스"],
    name: "콘치즈",
    view: 452,
  },
  {
    src: require("./img/카레 샥슈카.jpg"),
    id: 8,
    hash: ["#3일숙성카레", "#에그인헬", "#계란요리"],
    name: "카레 샥슈카",
    view: 380,
  },
  {
    src: require("./img/카레 비프 스튜.jpg"),
    id: 9,
    hash: ["#3일숙성카레", "#카레맛집", "#쇠고기"],
    name: "카레 비프 스튜",
    view: 345,
  },
  {
    src: require("./img/치킨 카레 타코.jpg"),
    id: 10,
    hash: ["#맥시코", "#밀또띠아", "#닭가슴살"],
    name: "치킨 카레 타코",
    view: 412,
  },
  {
    src: require("./img/차돌박이 된장찌개.jpg"),
    id: 11,
    hash: ["#셰프의팁", "#즉석국", "#캠핑"],
    name: "차돌박이 된장찌개",
    view: 454,
  },
  {
    src: require("./img/진라면밥.jpg"),
    id: 12,
    hash: ["#셰프의팁", "#라면밥", "#냄비밥"],
    name: "진라면밥",
    view: 400,
  },
  {
    src: require("./img/육개장 칼국수.jpg"),
    id: 13,
    hash: ["#셰프의팁", "#즉석국", "#집밥"],
    name: "육개장 칼국수",
    view: 312,
  },
  {
    src: require("./img/유자 연근조림.jpg"),
    id: 14,
    hash: ["#집밥", "#밑반찬", "#꿀유자차"],
    name: "유자 연근조림",
    view: 234,
  },
  {
    src: require("./img/옥수수전.jpg"),
    id: 15,
    hash: ["#스위트콘", "#부침개", "#연유"],
    name: "옥수수전",
    view: 287,
  },
  {
    src: require("./img/오이미역냉국.jpg"),
    id: 16,
    hash: ["#집밥", "#밑반찬", "#옛날미역"],
    name: "오이미역냉국",
    view: 187,
  },
  {
    src: require("./img/에그마요 샌드위치.jpg"),
    id: 17,
    hash: ["#갈릭아이올리", "#계란요리", "#브런치"],
    name: "에그마요 샌드위치",
    view: 512,
  },
  {
    src: require("./img/시나몬롤.jpg"),
    id: 18,
    hash: ["#베이킹", "#찹살호떡믹스", "#에어프라이어"],
    name: "시나몬롤",
    view: 498,
  },
  {
    src: require("./img/쇠고기채소말이.jpg"),
    id: 19,
    hash: ["#불고기", "#도시락", "#파티"],
    name: "쇠고기채소말이",
    view: 327,
  },
  {
    src: require("./img/삼겹살 순두부짜글이.jpg"),
    id: 20,
    hash: ["#얼큰칼칼", "#오늘밥상", "#한식"],
    name: "삼겹살 순두부짜글이",
    view: 612,
  },
  {
    src: require("./img/바지락찜.jpg"),
    id: 21,
    hash: ["#안주", "#해물찜", "#얼큰칼칼"],
    name: "바지락찜",
    view: 355,
  },
  {
    src: require("./img/문어 와사비 냉채.jpg"),
    id: 22,
    hash: ["#와사비소스", "#샐러드", "#무침"],
    name: "문어 와사비 냉채",
    view: 311,
  },
  {
    src: require("./img/몬테크리스토.jpg"),
    id: 23,
    hash: ["#오뚜기쨈", "#토스트", "#치즈듬뿍"],
    name: "몬테크리스토",
    view: 433,
  },
  {
    src: require("./img/매콤 쉬림프 카레라이스.jpg"),
    id: 24,
    hash: ["#카레맛집", "#새우", "#스리라챠소스"],
    name: "매콤 쉬림프 카레라이스",
    view: 545,
  },
  {
    src: require("./img/떡만둣국.jpg"),
    id: 25,
    hash: ["#XO만두", "#따끈한국물", "#설날"],
    name: "떡만둣국",
    view: 555,
  },
  {
    src: require("./img/돈코츠오라면.jpg"),
    id: 26,
    hash: ["#오라면X부산식돼지국밥", "#야식", "#캠핑"],
    name: "돈코츠오라면",
    view: 377,
  },
  {
    src: require("./img/돈까스샌드위치.jpg"),
    id: 27,
    hash: ["#식빵요리", "#도시락", "#마요네스"],
    name: "돈까스샌드위치",
    view: 458,
  },
  {
    src: require("./img/더치베이비 팬케이크.jpg"),
    id: 28,
    hash: ["#핫케이크", "#시나몬", "#브런치"],
    name: "더치베이비 팬케이크",
    view: 366,
  },
  {
    src: require("./img/단밤 크림스프.jpg"),
    id: 29,
    hash: ["#밤", "#크림스프", "#분말스프"],
    name: "단밤 크림스프",
    view: 277,
  },
  {
    src: require("./img/녹차핫케이크와 딸기콩피.jpg"),
    id: 30,
    hash: ["#홈카페", "#브런치", "#계란요리"],
    name: "녹차핫케이크와 딸기콩피",
    view: 293,
  },
  {
    src: require("./img/골뱅이야채초무침.jpg"),
    id: 31,
    hash: ["#새콤달콤", "#초고추장", "#안주"],
    name: "골뱅이야채초무침",
    view: 218,
  },
  {
    src: require("./img/고추참치계란말이.jpg"),
    id: 32,
    hash: ["#반찬", "#간단한끼", "#계란요리"],
    name: "고추참치계란말이",
    view: 299,
  },
  {
    src: require("./img/고추잡채.jpg"),
    id: 33,
    hash: ["#중식", "#굴소스", "#돼지불고기양념"],
    name: "고추잡채",
    view: 475,
  },
  {
    src: require("./img/고사리 갈릭볶음밥.jpg"),
    id: 34,
    hash: ["#마늘의민족", "#알리오올리오", "#한그릇"],
    name: "고사리 갈릭볶음밥",
    view: 333,
  },
];

export default foodList;
