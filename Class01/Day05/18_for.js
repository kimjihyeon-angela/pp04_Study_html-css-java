const children = ["철수", "영희", "훈이"]
// undefined
for (let i = 0; i<3; i++{
    console.log(children[i] + "입니다.")
}
// VM1429:1 Uncaught SyntaxError: Unexpected token '{'
for (let i = 0; i<3; i++;){
    console.log(children[i] + "입니다.")
}
// VM1437:1 Uncaught SyntaxError: Unexpected token ';'
for (let i = 0; i<3; i++){
    console.log(children[i] + "입니다.")
}
// VM1440:2 철수입니다.
// VM1440:2 영희입니다.
// VM1440:2 훈이입니다.
// undefined
for (let i = 0; i<children.length-1; i++){
    console.log(children[i] + "입니다.")
}
// VM1461:2 철수입니다.
// VM1461:2 영희입니다.
// undefined
for (let i = 0; i<children.length; i++){
    console.log(children[i] + "입니다.")
}
// VM1487:2 철수입니다.
// VM1487:2 영희입니다.
// VM1487:2 훈이입니다.

let persons = [
    {name: "철수", age:17},
    {name: "영희", age:22},
    {name:"도우너", age: 5},
    {name:"그루트", age: 64},
    {name:"도비", age:3}
]
// undefined
for(let i = 0; i < persons.length; i++){
    if (persons[i].age >= 19) {
        console.log("성인입니다.")
    } else {
        console.log("미성년자입니다."
    }
}
// VM1973:5 Uncaught SyntaxError: missing ) after argument list
for(let i = 0; i < persons.length; i++){
    if (persons[i].age >= 19) {
        console.log("성인입니다.")
    } else {
        console.log("미성년자입니다.")
    }
}
// VM1978:5 미성년자입니다.
// VM1978:3 성인입니다.
// VM1978:5 미성년자입니다.
// VM1978:3 성인입니다.
// VM1978:5 미성년자입니다.
// undefined
for(let i = 0; i < persons.length; i++){
    if (persons[i].age >= 19) {
        console.log(persons[i].name + "님은 성인입니다.")
    } else {
        console.log(persons[i].name + "님은 미성년자입니다.")
    }
}
// VM2076:5 철수님은 미성년자입니다.
// VM2076:3 영희님은 성인입니다.
// VM2076:5 도우너님은 미성년자입니다.
// VM2076:3 그루트님은 성인입니다.
// VM2076:5 도비님은 미성년자입니다.

const fruit = [
    {number : 1 , title : "레드향"},
    {number : 2, title : "샤인머스켓"},
    {number : 3, title : "산청딸기"},
    {number : 4, title : "한라봉"},
    {number : 5, title : "사과"},
    {number : 6, title : "애플망고"},
    {number : 7, title : "딸기"},
    {number : 8, title : "천혜향"},
    {number : 9, title : "과일선물세트"},
    {number : 10, title : "귤"},    
]
// undefined
for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i].number + " " + fruit[i].title)
}
// VM2343:2 1 레드향
// VM2343:2 2 샤인머스켓
// VM2343:2 3 산청딸기
// VM2343:2 4 한라봉
// VM2343:2 5 사과
// VM2343:2 6 애플망고
// VM2343:2 7 딸기
// VM2343:2 8 천혜향
// VM2343:2 9 과일선물세트
// VM2343:2 10 귤
// undefined
for (let i = 0; i < fruit.length; i++){
    console.log(`${fruit[i].number} ${fruit[i].title}`)
}
// VM2361:2 1 레드향
// VM2361:2 2 샤인머스켓
// VM2361:2 3 산청딸기
// VM2361:2 4 한라봉
// VM2361:2 5 사과
// VM2361:2 6 애플망고
// VM2361:2 7 딸기
// VM2361:2 8 천혜향
// VM2361:2 9 과일선물세트
// VM2361:2 10 귤
for (let i = 0; i < fruit.length; i++){
    console.log(`과일차트 ${fruit[i].number}위는 ${fruit[i].title}입니다`)
}
// VM2384:2 과일차트 1위는 레드향입니다
// VM2384:2 과일차트 2위는 샤인머스켓입니다
// VM2384:2 과일차트 3위는 산청딸기입니다
// VM2384:2 과일차트 4위는 한라봉입니다
// VM2384:2 과일차트 5위는 사과입니다
// VM2384:2 과일차트 6위는 애플망고입니다
// VM2384:2 과일차트 7위는 딸기입니다
// VM2384:2 과일차트 8위는 천혜향입니다
// VM2384:2 과일차트 9위는 과일선물세트입니다
// VM2384:2 과일차트 10위는 귤입니다