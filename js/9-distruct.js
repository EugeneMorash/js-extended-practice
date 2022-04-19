// * ===== distructuring ===== * //

// Деструкторизация массива
function calc(a, b) {
  return [a + b, undefined, a * b, a / b, null];
}

// const result = calc(3, 7);
// const num1 = result[0];
// const num2 = result[1];
// console.log(num1);
// console.log(num2);

// , - пропуск параметра
// ...other - rest-оператор
// = параметр по умолчанию (работает, если значение отсутствует или undefined)
const [num1, num2 = true, , ...other] = calc(14, 7);
console.log(num1);
console.log(num2);
console.log(other);

// Деструкторизация объекта

const user = {
  name: "Mark",
  age: 29,
  cities: "LA",
};

// Важно: свойства и перемнные должны быть одинаково названы
// Либо указаны явно <свойство объекта>: <переменная куда сохраним>
const { name: userName, age } = user;

// const userName = user.name;
// const age = user.age;
// const cities = user.cities;

console.log(userName);
console.log(age);
// console.log(cities);

// Аналогично параметры по умолчанию
