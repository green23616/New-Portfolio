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
    - props 세번부터 전역 등록
- 공통 컴포넌트 분류
- Router 정리

2. **과정**

- 초기세팅을 Git Clone받아 시작. 일단 Routing부터. npm i react-router
- Recoil, Tanstack Query같은건 Starter pack에 미리 세팅. npm i recoil npm i @tanstack/react-query
- Framer motion 적용 npm i motion
- Google Material Icon 사용 <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

- SCSS와 Recoil로 Darkmode 구현

- Photos 시작
- 페이지 최상단 이동 버튼 구현
  - Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
  - Scroll event에 throttle 사용. npm install lodash
- React Query v5로 data fetch

  - Tanstack query Devtools 사용 npm i @tanstack/react-query-devtools
  - Axios로 fetch

- 임시로 준 60vh 제거 New-Portfolio\src\pages\photos\components\main\Main.module.scss

- Likes 구현 중

  - <Detail/>에서 like 버튼 클릭 시 localStorage에 추가하는 기능 구현
  - 한번 더 클릭 시 localStorage에서 제거하는 기능 필요
  - Likes 페이지 활성화, <Detail/> 활성화 상태에서 Likes 버튼 추가 시 localStorage 실시간 반영되지 않음
  - Like 페이지 활성화 시점에서 localStorage.getItem 하므로 해당 문제 발생
  - <Detail/> 활성화 시 Likes 페이지를 off 해주도록 하자
  - state > RecoilState로 변경

- Toast 직접 제작해보기
  1. 공통 Component로 제작해 어디서도 Import로 사용할 수 있게
  2. props로 message를 받을 수 있게
  3. useTimeout로 3000ms후 사라지게

3. **QnA**

## Issue

1. 기존 resolve, alias를 통해 @assets 형태로 절대 경로 접근 되던것을 tsconfigpaths()로 변경. 작동하지 않는듯.
2. Likes 페이지에서 해당 like 클릭 시 <Detail/>로 넘어가는 기능 필요
3. <Main> pagination 필요
4. Search 기능 필요
5. 최적화 필요

## 회고

- Git push 습관들이기
- Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
- React Intersection Observer 사용해보기
