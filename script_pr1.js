"use strict";
/* 1 */
var a = 1;
var b = 2;
var c = 4;
if (typeof(a) == "string") {
    console.log(b + c)
} else {
    console.log(a + b)
}
Ответ: b + c //6
var a = 1;
var b = 2;
var c = 4;
Ответ: a + b //3

/* 2 */
let hello = "Я JavaScript!";
console.log(hello);

let admin;
let name = "John";
admin = name;
console.log(admin);

/* 3 */
let currentUserNme = prompt("Write your name", ' ');
alert(`Your name is ${currentUserNme}`);

alert(alert(1) || 2 || alert(3));

let age = 20;
if (age >= 14 || age <= 90) {
    console.log("Yes");
} else {
    console.log("No");
}

let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass == '' || pass == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName == '' || userName == null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}
let a;
let result = (a !== null && a !== undefined) ? a : b;

/* Сгенерировать число от 0 до 100.
Сгенерировать число от 10 до 20.
Math.random()
Math.floor() */

let min = 0,
    max = 100;

console.log(Math.floor((Math.random() * (max - min)) + min));

let min = 10,
    max = 20;

console.log(Math.floor((Math.random() * (max - min)) + min));

/* В переменной min лежит число от 0 до 59. 
Определите в какую четверть часа попадает это число 
(в первую, вторую, третью или четвертую). */

let min = 0,
    max = 59;
let value = Math.floor((Math.random() * (max - min)) + min)
console.log(value);

/* 1 */
switch (true) {
    case (value >= 1 && value <= 15):
        console.log("1");
        break;
    case (value > 15 && value <= 30):
        console.log("2");
        break;
    case (value > 30 && value <= 45):
        console.log("3");
        break;
    case (value > 45 && value <= 59):
        console.log("4");
        break;
    default:
        console.log('Wrong value');
}
/* 2 */
if (value <= 15) {
    console.log("1");
} else if (value > 15 && value <= 30) {
    console.log("2");
} else if (value > 30 && value <= 45) {
    console.log("3");
} else {
    console.log("4");
}

/* Если переменная a равна или меньше 1,
 а переменная b больше или равна 3, то выведите сумму этих переменных,
иначе выведите их разность (результат вычитания). 
Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5. */

let a = 3,
    b = 5;
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

/* Если переменная a равна '1' и по значению и по типу, то выведите 'Верно',
иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном '1', 1, 3. */

let numbA = 3;
if (numbA === "1") {
    console.log("Верно");
} else {
    console.log("Неверно");
}

/* Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при test, равном true, false. 
Напишите два варианта скрипта - с короткой записью и с длинной. */

let text = false;
if (text !== true) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

/* Создать файл "*.js". Подключить его к файлу "index.html" в нижнюю часть <body>
с использованием тэга <script>. 
Протестировать работу диалоговых окон alert(), prompt(), confirm().
 
Спросим у пользователя имя.  Спросим возраст. Выведем текст:
Привет, ...! Вам ... лет. */

alert("Hello");
confirm("World");
prompt("How old are you ?", "");

let userName = prompt("Как тебя зовут?", "");
let userYear = +prompt("Сколько тебе лет?", "");
alert(`Привет ${userName}` + ` ! ` + `Вам ${userYear} лет`);

/* switch and case */

var b = 105;
switch (true) {
    case (b <= 100 && b > 95):
        console.log('A');
        break;
    case (b <= 95 && b > 85):
        console.log('B');
        break;
    case (b <= 84 && b > 75):
        console.log('C');
        break;
    case (b <= 74 && b > 65):
        console.log('D');
        break;
    case (b <= 64 && b > 60):
        console.log('E');
        break;
    case (b > 0 && b <= 59):
        console.log('E');
        break;
    default:
        console.log('Wrong value');
}

/* Homework */

/* Если переменная a больше 2-х и меньше 11-ти, или переменная b больше 
или равна 6-ти и меньше 14-ти, то выведите ‘Верно‘, 
в противном случае выведите ‘Неверно’. */

let a = 2,
    b = 1;

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

/* Если переменная a равна нулю или равна двум, то прибавьте к ней 7, 
иначе поделите ее на 10. Выведите новое значение переменной на экран. 
Проверьте работу скрипта при a, равном 5, 0, -3, 2. */

let a = 1;
if (a === 0 || a === 2) {
    console.log(a + 7);
} else {
    console.log(a / 10);
}

/* В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). */
let min = 1,
    max = 12;
let month = Math.floor(Math.random() * (max - min)) + min;
console.log(month);
/* 1 */
switch (true) {
    case (month == 12):
        console.log("зима");
        break;
    case (month >= 1 && month <= 2):
        console.log("зима");
        break;
    case (month >= 3 && month <= 5):
        console.log("весна");
        break;
    case (month >= 6 && month <= 8):
        console.log("лето");
        break;
    case (month >= 9 && month <= 11):
        console.log("осень");
        break;
    default:
        console.log('Wrong value');
}

/* 2 */
let min = 1,
    max = 12;
let month = Math.floor(Math.random() * (max - min)) + min;
console.log(month);
if (month == 12 || month >= 1 && month <= 2) {
    console.log("зима");
} else if (month >= 3 && month <= 5) {
    console.log("весна");
} else if (month >= 6 && month <= 8) {
    console.log("лето");
} else if (month >= 9 && month <= 11) {
    console.log("осень");
} else {
    console.log('Wrong value');
}

/* У прямоугольного треугольника две стороны 
n (со значением 3) и m (со значением 4). 
Найдите гипотенузу k по теореме Пифагора
Подсказка: нужно использовать функцию Math  
или оператор возведения в степень */
/* 1 */
let n = 3,
    m = 4,
    k = (n ** 2) + (m ** 2);
console.log(k);

/* 2 */
let n = 3,
    m = 4,
    k = Math.pow(n, 2) + Math.pow(m, 2);
console.log(k);