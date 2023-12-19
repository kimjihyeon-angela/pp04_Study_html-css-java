const todoInput = document.querySelector('#todo_input');
const todoList = document.querySelector('#todo_list')

const createTodo = function() {
    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete')
        // 클릭 시 li태그에 complete class가 지정됨 한번 더 클릭 시 complete class 없어짐
    })

    newLi.addEventListener('dblclick', () => {
        // console.log('더블클릭')
        newLi.remove()
    })
    
    newSpan.textContent = todoInput.value
    newLi.appendChild(newBtn)
    newLi.appendChild(newSpan)
    console.log(todoList)
    todoList.appendChild(newLi)
    todoInput.value = ''
    saveItemsFn()
}

const keyCodeCheck = function () {
    if(window.event.keyCode === 13 && todoInput.value !== ''){
        createTodo();
    }
}

const deleteAll = function () {
    const liList = document.querySelectorAll('li')
    // console.log(liList)
    // NodeList가 출력됨 => 인덱스값으로 가져올 수 있음
    for (let i = 0; i < liList.length; i++){
        // console.log(liList[i])
        liList[i].remove()
    }
}

const saveItemsFn = function() {
    const saveItems = []
    // console.log(todoList.children[0].querySelector('span').textContent)
    for(let i= 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents : todoList.children[i].querySelector('span').textContent,
            complete : todoList.children[i].classList.contains('complete')
        }
        saveItems.push(todoObj)
    }
    console.log(saveItems)
}