// РЕКУРСИЯ ЭТО КОГДА ФУНКЦИЯ ВЫЗЫВАЕТ САМА СЕБЯ;
let i = 0;

function printNumb(){
    console.log(i++);
    if(i <= 5){
        printNumb(); // Если i <= 5 то вызываем саму функцию
    }
};

printNumb();

// ЧИСЛА ФИБОНАЧЧИ (ПРИ ПОМОЩИ РЕКУРСИИ).
// Допустим в N попало число 5, чтобы получить сумму предыдущих чисел то,
// на 20 строке n-1 получаем 4 + n - 2 получаем 3 = равно 5.
// БЛАГОДАРЯ УСЛОВИЮ МОЖНО ВЫЙТИ ИЗ РЕКУРСИИ.
function fib(n){
    if(n <= 1) {
        return n;
    };
    return fib(n-1) + fib(n - 2);
};

let result = fib(4);
console.log(result); // 3.

// ЗАМЫКАНИЕ.
// ЗАМЫКАНИЕ ЭТО ФУНКЦИЯ КОТОРАЯ МОЖЕТ ОБРАЩАТЬСЯ К ПЕРЕМЕННЫМ КОТОРЫЕ НАХОДЯТСЯ ВНУТРИ ФУНКЦИИ.
// ГЛОБАЛЬНУЮ ПЕРЕМЕННУЮ МОЖНО ПЕРЕБИТЬ ИЗ ДРУГИХ ФАЙЛОВ.
// Глобальную переменную можно убрать в локальную во внутрь функции.
// Функция надо рассматривать как функцию и ее окружение, тоесть переменные.   
function counter() {
    // КАК БЫ ЗАМКНУЛИ ЛОКАЛЬНУЮ ПЕРЕМЕННУЮ A, И ИСПОЛЬЗУЕМ НА НЕЙ ФУНКЦИЮ.
    // В ОБЩЕМ SCOOPE ОНА ВИДНА НЕ БУДЕТ.
    let a = 0; // Локальная переменная.
    return function(){ // Анонимная функция.
        a++;
        console.log(a);
    };
    // a++;
    // console.log(a); - 1 по 6 раз (Потому что a = 0, a++ = 1, console.log(a));.
};

let res = counter();
console.log(res); // Равен просто функции, чтобы это исправить res надо вызвать как функцию.
// ТАК КАК ФУНКЦИЯ COUNTER ВОЗВРАЩАЕТ ДРУГУЮ ФУНКЦИЮ, КОГДА МЫ ОБЬЯВЛЯЕМ ЭТО В ПЕРЕМЕННУЮ,
// ТО ПЕРЕМЕННУЮ НАДО ВЫЗЫВАТЬ КАК ФУНКЦИЮ.
res(); // 1.
// ВЫВОД ОТ 1 ДО 6, ПОТОМУ ЧТО 6 РАЗ ВЫЗВАЛИ ФУНКЦИЮ. 
counter();
counter();
counter();
counter();
counter();
counter();

// ВЛОЖЕННЫЕ ФУНКЦИИ.
// Иногда надо использовать спомогательные функции внутри основной.
function printName(firstName, lastName){

    function printFullName(){
        // Возвращает fName + lName, которая передается параметрами в основную функцию.
        // ФУНКЦИИ МОЖНО ПРЯТАТЬ ВНУТРИ ФУНКЦИИ, КАК И С ПЕРЕМЕННЫМИ НЕ БУДУТ ГЛОБАЛЬНЫМИ.
        return firstName + lastName;
    };

    console.log(' My name is ' + printFullName());

};

printName('Sergey', 'Demin'); // My name is SergeyDemin.

// ТОЖЕ САМОЕ ЕСЛИ ИСПОЛЬЗОВАТЬ ОДНУ ФУНКЦИЮ.
function printFullName(firstName, lastName){
    
    return firstName + lastName;

};

let rez = printFullName('Sergey', 'Demin');
console.log(rez); // Sergey Demin.

// CALL / APPLY / BIND.
// (не вырывай фразу из контекста).
function printWord(){
    console.log(this) // this указывает текущий обьект.
};

let user1 = {
    name: 'Danil',
    foo: printWord 
};

let user2 = {
    name: 'Kostja',
    foo: printWord
};

// THIS ДИНАМИЧЕН УКАЗЫВАЕТ НА РАЗНЫЕ ФУНКЦИИ. 
user1.foo(); // Danil. Обьект и функцию printWord;
user2.foo(); // Kostja.
printWord(); // ПОЛУЧИЛИ ГЛОБАЛЬНЫЙ ОБЬЕКТ WINDOW, получили всего его свойства.


