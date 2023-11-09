let time = 10
// undefined
setInterval(function() {
    
    if (time >= 0)
    {
        console.log(time)
        time = time -1
    }
}, 1000)
// 96
// VM1427:5 10
// VM1427:5 9
// VM1427:5 8
// VM1427:5 7
// VM1427:5 6
// VM1427:5 5
// VM1427:5 4
// VM1427:5 3
// VM1427:5 2
// VM1427:5 1
// VM1427:5 0

let time2 = 180

setInterval(function() {
    if(time2 >=0)
    {
        let min = Math.floor ( time2 / 60 )
        let sec = time2 % 60
        console.log(min + ":" + sec)
        time2 = time2 - 1
    }
},1000)