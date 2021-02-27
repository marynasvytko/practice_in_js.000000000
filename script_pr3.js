"use strict";
/* for */
/* С помощью цикла найдите сумму чисел от 1 до 100. */

let sum = 0,
    numb = 1;

for (let i = 0; i < 100; i++) {
    sum += numb;
    numb++;
}
console.log(sum);

/* Ввести два числа a и b. Вычислить сумму четных
и количество нечетных чисел в диапазоне от a до b. */

let a = 1,
    sum_a = 0,
    numb_a = a,
    b = 5,
    sum_b = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        sum_a += i;

    } else {
        sum_b++;
    }
}
console.log(sum_a, sum_b);

/* Вывести все четырехзначные числа,
сумма цифр которых равна их произведению. */
for (let i = 100; i <= 999; i++) {
    let num = i;
    let num_10 = num % 10;
    let num_100 = Math.floor(num % 100 / 10);
    let num_1000 = Math.floor(num % 1000 / 100);
    let sum = 0;
    let dob = 0;
    sum = num_10 + num_100 + num_1000;
    dob = num_10 * num_100 * num_1000;
    if (sum == dob) {
        console.log(i);
    }
}
//  Вывести таблицу умножения числа 5 
// in index.html -> <div id='number'></div>
let showTable = document.getElementById("number"),
    divHtml = '';
for (let i = 1; i <= 10; i++) {
    let dob = i * 5;
    divHtml += `<div><p> ${i} x 5 = ${dob}</p></div>`;
}
document.getElementById("number").innerHTML = divHtml;

/* HOMEWORK */

/*Вывести на экран значения функции y=2x + x^2
на отрезке от –5 до 5 с шагом 0,2. */

let a = -5,
    b = 5;
for (let i = a; i < b; i += 0.2) {
    let y = 2 * i + Math.pow(i, 2);
    console.log(y);
}


/* Предложить пользователю указать свой возраст,
причём если возраст будет указан некорректно (меньше 5-ти или больше ста лет),
то предлагать осуществлять ввод до тех пор, пока не будет введено корректное значение.
Далее вывести сообщение:
если возраст меньше 25, то вывести сообщение "Вы молодой"
если возраст меньше 65 – "Вы зрелый", иначе – "Вы мудрый" */

let getUserAge = +prompt('Укажите свой возраст :', '');
while ((!getUserAge) && (getUserAge < 5 || getUserAge > 100)) {
    getUserAge = +prompt('Укажите свой возраст :', '');
}
if (getUserAge < 25) {
    alert("Вы молодой");
} else if (getUserAge < 65 && getUserAge >= 25) {
    alert("Вы зрелый");
} else {
    alert("Вы мудрый");
}

/*  Необходимо вывести все точные квадраты натуральных чисел, 
не превосходящие данного числа N.
Пример, N = 15
Ответ будет:
1
4
9 */
// in index.html -> <div id='number'></div>
let getNumber = +prompt('Введите число', ''),
    showNumber = document.getElementById("number"),
    divNumber = '';

for (let i = 1; i <= getNumber; i++) {
    let cubed = Math.pow(i, 2);
    if (cubed <= getNumber) {
        divNumber += `<div><p> ${cubed}</p></div>`;
    }
}
document.getElementById("number").innerHTML = divNumber;