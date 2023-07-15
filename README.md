## 1. Link
* [To Do List App](https://wink68.github.io/JS_Chrome_App/)

<br>

## 2. About To Do List App
### 1) 프로젝트 소개
* 주제 : To Do List

* 기간 : 23.04.28 ~ 23.05.08

<br>

> 이 프로젝트는 노마드코더 바닐라JS 챌린지를 하면서 진행한 개인 프로젝트입니다.   
> 챌린지에서 필수적으로 요구한 기능인 실시간 시계와 localStorage를 활용한 로그인 및 To Do List, 랜덤 배경 이미지, 현재 날씨와 위치를 구현하였고, 추가적으로 랜덤 명언과 날짜, 뮤직 플레이어, 구글 검색 기능을 추가했습니다. 또한, 페이지 이동 없이 hidden만으로 메인페이지로 이동하여 다양한 기능들을 사용할 수 있도록 구성했습니다. 게다가 사용자에게 시각적으로 매력적인 페이지를 제공하기 위해 360도 회전하는 큐브로 접속 페이지를 장식하였고, 기능을 사용하지 않을 때는 숨길 수 있도록 메뉴 버튼도 넣었습니다.

<br>

### 2) 기술 스택
* HTML

* CSS

* JavaScript

* OpenWeatherMap API

<br>

## 3. 서비스 기능
### 1) 접속 페이지
* 접속창

  * 유저 이름을 입력할 시 접속이 되며, localStorage에 유저 이름 저장
  
  * hidden을 활용하여 접속 페이지와 메인페이지를 구분

* 큐브

  * 360도 회전하는 애니메이션 적용
  
  * 큐브의 각 면을 클릭할 시, 회전하는 접속창의 테두리 색깔 변경

| **접속 페이지** |
|:--:|
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/57b1308b-dfeb-4f66-a6f4-e262aba2f9b5" alt="접속페이지"> |
  
<br>

### 2) 메인페이지
* 메인 페이지

  * 입력한 유저 이름 표시
  
  * 오늘 날짜와 실시간 시계 기능

  * 페이지 접속시 랜덤으로 배경이미지와 명언 제공
  
  * 오른쪽 위 버튼을 누르면, 원하는 색깔로 배경색 변경 가능
  
  * 메뉴 버튼을 클릭 시, 양쪽 메뉴를 펼치거나 숨기기 가능
  
  * 왼쪽 아래 나가기 버튼을 클릭 시, localStorage에 저장된 유저 이름과 to do list가 모두 리셋되고, 접속 페이지로 이동

| **메뉴바가 숨겨졌을 때 메인페이지** |
|:--:|
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/d10f36fd-ca7e-4493-8bcb-5e097652d7b2" alt="메뉴바가 없는 메인페이지"> |

<br>

| **5가지 색상의 메인페이지** |
|:--:|
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/16321a16-946c-4137-9b19-bb03db5587c8" alt="메인페이지1"> |
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/6806a3e9-582f-4f6e-9547-ece5a916341e" alt="메인페이지2"> |
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/4bd863c8-89ba-458c-9f10-a4db63988055" alt="메인페이지3"> |
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/a75e1f02-555c-4694-8010-13d88a35bd63" alt="메인페이지4"> |
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/df3e70d6-2452-498c-94c1-c862efdee6a5" alt="메인페이지5"> |

<br>

### 3) To Do List
* To Do List

  * 입력창에 할 일을 입력하고 추가 버튼을 클릭하면 To Do List 작성 가능
  
  * 입력창이 비어있는 상태에서 추가 불가
  
  * to do list 목록은 localStorage에 저장

| **To Do List** |
|:--:|
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/001b3b0d-aa34-4343-9c15-65a86ce939a6" alt="To Do List"> |

<br>

### 4) 뮤직 플레이어 & 날씨 & 구글 검색

* 뮤직 플레이어

  * 13곡의 노래 감상 가능
  
  * 버튼을 클릭해 다른 노래로 변경 가능
  
  * 무한 재생

* 날씨

  * 현재 위치를 allow하면 현재 날씨와 기온, 지역명 표시
  
  * OpenWeatherMap API 활용
  
* 구글 검색

  * 입력창에 검색어를 입력하면, 구글에서 검색 가능

| **뮤직 플레이어 & 날씨 & 구글 검색** |
|:--:|
| <img src="https://github.com/wink68/JS_Chome_App/assets/108077414/99f0f45b-04f6-4983-96b8-61beeb925cab" alt="뮤직플레이어 & 날씨 & 검색"> |

<br>

## Plan
* 달력 및 to do list에 날짜 기능 추가

* 반응형 UI (모바일 최적화)
