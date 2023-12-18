const messageContainer = document.querySelector('#d-day-message')

messageContainer.innerHTML = '<h3>D-day를 입력해주세요</h3>'

const container = document.querySelector('#d-day-container')
container.style.display = 'none'

const intervalIdArr = []

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
const counterMaker = function() {
    const targetDateInput = dateFormMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
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
    
    let i = 0;
    for (let tag of documentArr){
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]]
        i++
    }
}

const starter = function() {
    const targetDateInput = dateFormMaker();
    
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    
    counterMaker()
    const intervalId = setInterval(counterMaker, 1000);
    console.log(intervalId) 

    intervalIdArr.push(intervalId)
    console.log(intervalIdArr)
}

const setClearInterval = function () {
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