# Final Project - Portfolio

## 개발환경

- React 18.3.1 + Typescript with Vite
- React Router
- Recoil + Tanstack Query v5 + Axios
- SCSS + Framer Motion
- Supabase

## 요구사항

- Memoization 활용
- useTransition 활용
- React.lazy와 Suspense 활용
- Composition Component 숙지
- lodash를 활용한 Throttle과 debounce 사용

## 과정

1. **준비**

- 상태정의
  - 전역 상태와 지역 상태 구분
- 공통 컴포넌트 분류
- Router 정리

2. **과정**

- 초기세팅을 Git Clone받아 시작. 일단 Routing부터. npm i react-router
- Recoil, Tanstack Query같은건 Starter pack에 미리 세팅. npm i recoil npm i @tanstack/react-query
- Framer motion 적용 npm i motion
- Google Material Icon 사용 <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

<Photos/>

- 페이지 최상단 이동 버튼 구현
  - Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
  - Scroll event에 throttle 사용. npm install lodash
  - 임시로 준 60vh 제거 New-Portfolio\src\pages\photos\components\main\Main.module.scss
- SCSS와 Recoil로 Darkmode 구현

<Detail/>

- <Detail/>에서 like 버튼 클릭 시 localStorage에 추가하는 기능 구현
- 한번 더 클릭 시 localStorage에서 제거하는 기능 필요
- Likes 페이지 활성화, <Detail/> 활성화 상태에서 Likes 버튼 추가 시 localStorage 실시간 반영되지 않음
- Like 페이지 활성화 시점에서 localStorage.getItem 하므로 해당 문제 발생
- <Detail/> 활성화 시 Likes 페이지를 off 해주도록 하자
- localStorage.getItem을 전역변수로 변경하면서 해결

<Toast/>

Toast 직접 제작해보기

- 공통 Component로 제작해 어디서도 Import로 사용할 수 있게
- props로 message를 받을 수 있게
- useTimeout로 3000ms후 사라지게
- Typescript로 늘 받지는 않는 props를 optional하게 설정할 수 있을까?

<Likes/>

- Likes 페이지에서 해당 like 클릭 시 <Detail/>로 넘어가는 기능 필요
- Detail toggle을 전역변수로 변경하기
- Detail에 props로 전송되는 data를 전역으로 변경
  ㄴ likes page에서 like 클릭 시 2에서 변경한 전역 data를 localStorgae에 담긴 요소들로 변경
  ㄴ likes 페이지 완성

<Search/>

- useRef를 통한 활성화 시 기본 focus()
- input내부의 state값으로 searchState 업데이트
- 검색어 Navigation에 고정하는 북마크 기능 추가
  ㄴ Navigation에서 검색어를 Array로 만들고 해당 Array를 업데이트
  ㄴ atom으로 만들었는데 localStorage로 바꿔야할듯
- Toast 사용

4. **QnA**

## Issue

<photos/components/main>

- server에서 받아온 data를 자식 Component에 보내주는 로직에서 null로 넘어가는 현상 발견
- 부모 컴포넌트에서 data가 lodable일때만 보내주는 로직으로 변경
- 자식 컴포넌트에서 optional chaining 사용
- null일 경우 return 하게 변경
  ㄴ 왜 안되는지 알수가 없다.......
  ㄴ error code를 추려냈지만 여전히 원인은 동일한 것으로 보임.
  ㄴ localStorage에 저장된 데이터에 이미 null이 들어가 있는걸 발견. 삭제 후 해결. 에러의 원인은 다른곳에 있었던 것으로..
  ㄴ 아주 산뜻한 경험이었지만 에러에서 배우는게 참 많다는걸 느낀다

## 숙제

단기

- <Main> pagination 필요
- <Search/> Debounce 적용하기
- <Search/> 검색어 공백 등 예외처리

장기

- Store atom 정리하기. 현재는 file당 atom하나씩 들어가있는데 비슷한것끼리 묶으면 어떨까?
- .env로 API_KEY 등 빼기
- 기존 resolve, alias를 통해 @assets 형태로 절대 경로 접근 되던것을 tsconfigpaths()로 변경. 작동하지 않는듯.
- 전체적으로 최적화 필요
- <Loading/> 만들고 적용하기

## 회고

- Git push 습관들이기
- 생각을 먼저 하고 코드로 옮기는 습관들이기
- React Intersection Observer 사용해보기

## 성취

- Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
