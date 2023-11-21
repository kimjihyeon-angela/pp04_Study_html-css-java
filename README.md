# pp04_Study_html-css-javaScript
HTML/CSS, JavaScript에 대한 부족한 지식을 채우기 위한 공부용

## Class 1 html, css, javascript에 대한 기초

### Day 01
- html
    - Hyper Text Markup Language
    - 네트워크가 연결된 웹페이지에서 문서를 작성하고, 읽고, 공유하기 위해 만들어진 체계로 구조를 담당 
        => 공간을 만들고 그 공간을 무엇으로 채울지 결정하는 것
    - tag의 집합 
        - 태그 - 고유한 기능을 가진 약속된 명령어 
        - <시작 태그> 내용 </종료 태그> => 요소
          
              ex) <h1> Welcome to My Place </h1>
        - 자주 사용되는 tag
     
              <strong> : 굵게
              <u> : 밑줄
              <i> : 기울게
        - 빈태그
            - 내용, 종료태그 없이 시작태그만 작성하면 됨
              
                  <br> : 줄바꿈 태그
                  <hr> : 수평선 태그
        - 특정 기능이 있는 태그
          
              <button> 버튼 </button>
              <textarea> 입력창 </textarea>
              <img src="image.png" />
              <video muted = "muted" loop = "loop">
                <source src = "video.mp4">
              </video>
    - HTML의 핵심
        - 태그의 특징 : Inline, Block
        - 종속태그
            - 다른 태그와 함께 상호작용해야만 제대로 작동하는 태그 = 혼자서 작동할 수 없는 태그
            - ex) 선택박스태그, 목록태그 표태그
            - 선택박스태그 

                  <select> 
                    <option>태그를 사용해야 함 
                  </select>
            - 목록태그

                  <ol>
                    <li> li태그를 ol태그로 감싸면</li>
                    <li> 번호가 생김 </li>
                    <li> 따로 넘버링 하지 않아도 자동으로 번호가 붙음 </li>
                  </ol>
                  
                  <ul>
                    <li> li태그를 ul로 감싸면 </li>
                    <li> 번호가 아닌 기호가 생김 </li>
                    <li> 목록태그 </li>
                        <ul>
                            <li> ol </li>
                            <li> ul </li>
                            <li> dl </li>
                        </ul>
                  </ul>
              
                <ol>
                    <li> li태그를 ol태그로 감싸면</li>
                    <li> 번호가 생김 </li>
                    <li> 따로 넘버링 하지 않아도 자동으로 번호가 붙음 </li>
                </ol> <br> <hr> <br>
                <ul>
                   <li> li태그를 ul로 감싸면 </li>
                   <li> 번호가 아닌 기호가 생김 </li>
                   <li> 목록태그 </li>
                       <ul>
                           <li> ol </li>
                           <li> ul </li>
                           <li> dl </li>
                       </ul>
                </ul>
 
                  
        - HTML 문서 구조
            - 문서마다 양식이 모두 다르면 해석하는게 복잡해짐 => 최소한의 문서 구조를 통해 체계화
            - 검색엔진을 위한 <head>영역 + 브라우저에서 보여지는 <body> 영역
            - <head>영역
                - title, meta 태그
                - title : 브라우저 상단
         
                <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/head_title.jpg" width="600"/>

                [head - title]
                                   
                - meta : 인터넷에 검색 했을 때 밑에 설명 부분
             
                <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/head_meta.jpg" width="600"/>

                [head - meta]
                  
            - <body>영역

- css : 시각
- JavaScript : 기능

### Day 02
- css
    - HTML의 색, 크기, 정렬 등을 변경하여 꾸며주는 언어
    - 기본문법
        - 단일 속성 지정
            - 선택자 {속성 : 값;}
        - 다중 속성 지정
            - 선택자{
                속성 : 값;
                속성 : 값;
                속성 : 값;
                속성 : 값;
               }
    - 사용방법
        - html 태그 속성에 입력
            - 태그에 CSS 속성이 바로 기록되어 있어 별다른 지정이나 연결 필요 x
            
                    <a style="background-color: #ffee55; color: #36e52k;">
        - style 태그에 입력
            - 태그와 CSS 속성이 html 내에서 분리되어 있어 어떤 태그에 CSS 속성을 적용할 지 연결해 줘야 함

                    <head>
                        <style>
                            .listup{
                                color: red;
                                border:1px solid gray;
                            }
                        </style>
                    </head>

                    <body>
                        <div class="starter"></div>
                        <div class="listup"></div>
                        <div class="closer"></div>
                    </body>
        - css 파일 만들어 불러오기 (실무에서 주로 사용하는 방법)
            - 태그와 CSS 속성이 파일로 분리되어 있어 어떤 태그에 CSS 속성을 적용할지 연결해 줘야 함

                    <head>
                        <link href="./index.css" rel="stylesheet">
                    </head>

                    <body>
                        <div class="starter"></div>
                        <div class="listup"></div>
                        <div class="closer"></div>
                    </body>

                    index.css(파일)
                    .listup{
                        color: red;
                        border:1px solid gray;
                    }
    - CSS 선택자
        - 전체 선택자 : *
        - 태그 선택자 : 태그 이름 ex) div
        - class 선택자(중복 가능) : . + class 이름 ex) .container
        - id 선택자(중복 불가) : # + ID ex) #userInfo

    - 박스모델
        - html 태그들은 모두 박스모델로 이루어짐
        - margin : 박스의 바깥 여백
        - border : 박스의 기준이 되는 바깥 테두리
        - padding : 박스의 안쪽 여백
        - contents : 박스의 내용

    - 박스모델 화면 표시 방법
        - border box
            - 크기 중심이 바깥 테두기(border)
            - 박스 크기는 디자이너가 준 화면 크기와 일치, 안에 들어가는 contents의 크기가 변함
        - content box
            - 크기 중심이 내용(contents)
            - contents 가 고정되고 border의 크기가 변함
        - 실무에서는 디자이너에게 받은 화면의 크기와 일치시켜야 하기 때문에 border-box 사용

    - 정렬    
        - flex
            - 핵심 : 여러태그를 하나로 묶어서 정렬
            - 정렬기준 : 부모박스
        - position
            - 박스를 개별적으로 어디에 위치시킬것인지 지정해줌
            - 옵션 : absolute(절대위치), relative(부모박스 기준으로 상대 위치), fixed(화면 기준으로 절대 위치), static(기본설정)
        - grid

