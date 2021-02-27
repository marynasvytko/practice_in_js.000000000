"use strict";
/* Array */
/*Создайте массив arr = ['a', 'b', 'c', 'd'] 
и с его помощью выведите на экран строку 'a+b, c+d' */
let arr = ['a', 'b', 'c', 'd'];

console.log(arr[0] + "+" + arr[1], arr[2] + "+" + arr[3]);
/* Создайте массив arr с элементами 2, 5, 3, 9. 
 Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
 Результаты сложите, присвойте переменной result. 
 Выведите на экран значение этой переменной. */
let arr = [2, 5, 3, 9];
let num_1 = arr[0] * arr[1];
let num_2 = arr[2] * arr[3];
let resul = num_1 + num_2;
console.log(resul);

/*  Задать одномерный массив из n=5 элементов
Вывести:
   - удвоенное значение третьего элемента
   - сумму первого и последнего
   - удвоенное произведение всех элементов массива
   - сумму квадратов отрицательных элементов  */
let arr = [1, -2, 3, 4, -5];
let sum = 0;
console.log(arr[2] * 2, arr[0] + arr[(arr.length - 1)]);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
    if (arr[i] < 0) {
        sum += arr[i] ** 2;
    }
}
console.log(sum);

/* В заданном одномерном массиве:
- ввести номер позиции и вывести элемент массива на этой позиции
- все четные элементы заменить на ноль
- все элементы на нечетных позициях заменить на 1
- минимальное и максимальное значения поменять местами */

let arr = [1, 2, 3, 4, 5, 6];
//alert(arr);
console.log(arr);
let get = +prompt('ввести номер позиции', '');
alert('элемент массива' + arr[get]);
while (!get) {
    get = +prompt('ввести номер позиции', '');
}
console.log('элемент массива' + arr[get]);
let position = 0;

for (let i = 0; i < arr.length; i++) {

    let zero = 0,
        one = 1;
    if (position % 2 != 0) {
        arr[i] = one;
    } else {
        arr[i] = zero;
    }
    position++;
}
console.log(arr);

let arr3 = [1, 2, 3, 4, 5, 6],
    max = arr3[0],
    min = arr3[0],
    max_i = 0,
    min_i = 0,
    rec_1 = 0,
    rec_2 = 0;
for (let i = 0; i < arr3.length; i++) {
    if (max <= arr3[i]) {
        max = arr3[i];
        max_i = i;
    }
    if (min >= arr3[i]) {
        min = arr3[i];
        min_i = i;
    }
    rec_1 = arr3[min_i];
    rec_2 = arr3[max_i];
    arr3[min_i] = rec_2;
    arr3[max_i] = rec_1;
}
console.log(max, min, arr3);



/* Перестановка элементов одномерного массива 
(первуй с последним, второй с предпоследним и т.д. */
let arr = [2, 3, 1, 4, 8, 9];
console.log(arr);
let copy = 1;
for (let i = 0; i < arr.length; i++) {

    if (i <= (arr.length / 2)) {
        arr[i] = arr[arr.length - copy];
    } else {
        arr[i] = arr[(arr.length / 2) - copy];
    }
    copy++;
}
console.log(arr);

let arr = [2, 3, 1, 4, 8, 9];

for (let i = 0; i < arr.length / 2; i++) {
    let h = arr[i];

    const index = arr.length - (1 + i);

    arr[i] = arr[index];
    arr[index] = h;
}

console.log(arr);
/* Подсчитать количество четных чисел на диагоналях двумерного массива */
let arr = [
        [3, 0, 1, 1],
        [0, 0, 1, 1],
        [0, 2, 0, 0],
        [1, 0, 0, 4]
    ],
    sum = 0;
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        if (i === j && arr[i][j] % 2 === 0) {
            sum++;
        }
    }
}
console.log(sum);