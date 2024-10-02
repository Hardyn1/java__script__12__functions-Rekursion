// TASK 1.
/*

    Необходимо найти факториал числа 5 с помощью рекурсии.

    Факториал — это произведение всех натуральных чисел от 1 до данного числа.
    Например, факториал числа 5 будет равен 1 × 2 × 3 × 4 × 5 = 120.

*/

function factorial(r){

    if(r === 0){
        return 1;
    };

    return r * factorial(r-1);
};

let rezultat = factorial(5);
console.log(rezultat);

/*
    TASK 2

    Напишите функцию customSetInterval(funcToExecute, interval)
    с помощью рекурсии и setTimeout,
    которая будет повторять функционал встроенного метода customSetInterval
    встроенный метод customSetInterval принимает два аргумента:
    первый аргумент - это функция, которая выполняется через заданный интервал времени
    второй аргумент - это временной интервал в миллисекундах.

    функция для вызова:
    function executeMe() {
        console.log('123')
    }

    пример вызова вашей функции:  
    customSetInterval(executeMe, 1000)
    в результате в консоли каждую секунду будет выводиться строка 123
*/

function customSetInterval(funcToExecute, interval){

    funcToExecute();

    setTimeout(function(){
        customSetInterval(funcToExecute, interval)
    }, interval);


};

 function executeMe(){
        console.log('123');
    };

customSetInterval(executeMe, 1000);

/* 
    TASK 3

    Необходимо сделать часы с помощью setInterval и объекта Date. 
    Они должны быть в формате ЧАСЫ:МИНУТЫ:СЕКУНДЫ.
    И если у нас сейчас 1 час ночи, то должно показываться 01, а не просто 1. 
    Если сейчас время один час пять минут, 
    то у вас должно выводиться 01:05, а не 1:5

*/

let clock = document.getElementById('clock');



function todayDate(){

    let date = new Date();
    
    let hours = addZeroBefore(date.getHours());
    let mins = addZeroBefore(date.getMinutes());
    let secs = addZeroBefore(date.getSeconds());
   
    let fullDate = hours + ':' + mins + ':' + secs;
    document.getElementById('show-time').innerHTML = fullDate;
    console.log(clock.textContent);

}

todayDate();

function addZeroBefore(NUM){
    if(NUM <= 9){
        return '0' + NUM;
    } else {
        return NUM;
    };
};

addZeroBefore(todayDate, 1000);


setInterval(todayDate, 1000);


/* 

    TASK 4
    Создайте рекурсивную функцию, 
    которая принимает в качестве параметра целое положительное число n,
    введённое с клавиатуры,
    и возвращает сумму всех чисел от 1 до n.

*/

function recursion (n){
    if(n == 1) {
        return 1;
    } else {
        return n + recursion(n - 1);
    };
};

console.log(recursion(5));