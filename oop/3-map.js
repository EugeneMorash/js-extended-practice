// * ===== map ===== * //

// Объекты - хранят ключ + значение
// Массивы - набор значений

// map - массив ключ + значение
// Ключами могут быть люибые типы данных, даже объект

// const map = new Map();
// map.set(true, "str"); // Установить
// map.set(1, "1 - str"); // Установить
// map.set("1", "1 - num"); // Установить

// const map = new Map();
// map.set(true, "str").set(1, "1 - str").set("1", "1 - num");

const map = new Map([
  ["1", "new str"],
  [1, "new num"],
  [true, "nbool"],
]);
console.log(map);

console.log(map.get(true)); // Получить
console.log(map.get(1)); // Получить
console.log(map.get("1")); // Получить

console.log(map.size); // кол-во элементов
console.log(map.has(1)); // кол-во элементов
console.log(map.delete("1")); // кол-во элементов
// console.log(map.clear()); // кол-во элементов
console.log(map);

// * Методы map для перебора
console.log(map.keys());
console.log(map.values());
console.log(map.entries()); // он по умолчанию в for..of

// +++ работает for each

const cart = new Map([
  ["капуста", 400],
  ["огурец", 200],
  ["помидор", 1000],
  ["баклажан", 500],
]);

cart.forEach((value, key, map) => {
  console.log(value, key);
});

// * Копия map * //
const copyMap = new Map(cart.entries());

console.log(copyMap === cart); // false



// В случаях частого добавления/удаления/изменения - map имеет высокую производительность

// Есть аналог WeekMap