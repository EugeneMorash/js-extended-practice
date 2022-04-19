// * ===== Ошибки ===== * //

// 1. SyntaxError - неверный код (программа не запустится вообще)

// 2. ReferenceError - обращаемся неверно к переменной или несуществующей переменной

// 3. TypeError - обращаемся к типу number, как к функции, или ищем свойство у undefined (как у объекта)

// * logic error

console.log(1);
let number = 10;


function name() {
  const letter = 't';
  console.log(lette);
}

// console.log(4);
// console.log(numbe); // ReferenceError
// console.log(letter); // ReferenceError

// number(5); // TypeError
// console.log(number.length.upd); // TypeError


// call stack (стэк вызовов)
// at name (1-error-types.js:15:15)
// at 1-error-types.js:25:1

// name();

number = 'text';
console.log(number);

// * ===== Преобразование типов ===== * //

// Как проверить какой тип?
const testVar = '33.3px';
console.log(typeof testVar); // string
console.log(typeof NaN); // number
console.log(typeof []); // array

// Типы данных:

// number
// string
// boolean
// undefined
// null (object - известная ошибка)
// object
// function
// array (object) => Array.isArray(<array>)

// symbol

// * === Неявное преобразование
// Задача 1
// Укажите все значения NaN

// "17px" + 2       => "17px2"
// "17px" - 2       => NaN - 2 = NaN +++
// 3 * 4 * null     => 3 * 4 * 0 = 0
// '9px' / '3px'    => NaN +++
// true + false     => 1 + 0 = 1


console.log(Number('17'));
console.log(Number('17px'));
console.log(parseFloat('17px'));

// Унарный плюс
console.log(+'333'); // 333
// Унарный минус
console.log(-'333'); // -333

// Задача 2
// Укажите все случаи, когда typeof a === 'number'

// a = ' -3' + 4      // ' -34'
// a = '' - 7 + 11    // 4 +++
// a = 1 + 2 + ''     // '3'
// a = '77' - 77      // 0 +++

console.log(Number('')); // 0



// Укажите все значения для которых верно равенство

// Boolean(<value>) === true

// ''             -> false
// ' '            -> true
// 'text'         -> true

// 0              -> false
// 1              -> true
// 10             -> true
// -10            -> true
// Infinity       -> true
// NaN            -> false

// null           -> false
// undefined      -> false

// {}             -> true
// []             -> true
// [1]            -> true
// [0]            -> true
// { name: 'Pavel' }  -> true


// 4. Укажите все случаи, когда typeof === 'object' вернёт true

// null
// alert
// {}
// []

// 5. Укажите все значения для которых верно равенство:
// == false

// "false"
// undefined
// null
// "0"


// 1 - "3" + null + 22
// 1 - 3 + 0 + 22

// 1 - '3' - null + '22'
// '-222'