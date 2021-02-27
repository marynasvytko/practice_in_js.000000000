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