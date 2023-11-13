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
        - 여러개의 ㅇ소를 연속해서 입력해도 자동으로 다음줄로 넘어가지 않음
        - 태그에 할당된 공간 만큼의 너비만 차지함
        - ex) span, a, img, strong, em, input, button, textarea, select, 등등

- 실습
    - 일기장 만들기
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/mydiary1.jpg" width="600"/>



### Day 03
- 실습
    - 일기장 만들기 마무리
    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/mydiary2.jpg" width="600"/>


