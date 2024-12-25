# Project - Photos

## 개발환경

- React 18.3.1 + Typescript with Vite
- React Router
- Recoil + Tanstack Query v5
- Axios
- lodash
- SCSS
- Google material icons

## 개발목표

- Composition Component 패턴 숙지 및 적용
- Client state와 Serve State의 효율적인 관리
- 성능 최적화
  - 불필요한 Render 줄이기
  - React.lazy와 suspense를 활용한 Code Splitting
  - Memoization
    - React.memo, useMemo
    - useCallback
  - lodash를 활용한 Throttling과 Debounce
  - useTransition
- Toast popup 제작 및 재사용 가능한 설계
- React Devtools, React Query Tools 사용을 통한 디버깅

## 개발과정

**준비**

- State 정의
  - 전역 상태와 지역 상태 분류
- 공통 컴포넌트 분류
- Router 정리

**Photos Page (Main Page)**

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
    - Up (공통 컴포넌트)
    - Darkmode (공통 컴포넌트) > 프로젝트 구조 변경으로 임시 삭제
  - Footer

**Navigation Component**

- Like Component 토글 위해 RecoilState 구독
- localStorage에서 Like list 가져오기 위해 RecoilValue로 구독
- .length통해 좋아요 리스트 개수 표시

  - **Bookmark Component**
    - 검색어 북마크바에 고정 기능 추가
      - 배열로 localStorage에서 관리 및 Recoil state와 결합
      - localStorage와 Recoil 동기화하기 위해 Recoil effects_UNSTABLE 사용
    - filter() 활용 삭제 기능 추가
    - 북마크 변경 시 1페이지로 돌아가기 기능 추가
  - **Search Component**
    - useRef() 사용 검색창 활성화 시 기본 focus 설정
    - 입력값으로 searchState 업데이트
    - 공백 입력 제한 추가
  - **Like Component**
    - 좋아요 리스트(likes)를 Recoil로 구독
    - likes 배열의 길이 < 1일 경우 안내 문구 표시
    - map으로 Item Component에 props로 전달
    - null일 경우 Narrowing
    - likes 한번에 비우기 기능 추가
      - localStorage를 삭제하면서 recoil도 업데이트 필요
      - useResetRecoilstate()를 통해 default 값인 []로 동시에 업데이트
    - **Item Component**
      - Like Component에서 props로 받은 likes 화면에 출력
      - useSetRecoilState로 likes 배열을 수정할 수 있게 만들어 Detail Component와 연동

**Main Component**

- **Client + Server state 관리**

  - Tanstack Query v5 통해 data를 stale하게 fetch하고 cache 처리
  - 5분의 staleTime 설정: 동일한 데이터 요청 시 cache된 데이터를 반환
  - Recoil과 결합해 검색어(searchState)와 페이지 번호(pageState)를 변경 시 새로운 data를 fetch하도록 설계
  - isPending, isError, error 상태 처리
  - data 받아오기 전 상태 optional chaining으로 처리
  - fetch 된 data를 Card component에 map 해주기

- **검색결과 처리**

  - 검색결과 출력 문구와 검색결과 없는 경우 안내 문구 추가

- **검색어 북마크 기능**

  - 배열로 localStorage에서 관리 및 Recoil state와 결합
  - localStorgae와 Recoil 동기화하기 위해 Recoil effects_UNSTABLE 사용
  - some()을 통한 중복 추가 방지 및 6개 제한 기능 추가
  
    - **Card Component**
  
      - Main Component에서 map으로 props받은 data를 Recoil에 추가
      - React.memo() 통한 최적화
      - 추가한 Recoil state를 Detail Component에서 활용
  
    - **Detail Component**

      - Card Component에서 Recoil 상태에 추가한 data를 구독 후 출력
      - 좋아요(like) 버튼 토글 시 좋아요 리스트(likes) 추가 및 삭제
      - 좋아요 중복 추가 시 삭제
      - 배열로 localStorage에서 관리 및 Recoil state와 결합
      - localStorage와 Recoil 동시에 update 위해 Recoil effects_UNSTABLE 사용
      - Type assertion > Type guard로 개선
      - 'Escape' keyboardEvent로 창 끄기 기능 추가
  
    - **Pagination Component**

      - Main Component에서 data fetch 함께 totalPages :number를 props로 전달받아 pagination의 범위로 설정
      - 한번에 표시할 페이지 번호의 수 10, 현재 페이지가 속한 그룹, 현재 속한 페이지 그룹의 첫 번째와 마지막 페이지 번호를 설정
      - React에서 for문을 사용하는건 바람직하지 않다고 생각되어 Array.from() 사용
      - 각 페이지 번호를 li에 key로 설정
      - 활성화 된 페이지 번호 backgroundColor 변경
      - prevBtn, nextBtn 이전 그룹, 다음 그룹 이동
        - 첫 그룹, 마지막 그룹에서 조건문으로 예외 처리
      - Tanstack Query에서 queryKey에 Recoil value를 포함시켜야 해당 value가 update될때 실시간으로 fetch됨
  
    - **Up Component**
      - window.scrollTo() 활용
      - lodash를 활용한 Throttling 사용으로 scrollEvent가 300ms에 한번만 발생하게 설정하여 불필요한 render 개선
     
    - **Toast Component**
      - 공통 컴포넌트로 재사용 가능한 설계
      - props로 띄우고자하는 메세지 설정
      - props로 useTimeout통해 사라지게 할 시간 설정
      - props로 Toast popup 종류 및 색상, 아이콘, 성공 실패 메세지 설정
        - 예시> 0: green, check_circle, 추가완료 1: red, download_done, 삭제 완료
      - Optional Props 설정

## 개발이슈

components/main/Main.tsx

- Tanstack Query에서 isPending일때 props가 null로 넘어가는 경우
- Narrowing 필요
- 부모 컴포넌트에서 data가 로딩 되었을때만 보내주는 로직으로 변경
- 자식 컴포넌트에서 optional chaining
- 자식 컴포넌트에서 받은 data가 null일 경우 return 하게 변경
- error code를 추려냈고 원인도 여전히 같은것으로 보이나 위의 방법들로 해결되지 않음
- map해주고 있는 배열에 이미 null이 들어가 있는걸 발견, 삭제 후 해결
- 에러에서 배우는것이 많아 기분이 아주 산뜻

components/navigation/components/likes/Likes.tsx

- like/에서 like 한번에 비우기 기능 가끔 작동하지 않는 버그
- localStorage값이 비워진 직후 Recoil update 바로 반영되지 않는 것으로 보임
- 비우기가 반영되지 않은 상태의 Recoil value를 다시 읽어 직전 localStorage로 계속 고정되는 것으로 보임
- 직접 localstorage.deleteItem()를 실행
- 직접 Recoil update 해주기
- default 값인 []로 돌려주는 resetRecoilstate()를 통해 개선

## 성능개선

- recoilValue와 setRecoilValue, recoilState의 Render Trigger를 고려하여 사용
- React.memo() 적용으로 Card Component re-render 개선
- lodash를 활용한 Throttling 사용으로 scrollEvent가 300ms에 한번만 발생하게 설정하여 불필요한 render 개선