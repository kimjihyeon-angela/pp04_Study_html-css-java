const todoInput = document.querySelector('#todo_input');

const createTodo = function() {
    const todoList = document.querySelector('#todo_list')
    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete')
        // 클릭 시 li태그에 complete class가 지정됨 한번 더 클릭 시 complete class 없어짐
    })
    
    newSpan.textContent = todoInput.value
    newLi.appendChild(newBtn)
    newLi.appendChild(newSpan)
    console.log(todoList)
    todoList.appendChild(newLi)
    todoInput.value = ''
}

const keyCodeCheck = function () {
    if(window.event.keyCode === 13 && todoInput.value !== ''){
        createTodo();
    }
}

