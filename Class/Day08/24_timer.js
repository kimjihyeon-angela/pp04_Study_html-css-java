let isStarted = false

let getNumber = () =>{

    if(isStarted === false){
        // 타이머가 작동중이 아닐 때
        isStarted = true
        document.getElementById("finish").disabled = false

        const result = String(Math.floor ( Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("target").innerText = result
        // document.getElementById("target").style.color = "#" + result
        let time2 = 10
        let timer
    
        timer = setInterval(function() {
            if(time2 >=0)
            {
                let min = Math.floor ( time2 / 60 )
                let sec = String(time2 % 60).padStart(2,"0")
                document.getElementById("target2").innerText = (min + ":" + sec)
                time2 = time2 - 1
            }
            else
            {
                document.getElementById("finish").disabled = true
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