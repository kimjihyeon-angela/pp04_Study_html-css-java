const messageContainer = document.querySelector('#d-day-message')
// messageContainer.style.color = 'red'
// css 접근도 가능

// messageContainer.textContent = 'D-day를 입력해주세요'
// 그냥 텍스트로 입력됨

messageContainer.innerHTML = '<h3>D-day를 입력해주세요</h3>'
// innerHTML 사용 시 원하는 HTML 태그를 입력하고 사용할 수 있게 됨

const container = document.querySelector('#d-day-container')
// container.style.display = 'none'
// display가 없는것처럼 표현됨 => 바로 D-day를 입력해주세요 메시지만 출력됨

// Uncaught TypeError : cannot set properties of null (setting 'textContent') 에러 발생
// 위에서부터 차례대로 실행되기 때문에 head 안에 script가 존재할 경우 script가 먼저 실행되고 body가 실행됨 => 태그 생성 안된 상태로 해당 id를 사용하는 태그를 참조할 수 없어 발생하는 에러
// 1. script를 body 태그 하단으로 옮기는 방법
// 2. script가 head 태그 안에 존재하는 경우 속성으로 defer 주는 방법 => script 해석 하면서 body안에 위치한 태그 생성됨

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
const counterMake = function() {
    const nowDate = new Date();
    const targetDate = new Date(dateFormMaker()).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
    if(remaining <= 0) {
        console.log('타이머가 종료되었습니다.');
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
    }
    else if(isNaN(remaining)){
        console.log('유효한 날짜가 아닙니다.');
        messageContainer.innerHTML = '<h3>유효한 날짜가 아닙니다.</h3>'
    }

    // const remainingDate = Math.floor(remaining / 3600 / 24);
    // const remainingHours = Math.floor(remaining / 3600) % 24;
    // const remainingMin = Math.floor(remaining / 60) % 60;
    // const remainingSec = Math.floor(remaining) % 60
    
    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }
    console.log(remainingObj);

    // const days = document.getElementById('days')
    // Id값으로 가지고 올 경우 getElementById를 이용할 경우 querySelector와 다르게 # 안적어도 해당 Id값을 가지고 옴
    // const hours = document.querySelector('#hours')
    // const min = document.querySelector('#min')
    // const sec = document.querySelector('#sec')
    // console.log(days, hours, min, sec)

    const documentObj = {
        days : document.getElementById('days'),
        hours : document.querySelector('#hours'),
        min : document.querySelector('#min'),
        sec : document.querySelector('#sec')
    }
    console.log(documentObj)

    const timeKeys = Object.keys(remainingObj)
    const docKeys = Object.keys(documentObj)
    console.log(timeKeys)
    // remainingObj 배열 출력됨
    console.log(docKeys)
    // documentObj 배열 출력됨

    for (let i = 0; i < timeKeys.length; i = i + 1){
        console.log(timeKeys[i])
        /*
            remainingDate
            remainingHours
            remainingMin
            remainingSec
            이 출력됨
        */
       console.log(docKeys[i])
       /*
            0: days
            1: hours
            2: min
            3: sec
            이 배열로 출력됨
       */
       console.log(documentObj[docKeys[i]]) // 태그를 가지고 올 수 있음
       /*
            <span id="days"></span>
            <span id="hours"></span>
            <span id="min"></span>
            <span id="sec"></span>
            이 출력됨
       */

       documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
    }

    // documentObj['days'].textContent = remainingObj.remainingDate;
    // documentObj['hours'].textContent = remainingObj.remainingHours;
    // documentObj['min'].textContent = remainingObj.remainingMin;
    // documentObj['sec'].textContent = remainingObj.remainingSec;
    // 객체에서 해당 값 가져오는 방법 2가지 [''] 사용/ . 사용
}