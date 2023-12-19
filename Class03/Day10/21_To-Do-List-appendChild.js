const todoInput = document.querySelector('#todo_input');

const keyCodeCheck = function () {
    if(window.event.keyCode === 13 && todoInput.value !== ''){
        // console.log('true')
        const todoList = document.querySelector('#todo_list')
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span')
        // console.log(inputValue, newLi, newSpan)
        
        // Document에 태그를 생성해주기 위한 작업
        newSpan.textContent = todoInput.value
        // console.log(newSpan)
        newLi.appendChild(newSpan)
        console.log(todoList)
        todoList.appendChild(newLi)
        todoInput.value = ''
        // todoInput const로 설정되어 있었기 때문에 변경 불가능 => let으로 변경
        // let으로 변경하니 빈 문자열로 변경이 안됨
        // const로 다시 변경하고 value를 바로 가져오는 것이 아닌 해당 태그만 가져와서 value값을 따로 넣어줌

    }
}

