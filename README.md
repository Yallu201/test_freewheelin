# 프리윌린 과제(2021.05.22)

### 목표
    퍼블리싱 및 상태관리 요구사항에 맞춰 React CRA 개발
### 추가 적용 라이브러리
    axios                               # 비동기 호출 라이브러리
    redux                               # 상태관리용 라이브러리
    redux-actions                       # 액션함수 및 reducer 생성 라이브러리
    react-redux                         # 리액트에 redux 적용을 위한 라이브러리
    styled-components                   # 컴포넌트 단위 css 개발을 위한 라이브러리
### 폴더 구조
    .
    ├── public                          # 정적파일 저장 폴더
    │     └── data                      # 제공된 JSON 파일 저장 폴더
    ├── src                             # 개발 리소스 관리 폴더
    │     ├── components                # 화면에 보여지는 컴포넌트 관리 (with styled-components)
    │     ├── containers                # reducer 액션함수를 다루는 컴포넌트 관리 폴더
    │     └── modules                   # reducer 관리 폴더
    ├── .prettierrc                     # 코드 컨벤션 유지 파일
    ├── jsconfig.json                   # 프로젝트 절대경로 지정 파일 (src)
    └── README.md
### 구동방법
    git clone https://github.com/Yallu201/test_freewheelin.git
    yarn install
    yarn start
### 구현전략

1. 퍼블리싱
    * Figma 디자인 가이드를 준수하였습니다.
    * 반응형 웹 구현 및 레이아웃 설계를 css내 `flexbox`를 활용하였습니다.
    * 컴포넌트 단위의 마크업을 위하여 `styled-components` 라이브러리를 활용하였습니다.
2. 컴포넌트 구현
    * 화면은 크게 `ProblemSection`, `SimilarSection` 나누어 개발 하였습니다.
    * `ProblemSection` 과 `SimilarSection`의 공통 구현부분을 찾아서 구현하였습니다.
      * `Header`, `Button` 컴포넌트
    * `문제` 및 `유사유형` 관련 컴포넌트는 공통으로 구현은 가능하였으나,   
유지보수성 및 코드 가독성 향상을 위해 따로 구현하였습니다.  
      * `Problem`, `Similar`
      * `ProblemList`, `SimilarList`
      * `ProblemSection`, `SimilarSection`
      * `ProblemContainer`, `SimilarContainer`, 
      * `ProblemSectionContainer`, `SimilarSectionContainer`
4. 상태관리  
    * `문제`(`fe-problems.json`) 와 `유사유형`(`fe-similars.json`) 데이터는 `public/src` 경로에 저장합니다.
    * 위 데이터의 호출 시점은 아래와 같으며, `axios`를 활용하여 비동기 호출합니다.
      * `src/containers/ProblemSectionContainer.jsx`의 `componentMounted` 시점
      * `유사문항` 버튼 클릭 시
    * 데이터의 호출은 redux없이 가능하지만, 다른 버튼 클릭 이벤트는 컴포넌트 계층 이동이 많은 이슈가 있습니다.
    * 따라서 호출 이후 `problem` 리듀서 내부에 각각 `problems`, `similar`로 저장합니다.
    * 이후 action 함수를 통하여 화면내 버튼의 이벤트를 처리합니다.
    * 프로젝트 내 정의한 액션은 다음과 같습니다.  
      * `SET_PROBLEMS`: `ProblemSectionContainer` 최초 랜더링 시 `fe-problems.json` 호출
      * `SET_SIMILAR_PROBLEMS`: `유사문항` 버튼 클릭 시 `fe-similars.json` 호출
      * `ACTIVE_PROBLEM`: `유사문항` 버튼 클릭 시 문제 `선택`
      * `DELETE_PROBLEM`:  `삭제` 버튼 클릭 시 좌측 목록에서 `삭제`
      * `MOVE_SIMILAR_PROBLEM`: `추가` 버튼 클릭 시 선택한 우측 목록 문제를 좌측 목록으로 `이동`
      * `REPLACE_SIMILAR_WITH_PROBLEM`: `교체` 버튼 클릭 시 우측 및 좌측 선택한 문제 위치 `교체`

### 이슈
  * 주어진 데이터 객체의 `id`로 컴포넌트 리스트의 `key`값을 할당하는경우 우측 유사문항 목록에 `fe-similars.json`를 지속해서 갱신하며 버튼을 작동하면, `key`값에 중복이 발생합니다.
  * 위 이슈로 인하여 버튼 클릭 시 좌측 문제 번호가 의도한대로 랜더링되지 않는 현상이 있습니다.
  * 우선 배열의 `index`와 객체 `id`의 조합으로 간단한 중복은 방지처리 하였습니다.
