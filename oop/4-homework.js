//* 1. Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique1(arr) {
  return Array.from(new Set(arr)); //???
}

let values = [
  "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
// console.log(unique1(values));



//* 2. Написать функцию, которая возвращает массив не повторяющихся css классов из всего html файла

function classes(domElement) {
  const newArray = [];
  (function arrClose(domElement) {

    [...domElement.children].forEach(element => {
      if (element.className) {
        // console.log(element.className);
        newArray.push(element.className);
      }
      if (element.children.length) {
        // console.log(element.children);
        arrClose(element);
      }
    });
  })(domElement);

  return newArray;
}
console.log(classes(document.body));





//* 3. Реализуйте функцию getArraysCounts, которая принимает массив в качестве аргумента.Функция должна вернуть Map, в котором ключи - все уникальные элементы в массиве, а значения - количество этих элементов в массиве.

//   Пример:
// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2

const objMap = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, objMap, objMap, { name: 123 }];

function getArraysCounts(array) {
  const map = new Map();
  array.forEach(value => {
    map.set(value, map.has(value) ? map.get(value) + 1 : 1)
  });
  return map;
}

// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts);
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(objMap)); // 2





//* 4. Реализуйте функцию unique, которая принимает массив в качестве аргумента и возвращает новый массив, в котором содержатся только уникальные значения из исходного массива.Исходный массив не должен изменяться.

// Порядок элементов должен сохраняться.

// Используйте Set для реализации этой функции.

//   Пример:

const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: 'John' };
// const data2 = [obj, obj, obj, { name: 'John' }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false

function unique(array) {
  return [...new Set(array)];
}
// console.log(unique(data1));

const obj = { name: 'John' };
const data2 = [obj, obj, obj, { name: 'John' }];
const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false