### Day 03
- 회원가입 화면 만들어 보기 (08_signup)

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/signup1.jpg" width="600"/>

    [회원가입 화면]
    
    - br을 활용한 회원가입화면이기 때문에 다시 도전해보기 

- 회원가입화면 만들어 보기 (09_signup.html + 09_signup.css)

- 싸이월드 화면 만들어보기

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/cyworld1.jpg" width="600"/>

    [싸이월드 화면]

    - background 설정 방법
    - outerbox 설정
    - 화면을 만들때
        - 하나하나 div로 다 나눠서 class 지정해줘야함
        - br 사용보다 div로 나눠 css에서 디자인해주기

### Day 04
- html
    - tag : 약속된 명령어
    - 브라우저 화면의 뼈대
- css
    - html로 만들어진 뼈대를 꾸미는 부분
- javascript
    - html과 css에서 다루지 못하는 모든 영역
    - 변수와 상수 : 데이터를 담는 공간(상자)
        - 변수 : 어떤 관계나 범위 안에서 여러가지 값으로 변할 수 있는 수
        - 상수 : 변할 수 없는 수
        - 선언
            - let (변수명) 
            - var * 거의 사용 x
            - const * 상수 선언
            - 변수명 입력시 주로 camelCase 사용
                - camelCase
                    - ex) let myMoney
                - snake_case
                    - ex) my_money
        - 할당
            - 변수명 = 데이터
        - 선언 + 할당
            - let 변수명 = 데이터
    - 배열
        - 빈배열 []
        - 숫자 배열 [1,2,3]
        - 문자열배열 ["가", "나", "다"]
        - 자주 사용되는 기능(데이터 변환, 제어할 수 있게 해주는 것) => 명령어 뒤에 ()가 붙어 있는 것
            - array.length
            - array[인덱스]
            - array.push() -> 맨 뒤 값 추가
            - array.pop()  -> 맨 뒤 값 삭제
            - array.sort()
            - array.includes(값) -> 배열 데이터 확인
            - array.concat(array2) -> 배열 2개 연결
            - array.join() -> 배열을 문자로 만들기
            - array.slice() -> 배열 분리
            - array.filter() -> 배열에서 원하는 요소 뽑기
            - array.map() -> 배열의 모든 요소 변경
        
- chrome 개발자 도구
    - f12
    - 웹사이트를 전반적으로 분석하고 시험해 볼 수 있도록 도와주는 도구
    - 요소(elements)
        - HTML을 분석하고 수정해볼 수 있는 도구
    - 콘솔(console)
        - 현재 로딩된 페이지에서 자바스크립트를 시험하거나 로그/오류 메시지 등을 확인할 수 있는 도구
    - 소스(Resources)
        - 현재 로딩된 페이지에서 사용된 리소스를 열람할 수 있는 도구
    - 네트워크(Networks)
        - 서버와의 통신 내역을 보여주는 도구
    - 성능 (Audits)
        - 웹 어플리케이션의 성능을 향상시킬 방법을 컨설팅해주는 도구

- 회원가입 화면 만들어 보기 (12_signup)
    - css 연결 안하고 스타일 적용 안된다고 하고 있었음
    - link, rel 제대로 연결해주기

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/signup2.jpg" width="600"/>

    [회원가입 화면]

### Day 05
- 객체
    - 중괄호 안에 데이터를 넣고 쉼표로 각 데이터를 구분함

        const profile = {
            name: "홍길동",
            age: 50,
            height: 164,
        }

    - key - value Pair
        - key = name, age, height
        - value(값) = 홍길동, 50, 164
        - 값은 비어있을 수 있음
    - 빈객체, 숫자값, 문자열 값을 넣은 객체를 생성할 수 있음
    - 객체에 담긴 값을 가져오는 방법
        - 변수명.key (주로사용)
        - 변수명["key"]
        
                const profile = {
                    name: "홍길동",
                    age : 49,
                    height: ,
                    school: "코드중학교",
                }
                profile.name => "홍길동"
                profile["school"] => "코드중학교"

