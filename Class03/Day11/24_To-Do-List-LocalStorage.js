const todoInput = document.querySelector('#todo_input');
const todoList = document.querySelector('#todo_list')
const savedTodoList = JSON.parse(localStorage.getItem('saved-items'))
// JSON.parse => 원래 상태로 돌려서 불러올 수 있음

// console.log(savedTodoList) // 저장되어 있는 문자열이 (객체형태로)출력됨 

const createTodo = function(storageData) {
    let todoContents = todoInput.value;
    if(storageData) {
        todoContents = storageData.contents;
    }

    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete')
        // 클릭 시 li태그에 complete class가 지정됨 한번 더 클릭 시 complete class 없어짐
        saveItemsFn()
        // 해당 함수 입력 안했을 때는 취소선을 만들고 다른 리스트를 추가해야 했었음 => 버튼을 눌렀을 때도 함수를 실행하여 더 추가하지 않아도 되게 만듦
    })

    newLi.addEventListener('dblclick', () => {
        // console.log('더블클릭')
        newLi.remove()
        saveItemsFn()
    })

    // storageData에 complete 값이 들어오지 않았을 경우 에러 발생함 => ?(optional chaining)를 사용하여 값이 있는 경우에만 비교할 수 있도록 해줌
    // optional chining이 없을 경우 조건식이 2개 필요
    // if(storageData && storageData.complete)
    if(storageData?.complete){
        newLi.classList.add('complete')
    }
    
    newSpan.textContent = todoContents
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
    saveItemsFn()
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
    // console.log(saveItems)
    
    // 배열을 문자열로 바꿔줘야함
    console.log(String(saveItems))
    // [object Object]가 출력됨

    //배열 자체를 문자열로 바꿔줘야 함
    console.log(JSON.stringify(saveItems))
    // [{"contents":"1","complete":false}] 로 출력됨 => 모두 ""로 묶여서 출력됨

    // 문자열인지 확인하는 방법 => typeof
    console.log(typeof JSON.stringify(saveItems))
    // string 출력됨

    // localStorage에 저장
    localStorage.setItem('saved-items', JSON.stringify(saveItems))
}

// localStorage에 있는 데이터 확인 후 꺼내오기
if(savedTodoList) {
    for(let i = 0; i < savedTodoList.length; i++){
        createTodo(savedTodoList[i])
    }
}