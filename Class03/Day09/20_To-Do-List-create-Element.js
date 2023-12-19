const keyCodeCheck = function () {
    if(window.event.keyCode === 13){
        // console.log('true')
        const inputValue = document.querySelector('#todo_input').value;
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span')
        console.log(inputValue, newLi, newSpan)
    }
}

/* 
    li, span태그 추가하기 완료
    but, 화면상 아무 변화 없음
*/

