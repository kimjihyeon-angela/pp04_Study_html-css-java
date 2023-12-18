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
/* 
    // 문제 발생
    1초마다 counterMaker 함수가 실행되고 있어 input 박스에 다른 숫자를 넣으면 바로 변경 되는 문제가 발생함
    그때마다 dateFormMaker 함수가 실행되고 1초 마다 input 박스에 들어오는 문자를 인식함 => 새로 입력하면 버튼을 누르지 않아도 카운터가 변경됨

    // 해결 방안
    버튼을 누를때만 input 박스의 값을 가져오도록 만들어주기
    -> counterMaker에 있던 targetDateInput 함수를 starter 함수에서 사용하면 됨 
    => dateFormMaker 함수에서 counterMaker로 받던 dateFormat을 받을 수 없게 됨 (연결이 끊어진 것임)
    => 전달인자, 매개변수를 통해 받을 수 있게 됨

    // 10 이하로 떨어졌을 때 앞에 0이 나올 수 있도록 만들어 주기
        - counterMaker 함수에서 format이라는 함수를 새로 정의
        - 10보다 작을 경우 '0' + 매개변수 출력
        - 아닐경우 매개변수 출력
*/

const counterMaker = function(data) {
    console.log(data)
    // const targetDateInput = dateFormMaker();
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

const starter = function() {
    const targetDateInput = dateFormMaker();
    
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    setClearInterval()
    
    counterMaker(targetDateInput)
    const intervalId = setInterval(() => counterMaker(targetDateInput), 1000);
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