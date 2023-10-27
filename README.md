d# pp04_Study_html-css-java
HTML/CSS, JavaScript에 대한 부족한 지식을 채우기 위한 공부용

## Day 01
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

## Day 02
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

## Day 03
- 회원가입 화면 만들어 보기

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/signup1.jpg" width="600"/>

    [회원가입 화면]

- 싸이월드 화면 만들어보기

    <img src="https://raw.githubusercontent.com/kimjihyeon-angela/pp04_Study_html-css-java/main/image/cyworld1.jpg" width="600"/>

    [싸이월드 화면]

    - background 설정 방법
    - outerbox 설정
    - 화면을 만들때
        - 하나하나 div로 다 나눠서 class 지정해줘야함
        - br 사용보다 div로 나눠 css에서 디자인해주기