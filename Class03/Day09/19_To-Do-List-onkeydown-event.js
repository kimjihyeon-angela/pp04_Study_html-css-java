const keyCodeCheck = function () {
    if(window.event.keyCode === 13){
        // console.log('true')
        const inputValue = document.querySelector('#todo_input').value;
        console.log(inputValue)
    }
    // console.log(window.event)
    // console.log(event)
    // window : 전역 객체
    // 현재 페이지에서 일어나고 있는 event(버튼 클릭, 키보드 입력, 등등)
    // window.event 에서 window 생략 가능
}

