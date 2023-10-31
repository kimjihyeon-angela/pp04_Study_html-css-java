Math.floor ( Math.random() * 1000000)
// 425329
// 0~1 사이의 숫자를 랜덤한 숫자를 6자리 숫자로 만들기 위함 
String(Math.floor ( Math.random() * 1000000))
// '919820'
// 0으로도 시작할 수 있게 만들기 위해 String 으로 변환
String(Math.floor ( Math.random() * 1000000)).padStart(6,"0")
// '050230'
// 숫자가 0으로 시작할 경우 5자리 숫자가 String으로 변환되기 때문에 padStart 사용
// padStart(원하는 자리수, 채울 수)
String(Math.floor ( Math.random() * 1000000)).padStart(6,"0")
// '230965'
let result = String(Math.floor ( Math.random() * 1000000)).padStart(6,"0")
// undefined
// 계속 String(Math.floor ( Math.random() * 1000000)).padStart(6,"0") 쓰면 코드가 너무 길어지기 때문에 result 변수에 저장
result
// '593509'
// result만 출력해주면 됨
// 현재 result에는 저장된 593509만 출력됨 값을 바꾸는 방법은 추후 추가할 예정