const player = {
    name: "kwk",
    age: 24
};

console.log(player);
player.name = "Wookyung";
console.log(player);
player.sexy = "soon";
console.log(player);

// 간단 계산기
const calculator = {
    add: function(a ,b) {
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    devine: function(a, b){
        console.log(a / b);
    },
    multi: function(a, b){
        console.log(a * b);
    },
    powerof: function(a, b){
        console.log(a**b);
    }
};

calculator.add(5, 10);
calculator.minus(5, 10);
calculator.devine(5, 10);
calculator.multi(5, 10);
calculator.powerof(5, 10);
// a+b, a-b, a / b, a**b powerof