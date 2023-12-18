const messageContainer = document.querySelector('#d-day-message')

messageContainer.innerHTML = '<h3>D-day를 입력해주세요</h3>'

const container = document.querySelector('#d-day-container')
container.style.display = 'none'

const intervalIdArr = []

// local storage에 저장되어 있는 값 출력해주기
const savedDate = localStorage.getItem('saved-date')
// console.log(savedDate)


// inputBox에서 데이터를 가지고 오는 함수
const dateFormMaker = function() {
    const inputYear = document.querySelector('#target-year-input').value
    const inputMonth = document.querySelector('#target-month-input').value
    const inputDate = document.querySelector('#target-date-input').value
    const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate
    const dateFormat2 = `${inputYear}-${inputMonth}-${inputDate}`
    return dateFormat2
}

// 현재 날짜와 inputBox에 입력한 날짜의 count 구하는 함수
const counterMaker = function(data) {
    // console.log(data)
    // const targetDateInput = dateFormMaker();
    if(data !== savedDate) {
        localStorage.setItem('saved-date', data)
        /* // local storage 확인방법
            개발자 도구 -> 애플리케이션 -> 로컬스토리지 -> 해당 도메인 클릭시 키(saved-date) - 값(targetDateInput) 형태로 저장되어 있음
        */
    }
    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
    if(remaining <= 0) {
        console.log('타이머가 종료되었습니다.');
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        setClearInterval()
        return
    }
    else if(isNaN(remaining)){
        console.log('유효한 날짜가 아닙니다.');
        messageContainer.innerHTML = '<h3>유효한 날짜가 아닙니다.</h3>'
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        setClearInterval()
        return
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }
    // console.log(remainingObj);

    const documentObj = {
        days : document.getElementById('days'),
        hours : document.querySelector('#hours'),
        min : document.querySelector('#min'),
        sec : document.querySelector('#sec')
    }

    const documentArr = ['days', 'hours', 'min', 'sec']

    const timeKeys = Object.keys(remainingObj)

    const format = function (time) {
        if (time < 10) {
            return '0' + time;
        }
        else{
            return time;
        }
    }
    
    let i = 0;
    for (let tag of documentArr){
        const remainingTime = format(remainingObj[timeKeys[i]])
        // console.log(remainingTime)
        document.getElementById(tag).textContent = remainingTime
        i++
    }
}

const starter = function(targetDateInput) {
    console.log(targetDateInput)

    // undefined(falsy)여도 출력될 수 있도록 만듦
    if(!targetDateInput) {
        targetDateInput = dateFormMaker();
    }

    
    
    
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    setClearInterval()
    
    counterMaker(targetDateInput)
    const intervalId = setInterval(() => counterMaker(targetDateInput), 1000);
    // console.log(intervalId) 

    intervalIdArr.push(intervalId)
    // console.log(intervalIdArr)
}

const setClearInterval = function () {
    localStorage.removeItem('saved-date')
    for (let i = 0; i < intervalIdArr.length; i++){
        clearInterval(intervalIdArr[i])
    }
}

const resetTimer = function () {
    messageContainer.style.display = 'flex'
    messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>'
    container.style.display = 'none'
    setClearInterval();
}

// falsy한 경우(undefined, null, 0, "", NaN)가 아닌 것을 truthy한 경우로 봄 => 조건식 통과함
if(savedDate) {
    // console.log(savedDate)
    starter(savedDate)
}
else{
    messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>'
    container.style.display = 'none'
}
