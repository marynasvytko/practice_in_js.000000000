"use strict";

/* Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
Создайте для этого вспомогательную функцию isPositive(), 
которая параметром будет принимать число 
и возвращать true, если число положительное, и false - если отрицательное. */

let arr = [13, 0, 1, -9, -7, 2],
    lengthArr = arr.length,
    arrBoolean = [],
    arrPlus = [];

function isPositive(item) {
    if (item >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(3));

function devElements() {
    for (let i = 0; i < lengthArr; i++) {
        if (isPositive(arr[i])) {
            arrPlus.push(arr[i]);
        }
    }
    return arrPlus;
}
console.log(devElements(arr));

/* Напишите функцию range(), принимающую два аргумента: начало и конец диапазона, 
и возвращающую массив, который содержит все числа из диапазона, 
включая начальное и конечное. Третий необязательный аргумент функции range() – 
шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом: например, 
range(5, 2, -1) возвращает [5, 4, 3, 2]. */
// step = 1 or -1
function range(begin, end, step) {
    let number = begin;
    let arr = [],
        length = 0;
    if (begin > end) {
        length = begin - end;
        for (let i = 0; i <= length; i++) {
            arr[i] = number;
            number--;
        }
        if (step < 0) {
            arr.reverse();
        }
    } else {

        length = end - begin;
        for (let i = 0; i <= length; i++) {
            arr[i] = number;
            number++;
        }
        if (step < 0) {
            arr.reverse();
        }
    }
    return arr;
}

/* Сделайте функцию getDivisors, 
которая параметром принимает число и возвращает массив его делителей 
(чисел, на которое делится данное число). */

function getDivisors(number) {
    let arr = [],
        devideby = 1;
    for (let i = 0; i < number; i++) {
        if (number % devideby == 0) {
            arr.push(devideby);

        }
        devideby++;
    }
    return arr;
}

console.log(getDivisors(6));

/* Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
Функция должна возвращать true или false. */


/* Напишите функцию hello2(), которая при вызове будет принимать переменную name 
(например, «Василий») и выводить строку 
(в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость» */
let hello = "Привет,",
    guesst = "гость";

function hello2(name) {
    if (!name) {
        return guesst;
    } else {
        return name;
    }
}
console.log(hello + hello2('Василий'));

/* Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, 
делать первый символ этой строки заглавным 
и возвращать обратно строку с заглавной первой буквой. */

let str = 'var_text_hello',
    arr = str.split("_"),
    str_new = "";
//varTextHello
for (let i = 0; i < arr.length; i++) {
    if (i != 0) {
        str_new += ucfirst(arr[i]);
    } else {
        str_new += arr[0];
    }
}

function ucfirst(word) {
    let upper = word[0].toUpperCase() + word.slice(1);
    return upper;
}
console.log(str_new);