- 배열안에 객체를 담을 수 있음

        let students=[
            {name:"길동", pet:"강아지", house:"구로구"},
            {name:"철수", pet:"고양이", house:"관악구"},
            {name:"다희", pet:"미어캣", house:"강서구"}
        ]

        students[0]
        => {name:"길동", pet:"강아지", house:"구로구"}

        students[0].name => "길동"

- 데이터타입과 연산자
    - 데이터타입
        - string : 영문, 한글 등 문자를 말함 " "
        - number : 숫자
        - boolean : 참, 거짓을 말함
        - object : { }
            - 배열 = 객체의 일부분으로 간주하고 있음
        - null : 아무것도 없음을 직접 입력함
        - undefined : 정의되지 않음을 의미함 (값이 없음을 컴퓨터가 알려주는 것)
    - 연산자
        - 산술연산자
            - '+' (숫자 더하기도 가능하지만 문자열 더하기도 가능)
                - 숫자 + 문자열 => 문자열
            - '-'
            - '*'
            - / : ex) 33 / 2 => 16
            - % : 나머지 ex) 33 % 2 => 1
        - 비교연산자
            - <
            - `>
            - <=
            - `>=
            - 엄격한 동치 연산자
                - ===
                - !==
                - 데이터 타입과 값까지 같아야 True
            - 느슨한 동치 연산자
                - ==
                - !=
                - 타입 비교 없이 값만 같으면 True
        - 논리연산자
            - && : and
            - || : or
            - ! : not -> boolean을 반전시킴

- 조건문
    - 특정 조건을 만족하면 실행
    - 핵심 : 시작점과 끝점이 존재
    - 조건문 : 컴퓨터가 조건에 맞는지 true / false로 판단하여 판단을 기반으로 각각 다른 명령을 실행할 수 있도록 하는 것
    - 비교 연산자와 함께 쓰임
    - 조건이 맞다면 A 실행(시작점), 아니라면 B 실행(끝점)

            if(조건){
                A실행
            }
            else{
                B실행
            }

    - 여러개의 조건 넣기도 가능

            if (A!==B){
                명령문 1
            } else if ((C===D) && (E === F)){
                명령문 2
            } else {
                명령문 3
            }

            => A!== B 라면 명령문1 실행 / 아닌 경우 else if 조건 검색
            A===B, (C===D) && (E === F) 인 경우 명령문 2실행 / 아닌경우 else 실행
        
- 반복문
    - 같은 행위를 반복하는 것
    - 핵심 : 몇 번 반복할 것인가
    
            for (초기식; 조건식; 증감문){
                반복해서 실행할 내용
            }

            for (let i = 0; i < 5; i + i +1;) {
                console.log("hello")
            }

            => 반복 (i를 0부터 시작; i가 5보다 작을때까지만; 한번 반복할 때마다 i에 1을 더함;){
                콘솔에 로그를 남김("안녕")
            }
    - 초기식 : 반복문의 시작점을 만들어 주는 것
        - let i = 0
        - i의 시작점 0 을 알려주는 것임
        - const 사용 불가 => i = i + 1이 불가능 하기 때문
    - 조건식 : 반복문의 끝점을 알려주는 것
        - i < 5
    - 증감문 : 카운트를 어떻게 할 것인가
        - i = i + 1 / i++(이렇게 써도 됨)
    - 변수명은 꼭 i가 아니어도 상관없음
    - 특정조건 만족 시
        - 조건식을 통한 정상종료 이전에도 종료(break)가능
        - 명령문을 실행하지 않고 다음 반복으로 건너뛰기(continue) 가능

- 수학객체
    - 자바스크립트의 수학 기능을 사용하는 명령어
    - 최대값 구하기 : Math.max()
    - 최소값 구하기 : Math.min()
    - 0 ~ 1 랜덤 수 생성 : Math.random()
    - 반올림 : Math.round()
    - 올림 : Math.ceil()
    - 버림 : Math.floor()

- DOM
    - Document Object Model 의 줄임말
    - html => tag로 구성 => tag : 약속된 명령어
    - 웹브라우저가 정적인 웹페이지를 변경하거나 조작하기 위해 HTML 파일을 자바스크립트 객체로 만들어줌
    - html과 javascript가 서로 상호작용하며 동적인 작동 가능하게 만듦

            document.getElementByld("tagID").InnerText

            => HTML 파일에서 "tgID"라는 id를 가진 태그를 선택해서 제어함


- 싸이월드 화면 만들어보기

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/cyworld2.jpg" width="600"/>

    [싸이월드 화면]

    - iframe 태그 활용하여 다른 html과 css 연결시킴
    - iframe 태그를 이용하여 다른 화면을 띄울 수 있음

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/cyworld3.jpg" width="600"/>

    [싸이월드 화면]

