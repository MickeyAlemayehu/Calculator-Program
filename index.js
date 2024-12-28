const display = document.getElementById("display");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const clear = document.getElementById("C");
const five = document.getElementById("five");
const six = document.getElementById("six");



function acceptInput (input){
    display.value += input;
}
add.onclick = () => acceptInput("+");
minus.onclick = () => acceptInput("-");
multiply.onclick = () => acceptInput("*");
divide.onclick = () => acceptInput("/");
one.onclick = () => acceptInput("1");
two.onclick = () => acceptInput("2");
three.onclick = () => acceptInput("3");
four.onclick = () => acceptInput("4");
five.onclick = () => acceptInput("5");
six.onclick = () => acceptInput("6");
seven.onclick = () => acceptInput("7");
eight.onclick = () => acceptInput("8");
nine.onclick = () => acceptInput("9");
zero.onclick = () => acceptInput("0");
decimal.onclick = () => acceptInput(".");

function compute(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = error;
        console.error(error);
    };   
}
equals.onclick = compute;
clear.onclick = function (){
    display.value = "";
}
