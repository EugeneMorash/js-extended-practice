// * ===== Методы объектов ===== * //

const obj = {
    name: "Denis",
    age: 21,
};

// * Копирование/ склеивание
// 1. Object.assign({}, {}, {})
const copyObj = Object.assign({}, obj);
console.log(copyObj === obj); // false

const copyObj2 = { ...obj };
console.log(copyObj2 === obj); // false (spread)

// * Получить массив ключей
// 2. Object.keys({})
const keys = Object.keys(obj);
console.log(keys);

// * Получить массив значений
// 3. Object.values({})
const values = Object.values(obj);
console.log(values);

// * Получить массив с массивом[ключ, значение]
// 3. Object.entries({})
const entries = Object.entries(obj);
console.log(entries);

// * Получить объект из массива массивов
// 4. Object.fromEntries({})
const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);

// Uncaught TypeError: obj is not iterable
// Если obj был массивом, то мы бы смогли его перебрать

// for (const iterator of Object.values(obj)) {
//   console.log(iterator);
// }

// Пример:
const priceFruit = {
    banana: 60,
    lemon: 50,
    milk: 20,
};
// Посчитать сумму корзины
const sum = Object.values(priceFruit).reduce((p, n) => p + n);

console.log(sum);