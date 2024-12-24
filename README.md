# Project - Photos

## 개발환경

- React 18.3.1 + Typescript with Vite
- React Router
- Recoil + Tanstack Query v5 + Axios
- SCSS + Framer motion
- lodash

## 요구사항

- Composition Component 숙지
- 최적화
  - Memoization 활용
  - useTransition 활용
  - React.lazy와 Suspense 활용
  - lodash를 활용한 Throttle과 debounce 사용

## 과정

**사전준비**

- 상태정의
  - 전역 상태와 지역 상태 분류
- 공통 컴포넌트 분류
- Router 정리

**진행**

- Routing. npm i react-router
- Recoil, Tanstack Query같은건 Starter pack에 미리 세팅. npm i recoil npm i @tanstack/react-query
- Framer motion 적용 npm i motion
- Google Material Icon 사용 <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
- header, main, footer 높이 고정은 px로 유동은 calc() 사용

Photos/

- 페이지 최상단 이동 버튼 구현
  - Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
  - Scroll event에 throttle 사용. npm install lodash
  - 임시로 준 60vh 제거 New-Portfolio\src\pages\photos\components\main\Main.module.scss
- SCSS와 Recoil로 Darkmode 구현

Detail/

- Detail/에서 like 버튼 클릭 시 localStorage에 추가하는 기능 구현
- 한번 더 클릭 시 localStorage에서 제거하는 기능 필요
- Likes 페이지 활성화, Detail/ 활성화 상태에서 Likes 버튼 추가 시 localStorage 실시간 반영되지 않음
- Like 페이지 활성화 시점에서 localStorage.getItem 하므로 해당 문제 발생
- Detail/ 활성화 시 Likes 페이지를 off 해주도록 하자
- localStorage.getItem을 전역변수로 변경하면서 해결

Toast/

Toast 직접 제작해보기

- 공통 Component로 제작해 어디서도 Import로 사용할 수 있게
- props로 message를 받을 수 있게
- useTimeout로 3000ms후 사라지게
- Typescript로 늘 받지는 않는 props를 optional하게 설정할 수 있을까?

like/

- like 페이지에서 like 클릭 시 해당 Detail/로 넘어가는 기능 필요
- Detail toggle을 전역변수로 변경하기
- Detail에 props로 전송되는 data를 전역으로 변경
  ㄴ like page에서 like 클릭 시 전역 data를 localStorgae에 담긴 요소들로 변경
  ㄴ like 페이지 완성
  추가 개선점
  1. like 한번에 비우기 기능
     - localStorage를 기본값으로 돌리자
     - localStorage를 비우면서 관련된 recoil atom들도 같이 업데이트 해줘야 함
     - resetRecoilstate를 쓰면 이 과정이 알아서 된다고 함
     - 완성
     - 가끔 삭제가 되지 않는 버그 발견> 원인 파악부터
  2. like page 사이즈 재조정

Search/

- useRef를 통한 활성화 시 기본 focus()
- input내부의 state값으로 searchState 업데이트
- 공백 검색 막기
- 검색어 Navigation에 고정하는 북마크 기능 추가
  - Navigation에서 검색어를 Array로 만들고 해당 Array를 업데이트
  - atom으로 만들었는데 localStorage로 바꿔야할듯
  - localStorage에 동일한 값이 있을때 추가안되게
  - 최대 북마크 Array.length 6개로 제한
  - 북마크 삭제 기능

Pagination/

- 코드가 길어질 것 같아 Component로 분리
- tanstackQuery에서 queryKey에 Recoil value를 포함시켜야 실시간 update된다

**최적화**

1. 진단

- 어디에 무엇이 필요한가
- console.time() + timeEnd()로 시간 측정
- Profiler 사용

2. 개선

- 개선

3. 테스트

- 잘 동작하는가
- SideEffect는 없는가

## 숙제

단기

- Main/ pagination 필요
- Search/ Debounce 적용하기
- Search/ 검색어 공백 등 예외처리
- Navigation에서 Bookmark/Search/Like 세 부분으로 구역 나누기
- like/에서 like 한번에 비우기 기능 가끔 작동하지 않는 버그 fix
  - localStorage값이 비워진 직후 Recoil update 느린것같음
  - 반영되지 않은 상태의 Recoil value를 다시 읽기하니까 직전 localStorage로 고정되는 버그가 발생하는듯
  - 직접 localstorage.deleteItem()를 실행해보자
  - Recoil update 해주기
- like개수가 0일때 x0으로 표시하지말고 좋아요를 확인하세요 p로 변경

장기

- Store atom 정리하기. 현재는 file당 atom하나씩 들어가있는데 비슷한것끼리 묶으면 어떨까?
- .env로 API_KEY 등 빼기
- 기존 resolve, alias를 통해 @assets 형태로 절대 경로 접근 되던것을 tsconfigpaths()로 변경. 작동하지 않는듯.
- Loading/ 만들고 적용하기

프로젝트 이후

- React Intersection Observer 사용해보기
- padding과 margin만 사용해서, 또 translate와 flex box만 사용해서 로딩속도 비교해보기

## Issue

components/main/Main.tsx

- server에서 받아온 data를 자식 Component에 보내주는 로직에서 null로 넘어가는 현상 발견
- 부모 컴포넌트에서 data가 lodable일때만 보내주는 로직으로 변경
- 자식 컴포넌트에서 optional chaining 사용
- null일 경우 return 하게 변경
  - error code를 추려냈지만 여전히 원인은 동일한 것으로 보임.
  - localStorage에 저장된 데이터에 이미 null이 들어가 있는걸 발견. 삭제 후 해결. 에러의 원인은 다른곳에 있었던 것 같다.
  - 아주 산뜻한 경험이었지만 에러에서 배우는게 참 많다는걸 느낀다

components/navigation/components/likes/Likes.tsx

- like/에서 like 한번에 비우기 기능 가끔 작동하지 않는 버그 fix
  - localStorage값이 비워진 직후 Recoil update 바로 반영되지 않는 것 같음
  - 반영되지 않은 상태의 Recoil value를 다시 읽기하니까 직전 localStorage로 계속 고정되는 버그가 발생하는듯
  - 직접 localstorage.deleteItem()를 실행해보자
  - Recoil update 해주기

## 회고

- Git push 습관들이기
- 생각을 먼저 하고 코드로 옮기는 습관들이기
- 개선점을 찾아냈을때, 그리고 생각을 코드로 옮길때 성취감이 좋다.
- 머리로 코드를 구상하고 그걸 실제로 옮기는 과정이 빨라지면 좋겠다.

## 성취

- Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선.
