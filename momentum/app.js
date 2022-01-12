function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lynn", 30);


function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divine(a, b) {
    console.log(a / b);
}

plus(6, 60);
divine(30, 20);


const player = {
    name: "kwk",
    sayHello: function(otherMyName) {
        console.log("Hello " + otherMyName + " nice to meet you");
    }
};

console.log(player.name);
player.sayHello("lynn");




