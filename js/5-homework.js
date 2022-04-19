// * ==== * Тип данных object * ==== * //

//* 1. Написать функцию, на вход которой подаётся объект и строка. Функция возвращает значение свойства объкта.
// Пример:

// const user = {
// 	age: 33,
// 	name: 'Pavel'
// };

// console.log(getValueObj(user, 'age')); // 33
// console.log(getValueObj(user, 'name')); // Pavel
// console.log(getValueObj(user, 'xyz')); // undefined

const user = {
  age: 33,
  name: "Pavel",
};
function getValueObj(object, key) {
  return object[key];
}
// console.log(getValueObj(user, 'age'));
// console.log(getValueObj(user, 'name'));
// console.log(getValueObj(user, 'xyz'));

//* 2. Написать функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы,
// которые есть в строке, а значениями - их количество в строке.
// Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.
// Если строка пустая, то вернуть пустой объект
// Пример:
// console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }

function lettersCount(string) {
  const newObject = {};
  if (!string.length) {
    return newObject;
  }
  const lowString = string.toLowerCase();
  for (let i = 0; i < lowString.length; i++) {
    if (newObject.hasOwnProperty(lowString[i])) {
      newObject[lowString[i]]++;
    } else {
      newObject[lowString[i]] = 1;
    }
  }
  return newObject;
}
// console.log(lettersCount('aAAbbccde'));
// console.log(lettersCount('abaaacde'));

//* 3. Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.

// findAllIdx([1, 0, 1, 0, 0, 1], 0) // [1,3,4]
// findAllIdx([1,1], 0) // []

function findAllIdx(arr, num) {
  const array = [];
  arr.forEach((value, index) => {
    value === num ? array.push(index) : null;
  });
  return array;
}

console.log(findAllIdx([1, 0, 1, 0, 0, 1], 0));
console.log(findAllIdx([1, 1], 0));
console.log("");

// TODO: Сделать callback (HOF) Done

//* 4. Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).
// Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.
// Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.

// Пример:
// replaceItemsClear([1, 2, 3, 4, 2], 2, 'a'); //  [1,'a',3,4,'a']
// const arr = [1,2,3,4,2];
// replaceItemsMutate(arr, 2, 'a');
// console.log(arr); // [1,'a',3,4,'a']

function replaceItemsClear(array, item, replaceItem) {
  const newArray = [];
  array.forEach((element) => {
    element === item ? newArray.push(replaceItem) : newArray.push(element);
  });
  return newArray;
}
// console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, 'a'));

const arr = [1, 2, 3, 4, 2];
function replaceItemsMutate(array, item, replaceItem) {
  // for (let i = 0; i < array.length; i++) {
  //   array[i] === item ? (array[i] = replaceItem) : array[i];
  // }
  array.forEach((elem, index, arrInd) => {
    elem === item ? (arrInd[index] = replaceItem) : null;
  });
}
replaceItemsMutate(arr, 2, "a"); // TODO: Сделать callback (HOF) Done
console.log(arr);
console.log("");

//* 5. Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

// Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.
// Функция должна возвращать новый массив, а не мутировать старый.

// Примеры:

// console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
// console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
// console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]

function moveToStart(array, n) {
  if (n > array.length) {
    return array;
  }
  const newArray = array.slice(array[array.length - n - 1]);
  const newArray2 = array.slice(0, array[array.length - n - 1]);
  return newArray.concat(newArray2);
}

// console.log(moveToStart([1, 2, 3, 4, 5], 3));
// console.log(moveToStart([1, 2, 3, 4, 5], 3));
// console.log(moveToStart([1, 2, 3, 4, 5], 10));

//* 6. Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

// Пример:
// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArrays(data1));
// true
// const data2 = [];
// console.log(hasArrays(data2));
// false

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
const data2 = [];
function hasArrays(array) {
  // const hasArray = array.find((value) => Array.isArray(value));
  // return Boolean(hasArray);
  return array.some((elem) => Array.isArray(elem));
}

//TODO: HOF -> array.some Done
console.log(hasArrays(data1));
console.log(hasArrays(data2));

//* 7. Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd".
// Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".

// Пример:
// const data = [1, 2, 3, 4, 5, 6];
// console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
// console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];

const data = [1, 2, 3, 4, 5, 6];
function getNumbersByParity(array, evenOdd) {
  if (evenOdd === "even") {
    return (newArray = array.filter((value) => value % 2 === 0));
  } else if (evenOdd === "odd") {
    return (newArray = array.filter((value) => value % 2 !== 0));
  }
}
// console.log(getNumbersByParity(data, 'even'));
// console.log(getNumbersByParity(data, 'odd'));
