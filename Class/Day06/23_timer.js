const getNumber = () =>{
    let result = String(Math.floor ( Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("target").innerText = result
    // document.getElementById("target").style.color = "#" + result
    let time2 = 180

    setInterval(function() {
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
        }
    },1000)
}