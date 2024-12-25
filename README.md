# Project - Photos

## 개발환경

- React 18.3.1 + Typescript with Vite
- React Router
- Recoil + Tanstack Query v5 + Axios
- SCSS
- lodash

## 개발목표

- Composition Component 숙지
- Client state와 Serve State의 효율적인 관리
- 성능 개선
  - Render 줄이기
  - React.lazy와 suspense
  - Memoization
    - React.memo, useMemo
    - useCallback
  - lodash
    - Throttling
    - Debounce
  - useTransition
- Toast popup 제작
- React Devtools, React Query Tools 사용

## 과정

**준비**

- State 정의
  - 전역 상태와 지역 상태 분류
- 공통 컴포넌트 분류
  - Darkmode
  - 상단 이동 버튼
  - Toast popup
- Router 정리
  - Main Page
    - 프로젝트 구조 변경으로 임시 삭제
  - Blog, Music
    - 프로젝트 구조 변경으로 임시 삭제
  - Photos
- Google material icons 사용

**시작**

**1. Photos Page (Main Page)**

- 구조
  - Header
  - Navigation
    - Bookmark
    - Search
    - Like
      - Item
  - Main
    - Card
    - Detail
    - Pagination
    - Toast (공통 컴포넌트)
    - UP (공통 컴포넌트)
    - Darkmode (공통 컴포넌트) > 프로젝트 구조 변경으로 임시 삭제
  - Footer
- 공통 컴포넌트 높이는 px로 고정 후 컨텐츠 부분 calc() 사용
- 페이지 최상단 이동 버튼 구현
  - Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선
  - Scroll event에 throttling 사용
- Darkmode 구현
  - SCSS 전역 CSS + Recoil

**2. Navigation Component**

- Like Component 토글 위해 RecoilState 구독
- localStorage에서 Like list 가져오기 위해 RecoilValue로 구독
- .length통해 좋아요 리스트 개수 표시

    - **Bookmark Component**
      - 검색어 북마크바에 추가 위해 localStorage 활용 및 Recoil atom 추가
      - 배열로 만들어 localStorage에 추가 및 삭제
      - localStorage 실시간 추가 및 삭제 Recoil에서도 update 해주기 위해 Recoil effects_UNSTABLE 사용
      - filter() 활용 삭제 기능 추가 
      - 북마크 변경 시 1페이지로 돌아가기 기능 추가
      - 
    - **Search Component**
      - useRef() 사용 검색창 활성화 시 기본 focus
      - input내부의 state값으로 searchState 업데이트
      - 공백 입력 제한 추가
      - 
    - **Like Component**
      - Detail Component에서 먼저 생성한 likes 배열 Recoil 구독
      - likes 배열 값이 0일 경우 안내 문구 추가
      - map해서 Item Page에 props로 전달
      - null일 경우 Narrowing
      - like 한번에 비우기 기능 추가
         - localStorage를 비우면서 recoil도 같이 업데이트 필요
         - useResetRecoilstate()를 통해 default 값인 []로 동시에 업데이트
         - 
    - **Item Component**
      - Like Component에서 props로 받은 likes 배열 map으로 뿌리기
      - useSetRecoilState로 likes 배열을 수정할 수 있게 만들어 Detail Component와 연동되는 기능 추가

**3. Main Component**

/////////////////////////////Client + Server state 관리/////////////////////////////

- Tanstack Query v5 통해 data를 stale하게 fetch 및 cache 처리
- isPending, isError, error 상태 처리
- Recoil과 결합해 Client state와 Server state를 결합
  - client에서 page와 검색어를 변경함으로 새로운 data를 fetch할 수 있게 설계
- data 받아오기 전 상태 optional chaining으로 처리
- fetch 된 data를 Card component에 map 해주기

/////////////////////////////검색결과 처리/////////////////////////////

- 검색결과 출력 문구 추가
- 검색결과 없는 경우 안내 문구 추가
 
/////////////////////////////북마크 기능/////////////////////////////

- 검색어 북마크바에 추가 위해 localStorage 활용 및 Recoil 추가
- localStorage 실시간 추가 및 삭제 Recoil에서도 update 해주기 위해 Recoil effects_UNSTABLE 사용
- some()을 통한 중복 검사 및 추가 방지
- 북마크 개수 6개 제한 기능 추가

  - **Card Component**
    - Main Component에서 map으로 받은 data를 Recoil에 추가
    - React.memo() 통한 최적화

  - **Detail Component**
    -  Detail/에서 like 버튼 클릭 시 localStorage에 추가하는 기능 구현
    - 한번 더 클릭 시 localStorage에서 제거하는 기능 필요
    - Likes 페이지 활성화, Detail/ 활성화 상태에서 Likes 버튼 추가 시 localStorage 실시간 반영되지 않음
    - Like 페이지 활성화 시점에서 localStorage.getItem 하므로 해당 문제 발생
    - Detail/ 활성화 시 Likes 페이지를 off 해주도록 하자
    - localStorage.getItem을 전역변수로 변경하면서 해결
   
  - **Pagination Component**
    - tanstackQuery에서 queryKey에 Recoil value를 포함시켜야 실시간 update됨


  - **Up Component**
  
  - **Toast Component**
    - 공통 Component로 제작해 어디서도 Import로 사용할 수 있게
    - props로 message를 받을 수 있게
    - useTimeout로 3000ms후 사라지게
    - Typescript로 늘 받지는 않는 props를 optional하게 설정할 수 있을까?

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
  - resetRecoilstate()를 통해 default 값인 []로 돌려주기

## 회고

- Git push 습관들이기
- 생각을 먼저 하고 코드로 옮기는 습관들이기
- 무조건적인 최적화가 아닌 비용과 성능 이점을 저울질해서 하기
- 개선점을 찾아냈을때, 그리고 생각을 코드로 옮길때 성취감이 좋다
- 머리로 코드를 구상하고 그걸 실제로 옮기는 과정이 빨라지면 좋겠다


## 성취

- recoilValue와 setRecoilValue, recoilState의 Render Trigger를 고려하여 사용
- Main Page에서 Scroll event 발생 시 render 발생. 브라우저 스크롤 위치값 저장에 useRef를 사용해 불필요한 Render 개선
- React.memo() 적용으로 Card Component re-render 개선