### Day 06
- 함수
    - 우리가 직접 만드는 기능
    
            function hello(){
                alert("안녕하세요")
            }
    - function 함수이름(매개변수) {함수를 호출했을 때 실행할 명령문}
    - 매개변수: Optional (함수안에서 사용해야함)
    - 데이터 반환 : return문
    - return문 
        - Optional
        - 결과값이 반환되어 나옴 (콘솔로그의 경우 결과값 반환되어 나오지 않음, 실제로 작동하는 것 x)
    
                function hello(name){
                    alert(name+"님 안녕하세요")
                }

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/function1.jpg" width="600"/>

    [function hello(name)의 결과화면]

    - 함수 작성방법
        - 함수 선언식

                    function hello(name){
                        alert(name + "님 안녕하세요")
                    }

        - 함수 표현식
        
                    const hello = function(name){
                        alert(name + "님 안녕하세요")
                    }

        - 화살표 함수

                    const hello = (name) => {
                        alert(name + "님 안녕하세요")
                    }
        
        - 작성방법이 모두 다르지만 실행방법은 모두 동일함

- 내장함수
    - 자주 사용되는 함수를 자바스크립트에 내장하여 편리하게 이용할 수 있도록 한 것
    - 많이 사용되는 내장 함수
        - 시간 지연 함수 (시간 입력 시 ms 단위로 입력)

                setTmeout(func, time)

            <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/setTimeout.gif" width="400"/>

        - 시간 반복 함수 (시간 입력 시 ms 단위로 입력)

                setInterval(func, time)

            <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/setInternal.gif" width="400"/>
            
            [1초가 지났습니다가 계속 출력됨]

            <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/timer.gif" width="400"/>
            
            [조건문을 활용하여 10초에서 0초까지 출력되는 타이머 만들기]

- 싸이월드 만들기
    - 추억의 BGM 화면 만들기
    - 미완성

### Day 07
- 싸이월드 만들기
    - Day 06에서 미완성한 추억의 BGM 화면 만들기
    - 사진 다시 다운받은 후 이름, 가수 넣어줌
    - 테이블 만들기

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/cyworld4.jpg" width="600"/>

    [싸이월드 화면]

### Day 08
- setInterval, clearInterval에 대한 공부가 조금 더 필요함
- 이벤트 감지
    - ex1) 회원가입 화면에서 이메일, 비밀번호, 비밀번호 확인을 다 입력해야 회원가입 버튼 활성화되는 것
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/event1.gif" width="600"/>

    - ex2) 전화번호 입력 시 자동으로 다음 탭으로 넘어가지는 것
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/event2.gif" width="600"/>

- 싸이월드 만들기 마무리
    - 그동안 만들었던 화면들 해당 버튼 클릭 시 이동할 수있도록 만듦

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/cyworld5.gif" width="600"/>

### Day 09
- Final Project

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/finalProject1.jpg" width="400"/>
   
    [디자인 화면]

### Day 10
- Final Project

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/finalProject.gif" width="600"/>
   
    [구동 화면]

<hr>

## Class 02 CSS 기초

### Day 01
- 웹 브라우저란?
    - 인터넷 통신을 할 수 있는 프로그램
    - ex) 크롬, 파이어폭스, 사파리, 엣지 등등

- CSS란?
    - Cascading Style Sheet
    - 웹 페이지의 스타일 & 레이아웃을 담당하는 문서

- CSS 기본용법

        <div> DIV 입니다.</div>
        [HTML 소스]

        div{
            background: red;
        }
        [CSS소스]

    - 선택자 { 선언 = 속성(property) : 속성값(property value) }

- CSS 적용 방식 : 인라인 방식, style태그 이용, 분리된 css 파일 연결
    - 인라인(in-line)방식
        - 속성을 적용할 HTML 태그에 직접 CSS를 입력해주는 방식

                <div style="background-color: red;">DIV입니다.</div>
        - css가 길어질 수록 가독성이 떨어지고, 유지보수가 어렵다는 단점이 있음
        - 실무에서 거의 사용 x

    - style 태그 이용
        - html 문서 head 내에 style 태그를 사용함

                <!DOCTYPE html>
                <html lang="ko">

                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE-edge">
                    <title> 1일차 수업</title>
                    <style>
                        div{
                            background-color: red;
                        }
                    </style>
                </head>

                <body>
                    <div> DIV 입니다. </div>
                </body>
                </html>

    - 분리된 CSS파일 연결
        - HTML 파일, CSS파일 따로 만든뒤 link 태그를 이용해 연결해주는 방식

                <link rel="stylesheet" href="./index.css">

        - rel : 해당 태그로 연결시켜줄 파일과 어떤 관계인지 지정 (relation)
        - href: 연결할 파일의 경로를 지정
        - 확장자명에 .html, .css를 꼭 작성해줘야함
        - 실무에서 가장 많이 활용하는 방식
        - 유지보수가 편리하고 소스코드를 관리하기 좋음

