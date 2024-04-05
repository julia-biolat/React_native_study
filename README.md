# React_native_study

React Native 동작 원리: Component(JS) -> React Native -> Bridge -> ios or android

장점:
1) 하나의 코드로 관리, 러닝커브 높은 react 사용
2) 코드 푸시로 빠른 업데이트 -> 비용절감
3) Fast Refresh
4) 오픈소스 플랫폼

단점:
1) 일부 기능 Native 접근 필요
2) 오픈소스, 라이브러리 의존도
3) 성능 (안드로이드에서 성능 차이가 좀 있음)
4) 잦은 업데이트

- Expo CLI : React Native 앱을 쉽고 빠르게 구축하는 종합선물세트
장점
1) 기본 제공되는 API, 라이브러리 -> 초반 앱 개발 단순화
2) Expo Go 어플만 있으면 기기 상관없이 프로젝트 실행 가능

단점
1) 추가 네이티브 모듈 사용 불가

- React Native Cli : 고도화된 기능 개발 및 높은 개발 자유도를 위해 선택함

장점
1) 네이티브 모듈 연경 가능 -> 다양한 라이브러리 사용으로 높은 자유도

단점
1) 기본 제공되는 라이브러리가 적음, 필요한 것이 있다면 직접 설치
2) Mac 개발 필수, Native 폴더 구조에 대한 기본 지식 필요


--------------- 2주차 ------------------

React Navigation이란.?
React-Native에서 사용하는 화면 이동을 위한 라이브러리
Stack, BottomTab, Drawer등 앱 개발시 많이 사용하는 화면 이동에 대해 각 플랫폼 환경에 맞도록 쉽게 변환 해 주도록 되어있음

구성요소
Navigator + Screen
Navigator : Navigation이 어떤 구조로 되어있는지 나타내는 컴포넌트

What is Stack Navigator?
Stack과 동일한 자료 구조로 화면을 그리는 Navigator
제일 마지막에 들어온 화면이 제일 먼저 없어짐
React-Navigation에서 필요한 애니메이션등은 구현 됨
Stack Navigator : JS로 작성, 자유도 높음
Native Stack Navigator : Native로 작성 자유도 낮음

What is Drawer Navigator?
슬라이드를 통해서 이동할 Screen들을 나타내는 Navigator
Drawer에 대한 open, close, toggle등 기본적인 기능들을 함수로 제공
Gmail, LinkedIn등에서 사용

What is Tab Navigator?
가장 흔하게 앱에서 볼 수 있는 UI
기본적으로 하단에 탭의 형태로 제공
Material UI를 통해서 제공하는 별도 UI도 제공(Material Bottom Tabs Navigator, Material Top Tabs Navigator)


Glossary of terms (Navigator)
화면을 어떻게 그려줄지 결정해주는 리액트 컴포넌트 (aka 책 겉표지)
Navigation Container : 전체 Navigator를 관리해주는 역활 

Glossary of terms (Router)
Navigation의 상태나 동작을 제어해주는 함수의 집합.
주로 화면간 데이터 전달을 위해 사용


Glossary of terms (Screen)
 화면을 그려주는 컴포넌트 (aka. 책에서 종이 한장)

Glossary of terms (Navigation Prop, Route Prop)
- Navigation Prop : 화면 이동에 대한 함수들을 공통으로 제공
- Route Prop : 파라미터를 받아오거나 어떤 화면인지 이름을 알 수 있는 값들을 제공 해주는 역활 

Glossary of terms (Navigation State)
현재 React Navigation이 어떤 상태인지를 알 수 있는 값
주로 Stack Navigator 이전 Stack에 어떤 Screen이 있는지 찾기 위해 사용

Glossary of terms (Route)
Screen의 Name, Key, Param등을 저장하는 개념
어떤 화면인지 식별 하기 위해 사용.
Navigation State 하위에 Routes라는 배열에서 찾을수 있음.


Stack Navigator Screen options (presentation)
Stack Navigator에서 화면 이동 애니메이션에 대한 설정 옵션
Card : 오른쪽에서 왼쪽으로 이동하는 애니메이션
Modal : 아래에서 위로 이동하는 애니메이션 

Tab Navigator Screen options (backBehavior)
Android에서 H/W Back Button을 눌렀을때 어떻게 이동 하는지 지정
firstRoute : 선언상 제일 처음에 있는 탭으로 이동
initialRoute : 최초 지정한 탭으로 이동
order : 탭을 선언한 순으로 이동
history : 이동한 히스토리 역순으로 이동

Nesting Navigator란 ?
Navigator의 Screen을 Component가 아닌 다른 Navigator로 선언하는 것.
주로, Presentation을 다르게 선언하거나, 조건에 따라 Navigator의 분기가 필요할때 사용
