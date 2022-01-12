// let과 const의 차이는 let은 업데이트 가능

const a = 5; 
let nicoIsFat = true;

console.log(a);
nicoIsFat = false;


const toBuy = ["potato", "tamato", "pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);

//push는 추가기능
toBuy.push("banana");
console.log(toBuy);