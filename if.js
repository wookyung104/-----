const age = parseInt( prompt("How old are you?") );
//prompt는 사용자에게 message를 보내고 값을 넣으라고 하는 function

//parseInt는 string을 number로 변환해줌

if(isNaN(age) || age < 0) { //condition은 boolean, isNan은 boolean을 반환
    console.log("Please write a real positive number."); // || => OR
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50){ // && => AND의 의미
    console.log("You can drink.");
} else if(age > 50 && age <= 80) {
    console.log("You shoule excercise.");
} else if(age === 100) {
    console.log("Wow you are wise.");
} else if(age > 80) {
    console.log("You can do whatever you want.");
}

// = => value를 할당
// === => 같은지 확인
// !== => 같지 않음을 확인