- 선택자
    - 태그 선택자
    
            tag{
                property: value
            }

    [예시]
    
            <div>
                <h1>제목입니다.</h1>
                <p>내용입니다.</p>
            </div>

            div{
                background-color: #f9f9f9;
            }

            h1{
                font-size: 20px;
                color: red;
            }

            p{
                color: blue;
            }
    
    - id 선택자

            #id{
                property: value;
            }

    [예시]

            <body> 
                <div>
                    <h1 id="title">제목입니다</h1>
                    <p>내용입니다.</p>
                </div>
            </body>

            #title{
                font-size: 28px;
                color: red;
            }
        
    - class 선택자
        - 여러개의 요소에 중복 지정 가능

                .class{
                    property: value
                }

    [예시]

                <body>      
                    <div>
                        <h1 id="title">제목입니다.</h1>
                        <p class="contents">내용입니다.</p>
                    </div>
                </body>

                .contents{
                    color: blue;
                }

    - 자손 선택자

            <body>      
                <div>
                    <h1 id="title">제목입니다.</h1>
                    <p class="contents">내용입니다.</p>
                </div>
            </body>
        
        - div : 부모요소
        - h1, p : 자식요소1, 2

            .parent .child{
                property: value
            }
    
    [예시]

            <body>
                <h1 class="title">전체 제목입니다.</h1>
                <div class="box1">
                    <h1 class="title">제목입니다.</h1>
                    <p class="contents">내용입니다.</p>
                </div>
                <div class="box2">
                    <p class="text1">글 내용입니다. 1</p>
                    <p class="text2">글 내용입니다. 2</p>
                </div>
            </body>

            .box1 .title{
                color: yellow;
            }

            .box2 .text1{
                color: green
            }

    - 다중선택자
        - title 클래스와, headline아이디를 가진 경우

            .class#id{
                property: value;
            }

    [예시]

            <body>
                <h1 class="title">전체 제목입니다.</h1>
                <div class="box1">
                    <h1 class="title" id="headline">제목입니다.</h1>
                    <p class="contents">내용입니다.</p>
                </div>
                <div class="box2">
                    <p class="text1">글 내용입니다. 1</p>
                    <p class="text2">글 내용입니다. 2</p>
                </div>
            </body>

            .title#headline{
                color: violet
            }

### Day 02
- 에밋?
    - h1 태그 입력 방법
        - h1 입력 후 탭 선택 시 자동 완성 됨

                <h1> </h1>
    - title이라는 class, headline이라는 id를 가진 h1 태그를 생성하고 싶을 때
        - h1.title#headline 입력 후 탭 클릭 시 자동 완성 됨

                <h1 class="title" id="headline"></h1>
            

    - contents라는 class를 가진 p 태그 생성 시
        - p.contents 입력 후 탭 클릭 시 자동 완성 됨

                <p class="contents">내용입니다.</p>

- 폰트 기본 스타일
    - font 기본 속성
        - font-size : 글자 사이즈
        - font-weight : 글자 두께
        - font-style : 글자 기울임
        - text-decoration: 글자 꾸밈(밑줄, 취소선 등)
        - color: 글자 색

- 박스모델
    - 웹브라우저에서 HTML Element(요소)를 구성할 때 각각의 요소가 차지하는 박스 공간을 정의한 모델
    - 모든 HTML 요소는 박스 형태로 되어 있음 => 이러한 박스 형태 = 박스 모델임

- box-sizing 속성
    - content-box
        - content 영역을 기준으로 box의 size 적용
        - 기본값
    - border-box
        - border 영역을 기준으로 box의 size 적용

- inline 요소 vs Block 요소
    - block 요소
        - 블록요소를 여러개 연속해서 쌓을 경우, 자동으로 다음줄로 넘어감
        - 좌/우 양쪽으로 늘어나 부모 요소의 너비를 가득 채움
        - ex) div, p, u, dl, h1, h2, h3, 등등
    - inline 요소
        - 여러개의 요소를 연속해서 입력해도 자동으로 다음줄로 넘어가지 않음
        - 태그에 할당된 공간 만큼의 너비만 차지함
        - ex) span, a, img, strong, em, input, button, textarea, select, 등등

- 실습
    - 일기장 만들기
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/mydiary1.jpg" width="600"/>



### Day 03
- 실습
    - 일기장 만들기 마무리
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/mydiary2.jpg" width="600"/>


### Day 04
- 레이아웃
    - 사전적 정의 : 출판 광고 건축 분야 등에서 요소를 효과적으로 배치하는 것
    - css 레이아웃 : css를 이용하여 단순 문서 형태인 html을 보기 좋게 배치하고 재배열 하는 것, 관련기능, 완성된 배열 등을 포괄적으로 지칭함
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/layout.jpg" width="600"/>

    [레이아웃]

