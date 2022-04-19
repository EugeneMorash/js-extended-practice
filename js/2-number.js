// * ===== Number ===== * //

// +
// - * / % **
// ( ) - порядок действия


// += *= /= **= %=


let number = 10;
number %= 10;
// number = number % 10;

// !Применяет только к переменным!
// ++i / i++
// --i / i--


let i = 1;
// console.log(i++);
// console.log(++i);

// console.log(5++); // SyntaxError

console.log(1 + i++ + 1 + ++i);
// 1 + 1 + 1 + 3


// Проверить на NaN?
console.log(isNaN(NaN));


// * ===== Math ===== * //
console.log(5 ** 1 / 2); // 2.5
console.log(5 ** (1 / 2)); // 2.236
console.log(Math.sqrt(5)); // 2.236

console.log(Math.max(3, -5, 7, 0, 1, 3, 4));
console.log(Math.min(3, -5, 7, 0, 1, 3, 4));

const array = [3, -5, 7, 0, 1, 3, 4]
console.log(...array);
console.log(Math.max(array)); // NaN
console.log(Math.max(...array));

// Модуль
console.log(Math.abs(3 - 9));


// Округление до целово числа
console.log(Math.floor(3.999)); // 3
console.log(Math.ceil(3.001)); // 4
console.log(Math.round(3.5)); // 4

// Округление до конкретного знака (string)
let testValue = 3.4235674;
console.log(testValue.toFixed(3)); // '3.424'
console.log();


// ГСЧ
console.log(Math.random()); // 0 .. 1 НЕ вкл

// Преобразование к типу Number
let str = "10.5em";

console.log(Number(str)); // NaN
console.log(parseInt(str)); // 10
console.log(parseFloat(str)); // 10.5


// Неточность вычисления
console.log(0.1 + 0.2);
console.log(0.3);
console.log(0.1 + 0.2 === 0.3); // false







































