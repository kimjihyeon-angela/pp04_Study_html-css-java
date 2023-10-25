# pp04_Study_html-css-java
HTML/CSS, JavaScript에 대한 부족한 지식을 채우기 위한 공부용

## Day 01
- html
    - Hyper Text Markup Language
    - 네트워크가 연결된 웹페이지에서 문서를 작성하고, 읽고, 공유하기 위해 만들어진 체계로 구조를 담당 
        => 공간을 만들고 그 공간을 무엇으로 채울지 결정하는 것
    - <tag>의 집합 
        - 태그 - 고유한 기능을 가진 약속된 명령어 
        - <시작 태그> 내용 </종료 태그> => 요소
            - ex) <h1> Welcome to My Place </h1>
        - 자주 사용되는 tag
            - <strong> : 굵게
            - <u> : 밑줄
            - <i> : 기울게
        - 빈태그
            - 내용, 종료태그 없이 시작태그만 작성하면 됨
            - <br> : 줄바꿈 태그
            - <hr> : 수평선 태그
        - 특정 기능이 있는 태그
            - <button> 버튼 </button>
            - <textarea> 입력창 </textarea>
            - <img src="image.png" />
            - <video muted = "muted" loop = "loop">
                <source src = "video.mp4">
              </video>
    - HTML의 핵심
        - 태그의 특징 : Inline, Block
        - 종속태그
            - 다른 태그와 함께 상호작용해야만 제대로 작동하는 태그 = 혼자서 작동할 수 없는 태그
            - ex) 선택박스태그, 목록태그 표태그
            - 선택박스태그 
                - <select> 
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
        - HTML 문서 구조
            - 문서마다 양식이 모두 다르면 해석하는게 복잡해짐 => 최소한의 문서 구조를 통해 체계화
            - 검색엔진을 위한 <head>영역 + 브라우저에서 보여지는 <body> 영역
            - <head>영역
                - title, meta 태그
                - title : 브라우저 상단
                - meta : 인터넷에 검색 했을 때 밑에 설명 부분
            - <body>영역

- css : 시각
- JavaScript : 기능