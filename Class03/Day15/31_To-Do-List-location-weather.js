const todoInput = document.querySelector('#todo_input');
const todoList = document.querySelector('#todo_list')
const savedTodoList = JSON.parse(localStorage.getItem('saved-items'))
const savedWeatherData = JSON.parse(localStorage.getItem('saved-weather'));
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
    if(window.event.keyCode === 13 && todoInput.value.trim() !== ''){
        // todoInput.value !== '' 아무값 입력 안할 경우 입력 안되지만 공백이 한개라도 입력될 경우 입력됨
        // .trim() 사용할 경우 공백을 지워줌
        createTodo();
    }
}

const deleteAll = function () {
    const liList = document.querySelectorAll('li')
    for (let i = 0; i < liList.length; i++){
        liList[i].remove()
    }
    saveItemsFn()
}

const saveItemsFn = function() {
    const saveItems = []
    for(let i= 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents : todoList.children[i].querySelector('span').textContent,
            complete : todoList.children[i].classList.contains('complete')
        }
        saveItems.push(todoObj)
    }
    // 삼항연산자 활용하여 아래 조건식 간단하게 변경
    saveItems.length === 0 
    ? localStorage.removeItem('saved-items')
    : localStorage.setItem('saved-items', JSON.stringify(saveItems))

}

// localStorage에 있는 데이터 확인 후 꺼내오기
if(savedTodoList) {
    for(let i = 0; i < savedTodoList.length; i++){
        createTodo(savedTodoList[i])
    }
}

// 사용자의 지역명을 ToDo에 넣어주고 날씨에 맞는 배경화면 보여주기
const weatherDataActive = function( { location, weather}) {
    const weatherMAinList = [
        'Clear',
        'Clouds',
        'Drizzle',
        'Rain',
        'Snow',
        'Thunderstorm'
    ];
    // 우리가 가지고 있는 데이터일 경우 그대로 사용, 아닐 경우 'Fog'이미지 출력
    weather = weatherMAinList.includes(weather) ? weather : 'Fog'
    const locationNameTag = document.querySelector('#location-name-tag');
    // console.log(locationNameTag)
    locationNameTag.textContent = location;
    document.body.style.backgroundImage = `url('../images/${weather}.jpg')`

    if (!savedWeatherData || savedWeatherData.location !== location || savedWeatherData.weather !== weather){
        localStorage.setItem('saved-weather', JSON.stringify({ location, weather }));
    }
}

// API를 이용하여 사용자의 지역 및 날씨 받아오기
const weatherSearch = function({ latitude, longitude }) {
    const openWeatherRes = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f731029273cc96ab98ebf55cebf7ed93`
        )
        .then((res) => {
            // console.log(res.json())
            return res.json()
            // JSON.Parse 사용안 한 경우 => 바디, 헤더까지 존재하는 경우 제대로 동작하지 안할 수도 있기 때문
        })
        .then((json) => {
            // console.log(json.name, json.weather[0].main);
            const weatherData = {
                location: json.name,
                weather: json.weather[0].main
                // weather:'Fog'
            }
            weatherDataActive(weatherData);
        })
        .catch((err) => {
            console.error(err)
        })
//    console.log(openWeatherRes)

}

const accessToGeo = function({coords}) {
    const { latitude, longitude } = coords
    // shorthand property
    const positionObj = {
        latitude, longitude//경도
        // 객체의 키와 값이 같은 이름인 경우 : 생략 가능
    }

    // console.log(positionObj)
    weatherSearch(positionObj)
}

const askForLocation = function() {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err)
    });
}
askForLocation();

// api key : f731029273cc96ab98ebf55cebf7ed93

if(savedWeatherData) {
    weatherDataActive(savedWeatherData);
 }
