function plus(){
    let num1;
    let num2;
    let result
    num1=document.getElementById('number1').value;
    num1=Number(num1);
    num2=document.getElementById('number2').value;
    num2=Number(num2);
    result = num1+num2 ;
    document.getElementById('answer').innerHTML=result;
}
function minus(){
    let num1;
    let num2;
    let result
    num1=document.getElementById('number1').value;
    num1=Number(num1);
    num2=document.getElementById('number2').value;
    num2=Number(num2);
    result = num1-num2 ;
    document.getElementById('answer').innerHTML=result;
}
function multiplication(){
    let num1;
    let num2;
    let result
    num1=document.getElementById('number1').value;
    num1=Number(num1);
    num2=document.getElementById('number2').value;
    num2=Number(num2);
    result = num1*num2 ;
    document.getElementById('answer').innerHTML=result;
}
function division(){
    let num1;
    let num2;
    let result
    num1=document.getElementById('number1').value;
    num1=Number(num1);
    num2=document.getElementById('number2').value;
    num2=Number(num2);
    result = num1/num2 ;
    document.getElementById('answer').innerHTML=result;
}
//задача 1.2
const calcBtn =document.querySelector('calck__btn')
function calk() {
    const operator = prompt('Обери оператора  ( +, -, * , / ): ');
    const number1 = parseFloat(prompt('Число 1: '));
    const number2 = parseFloat(prompt('Число 2: '));

    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else {
        result = number1 / number2;
    }

    return alert(`${number1} ${operator} ${number2} = ${result}`);
}
