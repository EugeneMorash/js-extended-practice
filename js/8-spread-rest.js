// * ===== spread (оператор расширения) ===== * //

// Пример с массивами
const arrayNumbers = [4, 5, 6, 3, 1, 0, 9];

const arrayList = [44, 3, 22, 5, 77, 4];

console.log(arrayList);
console.log(arrayNumbers);

// ES5
const summaryArray = arrayNumbers.concat(777, arrayList);
console.log(summaryArray);

// ES6
// 1. Неглубокое копирование

const copyArray = [...arrayList];
console.log(copyArray === arrayList); // false

// 2. Склеивание массивов

const sumArray = [...arrayNumbers, 777, ...arrayList];
console.log(sumArray);

// 3. Преобразование к типу

const divArray = document.querySelectorAll("div");
console.log(divArray); // NodeList - не работает на нём reduce, map, filter ...
// Только forEach работает

// Раньше использовали:
console.log(Array.from(divArray)); // array
// Сейчас можно:
console.log([...divArray]);

// Работа с объектами

const user = {
  name: "Mark",
  age: 29,
  cities: "LA",
};
const person = {
  name: "Pavel",
  age: 30,
  city: "LA",
};

// console.log(...user); // TypeError
console.log({ ...user }); // Copy object - неглубокое

// Склеивание
const newObj = { ...user, test: true, ...person };
console.log(newObj);


// Раньше Object.Assign(user, {test: true}, person)

// * ===== rest-оператор (остаточные параметры) ===== * //

// 1.
function sum(a, b, ...arr) {
  if (arr.length === 0) {
    return a + b;
  }
  return (
    a +
    b +
    arr.reduce((prValue, value) => {
      return prValue + value;
    })
  );
}

console.log(sum(6, 7, 5, 6, 5, 6));

// 2. Используется в деструкторизации
function calc(a, b) {
  return [a + b, a - b, a * b, a / b, null];
}

// ...other - rest-оператор
const [num1, num2, ...other] = calc(14, 7);
console.log(num1);
console.log(num2);
console.log(other);