- 선택자
    - 전체선택자
        - html에서의 모든 요소를 선택하는 것

                *{
                    property: value
                }
   
    - 그룹 선택자
        - 여러개의 선택자를 동시에 선택, 동시에 적용할 때 사용
        - 원하는 선택자를 ,를 이용하여 연결
        - 선택자의 갯수 상관 없이 계속 연결 가능

                .class1, .class2{
                    property: value
                }
    
    - 가상 클래스 선택자
        - 실제로 html 요소를 수정하지 않고 css 만으로 가상 요소를 추가해 선택할 수 있음

                    선택자:가상클래스{
                        property: value
                    }

        - first-child가상 클래스 선택자
            - 해당 요소들 중 첫번째 클래스를 선택한다는 의미

                    .class:first-child{
                        property: value
                    }

        - last-child 가상 클래스 선택자
            - 해당 요소들 중 마지막 클래스를 선택한다는 의미

                    .class:last-child{
                        property: value
                    }

        - nth-child(n) 가상 클래스 선택자
            - 원하는 순서에 있는 클래스를 선택한다는 의미
            - (n)에는 원하는 순서를 넣을 수도 있고, 2n과 같이 2의 배수를 표현하는 숫자도 넣을 수 있고, 연산자가 모두 사용 가능함
            
                    .class:nth-child(n){
                        property: value
                    }

        - hover(오버)
            - 요소 위에 마우스가 올라갔을 때 발생하는 전환효과 등을 말함

                    .class:hover{
                        property: value
                    }

                    ex)
                    .button1:hover{
                        background:red;
                        color:#ffffff;
                    }

- css 레이아웃 흐름
    - Float -> Flex -> Grid
    - Float 
        - 현재 거의 사용하지 않음
        - 반응형 웹에 적합하지 않기 때문
            - 반응형 웹 : 모바일, 태블릿, pc 등 접속하는 기기의 너비에 맞추어 레이아웃이 변하는 웹페이지
        - float를 사용한 코드도 읽을 수있기 위해 배워야 함
        - 레이아웃이 어떻게 변해왔는지 알면 flex를 더 효과적으로 사용할 수 있음
    - Flex와 Grid를 상황에 따라 혼용함

- Float 레이아웃
    - float
        - 기본값 : none

                float:none
        - left, right로 요소를 배치시킬 수 있음
        
        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/float_left.jpg" width="600"/>
        
        [float:left]

        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/float_right.jpg" width="600"/>
        
        [float:right]

                float:left
                float:right
    - clear
        - float가 적용된 요소, float가 적용된 요소에게 영향을 받고 있는 요소들에게 추가로 줄 수 있는 속성
        - 기본값 : none

                clear:none
        
        - left, right, both
        - both를 많이 사용함
        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/float_right-clear_left.jpg" width="600"/>

        [float_right + clear_left]

        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/float_right-clear_right.jpg" width="600"/>

        [float_right + clear_right]

- 실습
    - 다이어리 만들기
        - hover 선택자
        - float 정렬
        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/mydiay.gif" width="600"/>

- Flex
    - css 레이아웃의 꽃
    - css 레이아웃 배치에 중점을 두고 고안되었기 때문에 기존의 float 방식보다 훨씬 수월하고 간단하게 레이아웃을 잡을 수 있음
    - 요소의 속성을 flex로 변경
    - flex-direction : row(행) / column(열)
    - flex-direction이 바뀌면 중심축의 방향이 바뀌기 때문에 justify-content, align-items의 정렬 방향도 바뀜
    - flex-direction의 기본값 : row ㅁㅁㅁㅁ
    - flex-direction: column : ㅁ
                               ㅁ
                               ㅁ
                               ㅁ
    - justify-content : 중심축 방향 정렬
        - flex-start : 기본값 => container 시작점에 정렬
        - flex-end : container 끝부분을 기준으로 정렬
        - center: 중앙정렬
        - space-between : 양끝에는 여백이 없고 container 안의 item들이 균일한 간격을 두고 정렬됨
        - space-around : 양끝에도 여백이 생기고 container 안의 item들이 균일한 간격을 두고 정렬됨
        - space-evenly : 양끝과 container 안의 item들의 모든 여백의 크기가 균일함
    - align-items : 중심축 반대 방향 정렬
        - stretch : 기본값 => item을 container 영역을 꽉 채움
        - flex-start : 시작점 기준으로 정렬
        - flex-end : container의 끝부분 기준으로 정렬
        - center : 중앙정렬
        - align-items는 flex-item이 한줄일 때 우선 적용하고 두줄 이상일 경우 align-content라는 다른 속성을 써줘야 함


                display : flex
                flex-direction : row / flex-direction : column
                justify-content : space-between
                align-items : center

