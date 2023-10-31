//  데이터 타입, 연산자 연습
1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || true
// true
true && false
// false
true || false
// true
!false
// true
!true
// false

// 조건문
if(1 + 1 === 2){
    console.log("정답입니다.")
    }
    else{
        console.log("틀렸습니다.")
    }
    // VM328:2 정답입니다.
    undefined
    if(true){
    console.log("정답입니다.")
    }
    else{
        console.log("틀렸습니다.")
    }
    // VM341:2 정답입니다.
    undefined
    if(!true){
        console.log("정답입니다.")
    }
    else{
        console.log("틀렸습니다.")
    }
    // VM364:5 틀렸습니다.
    undefined
    if(0){
        console.log("정답입니다.")
    }
    else{
        console.log("틀렸습니다.")
    }
    // VM372:5 틀렸습니다.
    //  0 => 거짓같은 값으로 false가 나옴

    const profile = {
        name : "철수",
        age : 12,
        school:"다람쥐초등학교"
    }
    // undefined
    if (profile.age >= 20){
        console.log("성인입니다.")
    } else if (profile.age >= 8){
        console.log("학생입니다.")
    } else {
        console.log("어린이입니다.")
    }
    // VM869:4 학생입니다.
    // undefined
    if (profile.age >= 20){
        console.log("성인입니다.")
    } else if ((profile.age <= 19) && (profile.age >= 8)){
        console.log("학생입니다.")
    } else {
        console.log("어린이입니다.")
    }
    // VM909:4 학생입니다.
    // undefined
    if (profile.age >= 20){
        console.log("성인입니다.")
    } else if ((profile.age <= 19) && (profile.age >= 8)){
        console.log("학생입니다.")
    } else if(profile.age > 0) {
        console.log("어린이입니다.")
    } else {
        console.log("잘못 입력하셨습니다.")
    }
    // 학생입니다.

    