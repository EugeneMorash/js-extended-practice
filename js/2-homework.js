
//* 1. Написать функцию randColorFromArr, на вход которой подаётся массив цветов, функция возвращает случайный цвет из этого массива.
// ['black', 'red', 'orange', 'blue', 'green', 'white', 'pink', 'violet', 'purple', 'yellow', 'cyan'];

const colorArr = ['black', 'red', 'orange', 'blue', 'green', 'white', 'pink', 'violet', 'purple', 'yellow', 'cyan'];

function randColorFromArr(arr) {
  const varColorNum = Math.floor(Math.random() * colorArr.length);
  return arr[varColorNum];
}
// const randElement = randColorFromArr(colorArr);
// console.log(randElement);


//* 2. Дополнение: Вернуть новый массив с 3 случайными цветами

function randElemArr(array) {
  const randElementArr = [];
  for (let i = 0; i < 3; i++) {
    const randElement = randColorFromArr(array);
    randElementArr.push(randElement);
  }
  return randElementArr;
}
// console.log(randElemArr(colorArr));


//* 3. Написать функцию, которая возвращает случайное число от 0 до maxValue НЕ включительно.

const randNum = maxValue => Math.floor(Math.random() * maxValue);
// console.log(randNum(5));


//* 4. Написать функцию, которая возвращает случайное число от minValue до maxValue включительно.

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomIntInclusive(3, 5));
// 0 max
// min max+min-min

//* Максимум и минимум включаются //* MDN


//* 5. Написать функцию, которая проверяет чётное ли число передали или нет. Функция возвращает true или false.

// const isEven = num => num % 2 === 0;
// console.log(isEven(3)); //* турок


//* 6. Написать функцию, которая проверяет делится ли переданное число на 144 или нет. Функция возвращает true или false.

// const isDivision = num => num % 144 === 0;
// console.log(isDivision(288));


//* 7. Написать функцию minValue, на вход которой подаётся массив чисел, функция возвращает минимальное значение. 

// FIXME: Done

const minValArr = [5, 8, 24, 6, 1, 32, 858, 56, 55];

function minValue(arr) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      result = arr[i];
    }
  }
  return result;
}
console.log(minValue(minValArr));

//* Дополнительно: решить задачу 2 способом: пользуясь внутри нашей функции Math.min()

// const minValueSecond = arr => Math.min(...arr);
// const minValueSecond = arr => Math.min.apply(null, arr);
//! то же с max
// console.log(minValueSecond(minValArr));


// Дополнительно сделать поиск анименьшего через условия


//* 8. Написать функцию, на вход которой может подаваться, как одно, так и много чисел. Функция возвращает самое большое число из переданных

// function maxValue(...nums) {
//   const maxArr = [];
//   maxArr.push(...nums);
//   return Math.max.apply(null, maxArr);
// }
// console.log(maxValue(8, 2, 15, 55, -888));


// * сделать через arguments

function maxValue(a, b) {
  console.log(a, b);
  console.log(arguments);
}
// maxValue(3, 5, 7);



//* 9. Написать функцию, на вход которой подаётся 2 параметра: 1 - число, 2 - строка (min, math, max)
// Функция округляет переданное число в зависимости от второго параметра
// min - в меньшую сторону
// math - по правилам округления математики
// max - в большую сторону

function rounding(num, roundValue) {
  // if (roundValue === "min") {
  //   return Math.floor(num)
  // } else if (roundValue === "math") {
  //   return Math.round(num)
  // } else if (roundValue === "max") {
  //   return Math.ceil(num)
  // } else {
  //   throw new Error("Not min-max-math!")
  // }

  switch (roundValue) {
    case "min":
      return Math.floor(num);

    case "math":
      return Math.round(num);

    case "max":
      return Math.ceil(num);

    default:
      throw new Error("Not min-max-math!");

  }

  // switch case
}
// console.log(rounding(2.23, "math"));


//* 10. Напишите функцию, которая сравнивает два числа с определенной погрешностью. Функция возвращает true, если числа равны иначе false
// Функция должна сравнивать как положительные, так и отрицательные числа
// Пример: compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true

// const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0)); //* habr //? 6*0

// function compareWithPrecision(num1, num2, numPrecision) {
//   const precision = numPrecision => (numPrecision.toString().includes(".") ? numPrecision.toString().split(".").pop().length : 0);
//   const numPr = precision(numPrecision);
//   console.log(precision(numPrecision));

//   const compare = (num1, num2) => num1.toFixed(numPr) == num2.toFixed(numPr) ? true : false;

//   return compare(num1, num2);
// }

function compareWithPrecision(a, b, precision) {
  return Math.abs(a - b) < precision;
  // 0.30004 - 0.3 = 0.00004 < 0.0001
}

// console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.00000000000000000001));


//* 11. Написать функцию, которая выводит в консоль числа от 1 до n, где n - целое число, которая принимает на вход функция
// При этом функция выводит 'Fizz' вместо чисел, кратных 3
// Выводит 'Buzz' вместо чисел, кратных 5
// И выводит 'FizzBuzz' вместо чисел, кратных как 3, так и 5

// Пример:
// functionName(5);
// console:
// 	1
// 	2
// 	'Fizz'
// 	4
// 	'Buzz'

function fizzBuzzFunc(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    }
  }
}
// fizzBuzzFunc(16);