### Day 05
- 선택자
    - 가상클래스 선택자

            :first-of-type
            :active
            :focus
            :visited

    - first-of-type
        - first-child와 비슷하지만 다름
        - first-child 
            - 형제 요소 중 첫번째 요소를 선택하는 가상 클래스
            - 같은 부모 안에 있는 형제 요소 중 첫 번째 요소 선택

                    <div class="container">
                        <h1>이렇게</h1>
                        <p>자식이 있다면?</p>
                    </div>

                    .container h1:first-child{
                        background:red;
                    }
                    => h1 background 색상이 red로 적용됨

                    .container p:first-child{
                        background:red;
                    }
                    => container의 첫번째 자식요소가 h1이기 때문에 p태그를 first-child로 인식하지 않아 적용되지 않음
        - first-of-type 
            - 형제 요소 중 첫번째 요소를 선택하는 가상 클래스
            - 해당되는 요소만 카운트한다는 점이 first-child와 다른점임

                    <div class="container">
                        <h1>제목입니다.</h1>
                        <p>첫번째 p 태그 입니다.</p>
                        <p>두번째 p 태그 입니다.</p>
                        <span>첫번째 span 태그 입니다.</span>
                        <p>세번째 p 태그 입니다.</p>

                    </div>

                    .container h1:first-child{
                        background:red;
                    }
                    => h1 background 색상이 red로 적용됨

                    .container p:first-of-type{
                        background:red;
                    }
                    => p태그들 중 첫번째 p 태그에 background 색상이 red로 적용됨

### Day 06
- 선택자
    - of-type
        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/of-type-and-child.jpg" width="600"/>

    - active
        - 활성화된 요소를 선택하는 가상 클래스 선택자
        - 활성화된 요소 : 버튼 등을 클릭해서 요소의 동작이 활성화되어 있는 상태
            ex) 버튼을 클릭할 때 색이 변하는 것

    - focus
        - focus를 받고 있는 입력 창 등의 요소를 선택하는 가상 클래스 선택자
        - Tab키 등을 이용해서 입력창의 커서가 활성화되어 있는 상태

    - visited
        - 사용자가 방문한 적 있는 링크를 선택하는 가상 클래스 선택자
        - 방문한 적 있는 링크 : 링크를 눌러서 해당 경로를 방문한 기록이 브라우저상에 남아 있는 링크
            ex) 기본컬러 -> 보라색

        <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/active-focus-visited.gif" width="600"/>

- 가상 요소 선택자
    - 실제로 html요소를 수정하지 않고, css 만으로 가상 요소를 추가해 선택할 수 있음
    - before, after

        [html 소스]

            <div class="box1">
                나는 박스1입니다.
                <p class="text">나는 박스2입니다.</p>
            </div>
        

        [css 소스]

            .box1{
                    width : 200px;
                    height: 300px;
                    background-color: yellow;
                }
            .text{
                    background-color: blue;
                }
        


        [가상요소 선택자 사용시 html]

            <div class="box1">
                나는 박스1입니다.
            </div>


        [가상요소 선택자 사용시 css]

            .box1{
                width : 200px;
                height: 300px;
                background-color: yellow;
            }
            .box1:after{
                content:"나는 박스2입니다.";
                display: block;
                background-color: blue;
            }

        - 결과는 같음

- 형제요소 선택자
    - A와 같은 부모를 가지고 있는 형제 요소들 중 B를 선택함

            A~B{
                property : value
            }

### Day 07
- flex 추가
    - flex => css 레이아웃 배치에 중점을 두고 고안됨
    
            display: flex
            flex-direction : row | column => 중심축 설정
            justify-content :             => 중심축 기준으로 정렬 설정
            align-item :                  => 중심 반대축 방향의 정렬 설정

    - flex-wrap
        - flex-item이 여러개일 때 item 들의 줄바꿈을 허용할 것인지 말 것인지 결정
        - 기본값 : nowrap => 무조건 한줄 안에 들어가게 강제함
        - wrap : item의 규격에 맞춰 다음줄로 개행됨
        - 주의 : align-items는 flex-item이 한줄일 때 우선 적용됨, 두줄 이상일 때에는 align-content라는 다른 속성을 써줘야 함

    - align-content
        - 여러 줄이 된 flex-item의 중심 반대 축 정렬을 어떻게 할 지 결정
        - 기본값 : stretch
            - item의 실제 규격과 상관 없이 늘어난 형태
        - flex-start : container의 시작점을 기준으로 item 정렬
        - flex-end : container의 끝점을 기준으로 item 정렬
        - center : 중심을 기준으로 item 정렬
        - space-between : start-line과 end-line으로 벌어져 정렬됨
        - space-around : 축을 기준으로 위, 아래의 간격이 동일함 => 가운데는 start-line, end-line의 간격과 비교했을 때 2배 간격임
        - space-evenly : 위, 아래의 간격이 동일함

    - flex-flow
        - flex-direction과 flex-wrap을 합쳐놓은 단축 속성
        - 단축속성 : 유사한 성질을 가진 여러 공통의 속성들을 한번에 사용할 수 있도록 묶어놓은 속성
            ex) border

        [flex-direction, flex-wrap 속성 2개 사용]

                flex-direction: row;
                flex-wrap: wrap;

        [flex-flow 속성 1개 사용]

                flex-flow: column wrap

    - flex-item 속성들
        - order : item의 순서 지정
        - flex-basis : item의 기본 사이즈 지정
        - flex-shrink
        - flex-grow 

[display - flex 설정 x -> o -> x]
   
<img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/display-flex.gif" width="600"/>


[flex-wrap 설정]
    
<img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/flex-wrap.gif" width="600"/>

