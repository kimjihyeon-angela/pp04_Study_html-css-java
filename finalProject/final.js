const changeFocus1 = () =>{
    
    let phone1 = document.getElementById("phone1").value
    if (phone1.length === 3)
    {
        document.getElementById("phone2").focus()
    }
}

const changeFocus2 = () => {

    let phone1 = document.getElementById("phone2").value
    if(phone1.length === 4)
    {
        document.getElementById("phone3").focus()
    }
}

const sendNumber = () => {
    let isStarted = false

    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value

    if (phone1.length === 0 || phone2.length === 0 || phone3.length===0)
    {
        alert("전화번호를 입력하세요")
        phone1.focus()
    }
    else
    {
        isStarted = false
    }

    if(isStarted === false){
        // 타이머가 작동중이 아닐 때
        isStarted = true
        document.getElementById("finish").disabled = false

        const result = String(Math.floor ( Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("number").innerText = result
        let time = 10
        let timer
    
        timer = setInterval(function() {
            if(time >= 0)
            {
                let min = Math.floor ( time / 60 )
                let sec = String(time % 60).padStart(2,"0")
                document.getElementById("time").innerText = (min + ":" + sec)
                time = time - 1
            }
            else
            {
                document.getElementById("finish").disabled = true
                document.getElementById("finish").style = "color: gray; background-color: white;"
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        },1000)

    }
    else{
        // 타이머가 작동중일 때
        
    }
}

const sendMessage = () => {
    alert("인증되었습니다.")
    document.getElementById("finish").disabled = true
    document.getElementById("finish").style = "color: gray; background-color: white;"
}

const submit = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value
    let number = document.getElementById("number").innerText

    if (email !== "" && name !=="" && pw1 !== "" && pw2 !== "" && phone1 !=="" && phone2 !=="" && phone3 !=="")
    // if (email && pw1 && pw2) 이렇게 작성해도 작동됨
    {
        // document.getElementById("submit").disabled = false
        if(email.includes("@") ===  false)
        {
            alert("이메일을 확인하세요")
            email.focus()
        }

        if (pw1 !== pw2)
        {
            alert("비밀번호를 확인하세요")
            pw1.focus()
        }

        if (phone1.length !== 3 && phone2.length !== 4 & phone3.length !== 4)
        {
            alert("전화번호를 입력하세요")
            phone1.focus()
        }

        if (number === "000000")
        {
            alert("인증번호 전송 및 인증 완료를 선택하세요")
            number.focus()
        }

        else
        {
            alert("가입이 완료되었습니다.")
        }
    }
    else
    {
        alert("내용을 입력해주세요")
        // document.getElementById("submit").disabled = true
    }

    
}