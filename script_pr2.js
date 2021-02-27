"use strict";
/*DOM js*/
/*Попросите пользователя ввести два числа a и b.  
Если переменная a больше 0 и меньше 20, 
или переменная b больше или равна 8 и меньше 15, то выведите 'Верно', 
в противном случае выведите 'Неверно'.
Вы ввели: <Значение, которое ввел пользователь>
Результат: <Верно/Неверно>
Вы ввели и Результат  - должны быть выделены жирным;*/
// in index.html -> <div id='text'></div>
let a = prompt("Введите первое значение", ""),
    b = prompt("Введите вторе значение", "");

let showElement = document.getElementById('text');

if (a > 0 && a < 20 || b >= 8 && b < 15) {
    showElement.innerHTML = `<div><b>Вы ввели:</b>${a}</div> <div><b>Вы ввели:</b>  ${b}</div div><b>Результат:</b> Верно</div>`;
} else {
    showElement.innerHTML = `<div><b>Вы ввели:</b>${a}</div> <div><b>Вы ввели:</b>  ${b}</div> <div><b>Результат:</b> Неверно</div>`;
}

/* Ввести значение ***. Найдите сумму цифр этого числа.
Вы ввели: 109
Вы ввели цифры: 1, 0 ,9
Сумма: 10 */
// in index.html -> <div id='number'></div>
let value = prompt("Введите трёхзначное число", "");
while (value < 100 || value > 999) {
    value = prompt("Введите новое трёхзначное число", "");
}

let showValue = document.getElementById('number'),
    division_10 = value % 10,
    division_100 = Math.floor(value % 100 / 10),
    division_1000 = Math.floor(value % 1000 / 100),
    sum = division_1000 + division_100 + division_10;

showValue.innerHTML = `<div><p>Вы ввели: ${value}</p></div> <div><p>Вы ввели цифры: ${division_1000}, ${division_100}, ${division_10}</p></div><div><p>Сумма: ${sum}</p></div>`;

/*Попросите пользователя ввести количество учеников поступающих 
в первый класс.  В одном классе может обучатся максимум 30 человек. 
Вывести на экран количество классов.
Для вывода не использовать console или alert.
Формат вывода
В первый класс поступает <Значение, которое ввел пользователь>
Будет сформировано <Результат> классов.
Значение и Результат  - должны быть выделены жирным */
// in index.html -> <div id='number'></div>
/* 1 */

let numberPupils = prompt('Введите количество учеников поступающих в первый класс.', '');
while (numberPupils <= 0 || numberPupils === null) {
    numberPupils = prompt('Введите заново количество учеников поступающих в первый класс.', '');
}
let showNumber = document.getElementById('number'),
    num_class = Math.ceil(numberPupils / 30);
showNumber.innerHTML = `<div>В первый класс учеников поступает: <b>${numberPupils}</b></div>` +
    `<div>Будет сформировано класов: <b>${num_class}</b></div>`;

/* 2 */
let numberPupils = prompt('Введите количество учеников поступающих в первый класс.', '');
while (numberPupils <= 0 || numberPupils === null) {
    numberPupils = prompt('Введите заново количество учеников поступающих в первый класс.', '');
}
let showNumber = document.getElementById('number'),
    num_class = 1,
    numb_p = numberPupils;
if (numberPupils <= 30 && numberPupils > 0) {
    showNumber.innerHTML = `<div>В первый класс учеников поступает: <b>${numberPupils}</b></div>` +
        `<div>Будет сформировано класов: <b>${num_class}</b></div>`;
} else {
    while (numb_p > 30) {
        ++num_class;
        numb_p -= 30;
    }
    showNumber.innerHTML = `<div>В первый класс учеников поступает: <b>${numberPupils}</b></div>` +
        `<div>Будет сформировано класов: <b>${num_class}</b></div>`;
}