1. container안의 box들의 width 를 200px로 설정 => flex-wrap의 기본값이 stretch로 container 안에 꽉 채워져 200px로 나오지 않음
2. flex-wrap 설정 => wrap으로 변경하여 box들의 width로 설정된 200px로 나옴
            
### Day 08
- CSS 상속
    - 부모요소의 속성값을 자식요소에게 상속함

            <div class="container">
                바깥에 있는 박스입니다.
                <div class="inner-box">
                    <p> 안쪽에 있는 박스입니다. </p>
                </div>
            </div>

            .container{
                color: red;
            }

        - 바깥에 있는 박스입니다. 안쪽에 있는 박스입니다. 2개 모두 빨간색 적용됨
    - 모든 속성이 상속되지는 않음

            <div class="container">
                바깥에 있는 박스입니다.
                <div class="inner-box">
                    <p> 안쪽에 있는 박스입니다. </p>
                </div>
            </div>

            .container{
                color: red;
                border: 3px dashed blue
            }
        
        - border 속성은 container에만 적용됨
        - 상속되는 속성과 상속되지 않는 속성이 있기 때문
            - 상속되는 속성 : color, font-family, font-size 등등
            - 상속되지 않는 속성 : padding, margin, border 등등
    - 여러개의 상속 속성이 겹쳤을 때
        - Cascading이라는 룰이 우선순위를 결정함
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/inherit.gif" width="600"/>

- 웹폰트
    - font-family : "폰트이름"
    
            font-family: arial, "맑은 고딕", sans-serif;

    - font-family에 2개 이상의 폰트 설정
        - 앞에서부터 우선순위 부여받음
        - 유저 컴퓨터에도 폰트 파일이 설치되어 있어야 글시체가 제대로 보임
    
    - 웹폰트 : 웹전용 폰트
        - 사용자가 로컬컴퓨터에 폰트를 직접 설치하지 않아도 특정 서버에 위치한 폰트를 다운받아 웹페이지에 표시해주는 것
        - 사용자들이 알지 못하는 폰트 다운로드가 진행되는 것임

    - 웹폰트 적용 방법
        - 폰트 파일을 직접 다운로드 받아서 적용하는 방법
            - @font-face이용
                1. 웹폰트 파일 준비 (확장자명 : woff / woff2 / ttf / eot)
                2. css문서에서 @font-face를 이용해 폰트 파일 불러옴
                3. 불러운 폰트 파일을 이용해 새로운 font-family를 만듦
                4. 만든 font-family 사용

        - 외부 서비스에서 제공하는 링크를 이용하는 방법
            - @import 혹은 link태그 이용
                1. 구글 폰트에 접속해서 원하는 폰트를 찾음
                2. 폰트를 상세페이지 접속 후, 원하는 굵기의 폰트 옆에 있는 Select this style 클릭
                3. Use on web 항목에서 import를 선택하고 해당 import 구문을 css 파일 내에 입력
                4. css rules to specify familes를 참고하여 font-family 작성

- 폰트
    - font-size : 텍스트의 크기를 지정함
    - font-weight : 텍스트의 두께를 지정함
    - text-decoration : 텍스트에 장식용 선을 추가함
    - color : 텍스트의 색 지정 
        - 색상 직접 지정
            ex) color : red;
        - Hex 코드 사용
            ex) color : #5145d8;
        - RGB 코드 사용
            ex) color : rgb(213,229,37)
    - line-height : 텍스트의 행간을 설정함
        ex) line-height : 1.8 => 해당 텍스트의 1.8배의 행간
        ex) line-height : 52px -> 52px 크기의 행간 => 다른 단위를 적을 때는 무조건 단위까지 적어줘야 함
    - letter-spacing : 텍스트의 자간을 설정함
        - 다양한 단위 부여 가능
        - 기본값 : normal
        - em, px
        - 양수, 음수 사용 가능
    - word-spacing : 텍스트의 단어간 간격 지정
        - 다양한 단위 부여 가능
        - 기본값 : normal
        - em, px
        - 양수, 음수 사용 가능
    - text-align : 블록요소나 표 안에서 텍스트의 가로 정렬 방식을 지정
        - left, right, center로 설정 가능
        - 좌측, 우측, 중앙 정렬
        - justify => 양측정렬
            - left와 비교했을 때 left 정렬은 우측이 울퉁불퉁한 경우가 있으나 justify의 경우 좌 우측 라인이 한줄로 이어져 있음
    - vertical-align : 인라인 요소나 표 안에서 텍스트의 세로 정렬 방식을 지정
        - top, middle, bottom 으로 설정 가능
        - 상단, 중앙, 하단 정렬
    - text-indent : 텍스트의 들여쓰기를 설정함
        - 다양한 단위 부여 가능
        - 기본값 : 0
        - px, em, rem
        - 양수, 음수 사용 가능
    - text-transform : 영문 텍스트의 대/소문자를 바꿀 수 있음
        ex) text-transform : capitalize
        - 기본값 : none
        - capitalize => 각각의 단어의 첫번째 글짜 대문자로 변환
        - uppercase => 모두 대문자로 변환
        - lowercase => 모두 소문자로 변환

