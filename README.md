# 리액트 웹 프로젝트

오뚜기 브랜드의 '오키친' 웹사이트를 리액트로 클론 코딩했습니다.



## 웹사이트 구성

웹 사이트는 크게 다음과 같이 구성되었습니다.


메인 - 카테코리 - 인기 레시피 - 신규 레시피 - 계량 팁 - 최근 본 레시피 - 검색 - 디테일 레시피 



### `메인` 



메인 파트는 처음 사이트를 이용하는 사용자가 원하는 데이터를 찾기 쉽기 위함입니다.
사이트가 어떤 구성으로 이루어졌는지 모르는 사용자 입장에서 큰 이미지와 버튼으로
사이트에 있는 기능들을 골고루 사용할 수 있게 됩니다.



### `카테고리`



어떤 키워드를 입력해서 레시피를 검색할 수 있지만
키워드가 잘 생각이 나지 않을 때 카테고리 항목을 통해서
사용자가 원하는 데이터를 찾을 수 있도록 도와줍니다.



### `인기 레시피`



인기 레시피는 사용자들의 조회수 데이터를 기반으로 구성하였습니다.

javaScript의 map 함수, filter 함수, sort 함수를 통해 더미 데이터에 접근해서
조회 순서로 정렬해서 사용자에게 보여줍니다.


### `신규 레시피`



신규 레시피는 입력된 레시피의 최신 날짜순으로 정렬해서 사용자에게 보여줍니다.

javaScript의 map 함수, filter 함수, sort 함수를 통해 더미 데이터에 접근해서
최신 날짜 순서로 정렬해서 사용자에게 보여줍니다.


### `최근 본 레시피`

사용자가 레시피 사진을 클릭해서 디테일 레시피로 이동하게 되면
react-cookie를 이용해서 사용자가 사이트에서 나가도 
cookie의 유효기간은 레시피 데이터가 유지됩니다.

### `검색`

사용자가 태그 버튼을 눌러서 검색 페이지로 이동하거나
직접 키워드를 쳐서 검색 페이지로 이동할 수 있습니다.

javaScript의 map 함수와 filter 함수를 통해 더미 데이터에 접근해서
사용자가 검색한 키워드와 일치하는 데이터를 반환합니다.

### `디테일 레시피`

사용자가 레시피 사진을 클릭하면 디테일 레시피로 이동합니다.
디테일 레시피는 3단계로 구성되어있으며, 이미지는 구현하지 않았습니다.

레시피 설명도 더미데이터에 포함되어있습니다.

