"use strict";
//Array
/* Создайте двумерный массив, размером 4 х 4. 
Заполните его случайными величинами в интервале от 20 до 150. 
Напишите программу, которая находит максимальный и минимальный элементы массива. */

let arr = [];
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        let min = 20;
        let max = 150;
        arr[i][j] = Math.floor(Math.random() * (max - min) + min);
    }
}
let max = arr[0][0],
    min = arr[0][0];
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (min >= arr[i][j]) {
            min = arr[i][j];
        }
        if (max <= arr[i][j]) {
            max = arr[i][j];
        }
    }
}
console.log(arr);
console.log(max, min);

/* Задать массив 2 х 4 . 
Из него сформировать два одномерных массива: элементы первого - 
сумма положительных элементов по строкам; 
элементы второго - количество отрицательных по столбцам. */

let arr = [
    [1, -6, 3, -2],
    [8, -9, 0, -2]
];
let arr1 = [],
    arr2 = [];
for (let i = 0; i < 2; i++) {
    let sum = 0;
    for (let j = 0; j < 4; j++) {
        if (arr[i][j] > 0) {
            sum += arr[i][j];
        }
    }
    arr1.push(sum);
}
console.log(arr1);
for (let j = 0; j < 4; j++) {
    let num = 0;
    for (let i = 0; i < 2; i++) {
        if (arr[i][j] < 0) {
            num++;
        }
    }
    arr2.push(num);
}

console.log(arr2);
let arr = [
    [1, -6, 3, -2],
    [8, -9, 0, -2]
];
let arr1 = [],
    arr2 = new Array(4);
for (let i = 0; i < 2; i++) {
    let sum = 0;

    for (let j = 0; j < 4; j++) {
        let arr2 = [];
        if (arr[i][j] > 0) {
            sum += arr[i][j];
        }
        if (i === 0) {
            arr2[j] = 0;
        }
        if (arr[i][j] < 0) {
            arr2[j]++;
        }
    }
    arr1.push(sum);
}
console.log(arr2);
/* Пусть дан квадратный двумерный массив A[n][n]. 
Необходимо элементам, находящимся на главной диагонали проходящей из 
левого верхнего угла в правый нижний 
(то есть тем элементам A[i][j], для которых i==j) присвоить значение 1, 
элементам, находящимся выше главной диагонали – значение 0, элементам, 
находящимся ниже главной диагонали – значение 2. 
То есть получить такой массив (пример для n==4):
1 0 0 0
2 1 0 0
2 2 1 0
2 2 2 1 */
let arr = [
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5]
];
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (i == j) {
            arr[i][j] = 1;
        }
        if (i < j) {
            arr[i][j] = 0;
        }
        if (i > j) {
            arr[i][j] = 2;
        }
    }
}
console.log(arr);

/*Создать два массива: countries – с названием стран, и population – 
с населением этих стран. Вывести название страны и ее население  */

// in index.html -> <div id='number'></div>
let countries = ['Japan', 'Russia', 'Ukrain', 'China'],
    population = ['1000000', '2500000', '64613154', '643134'],
    divHtml = '';

for (let i = 0; i < countries.length; i++) {
    divHtml += (`<div>${countries[i]} : ${population[i]}</div>`);
}
showElement = document.getElementById('number').innerHTML = divHtml;

/* Отсортировать массив, заполненный случайными числами, 
по возрастанию. Для сортировки использовать метод "пузырька". 
Вывести на экран массив в исходном и отсортированном виде. */
let arr = [];
for (let i = 0; i < 6; i++) {
    let max = 10,
        min = 0;
    arr[i] = Math.floor(Math.random() * (max - min) + min);
}
console.log(arr);
let per = -1;
while (per !== 0) {
    per = 0;
    for (let i = 0; i < 6; i++) {

        if (arr[i] > arr[i + 1]) {
            let zam = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = zam;
            console.log(arr[i], arr[i + 1]);
            per++;
        }
        console.log(arr);
    }
}