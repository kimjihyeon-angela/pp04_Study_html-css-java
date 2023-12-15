const messageContainer = document.querySelector('#d-day-message')

messageContainer.innerHTML = '<h3>D-day를 입력해주세요</h3>'

const container = document.querySelector('#d-day-container')
container.style.display = 'none'

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
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        return
    }
    else if(isNaN(remaining)){
        console.log('유효한 날짜가 아닙니다.');
        messageContainer.innerHTML = '<h3>유효한 날짜가 아닙니다.</h3>'
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        return
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }
    console.log(remainingObj);

    const documentObj = {
        days : document.getElementById('days'),
        hours : document.querySelector('#hours'),
        min : document.querySelector('#min'),
        sec : document.querySelector('#sec')
    }

    const documentArr = ['days', 'hours', 'min', 'sec']

    const timeKeys = Object.keys(remainingObj)
    console.log(timeKeys)

    
    // for (let i = 0; i < timeKeys.length; i = i + 1){
        //    console.log(timeKeys[i])
        //    console.log(docKeys[i])
        //    console.log(documentObj[docKeys[i]]) // 태그를 가지고 올 수 있음
        //    documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
        // }
        
    let i = 0;
    for (let tag of documentArr){
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]]
        i++
    }

    // let i = 0;
    // for (let key in documentObj){
    //     documentObj[key].textContent = remainingObj[timeKeys[i]];
    //     i = i + 1;
    // }
}

const starter = function() {
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    for (let i = 0; i < 100; i ++){
        setTimeout(() => {
            counterMake();
        }, 1000 * i);
    }
}