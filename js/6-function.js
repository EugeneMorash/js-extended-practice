// Function Declaration
// Function Expression
// Arrow Function (this, arguments, super)
// Pure Function
// High Order Function (HOF) - callback

const arrowFunc = function () {
  // console.log(arguments); // Object 
  const array = Array.from(arguments); // Object to Array
  // console.log(array);

  return array.map(value => {
    return value * 5;
  });
};
console.log(arrowFunc(3, 5, 7));



console.log(calc(3, 5)); // Могу вызвать где хочу

function calc(a, b) {
  return a + b;
}


let c = 77;
const caclTwo = function (a, b) {
  c = 10;
  document.body.style.backgroundColor = 'tomato';
  return a + b;
}
console.log(caclTwo(3, 7));


// Чистая функция (Pure Function)
// 1. Возвращаемое значение зависит только от аргументов функции

// 2. У функции нет побочных эффектов (любое изменение внешнего кода/ состояния)
// Побочные эффекты
// 1. Запись в глобальную переменную
// 2. Обновление дерева DOM
// 3. Запись в КЭШ (localStorage)
// 4. Запись в БД
// 5. Изменение аргументов (el.innerHTML)
// 6. Использование ассинхронного кода (setTimeout, fetch ...)
// 7. Мутировать объект/ массив

let num = 10;

function xx2(number) {
  return number ** 2;
}
console.log(xx2(num));


// Рекурсия 
// ** - pow(num, power);
// Написать функцию, которая возводит в степень

function pow(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number; // result = result * number
  }
  return result;
}
console.log(pow(2, 10));


// function recPow(number, power) {
//   if (power === 1) {
//     return number;
//   } else {
//     let temp = recPow(number, power - 1);
//     console.log(temp);
//     return number * temp;
//   }
// }
// console.log(recPow(2, 10));

function testPow(x, n) {
  return n === 1 ? x : (x * pow(x, n - 1));
}
console.log(testPow(2, 10));



