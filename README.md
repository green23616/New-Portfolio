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
  - 무한스크롤 구현
  - Axios로 fetch

- 임시로 준 60vh 제거 New-Portfolio\src\pages\photos\components\main\Main.module.scss

3. **QnA**

## Issue

1. 기존 resolve, alias를 통해 @assets 형태로 절대 경로 접근 되던것을 tsconfigpaths()로 변경. 작동하지 않는듯.

## 회고

- Git push 습관들이기
- Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
- React Intersection Observer 사용해보기
