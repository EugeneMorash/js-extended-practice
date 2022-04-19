//* 1. Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов и возвращает их сумму. Вызов функции без аргументов должен вернуть 0. В случае, если аргумент не является числом и не может быть приведен к таковому, нужно проигнорировать его. Если его можно привести к числу, то приведите его и прибавьте, как и обычное число.

// Пример использования:

// console.log(sum(1, 2, 3, 4, 5, 6)); // 21
// console.log(sum(-10, 15, 100)); // 105
// console.log(sum()); // 0
// console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false)); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)

function sum(...array) { // [ [], 1 ]
  if (array.length === 0) {
    return 0;
  }
  // return array.filter(value => !isNaN(Number(value)))
  //   .map(value => Number(value)).reduce((summ, next) => summ + next);



  // return array.map(value => Number(value))
  //   .filter(value => !isNaN(value))
  //   .reduce((summ, next) => summ + next);


  return array.map(value => Number(value))
    .reduce((summ, next) => !isNaN(next) ? summ + next : summ);
}


// console.log(sum(1, 2, 3, 4, 5, 6)); // 21
// console.log(sum(-10, 15, 100)); // 105
// console.log(sum()); // 0
// console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false)); // 11
// console.log(sum([1], [2])); // 3
// console.log(sum([0])); // 0
// console.log(sum([])); // 0



//* 2. Merge
// Реализуйте функцию merge, которая будет принимать неограниченное количество объектов в качестве аргументов и возвращать новый объект, который должен содержать все поля со всех объектов. Если ключи в объектах повторяются, то каждый последующий объект при совпадении ключей должен иметь больший приоритет над предыдущим. Порядок полей в результирующем объекте не важен.

// Пример:

// console.log(
//   merge(
//     {
//       name: 'John',
//       age: 22,
//     },
//     {
//       surname: 'Klein',
//       age: 20,
//       profession: 'student',
//     },
//     {
//       profession: 'frontend developer',
//       country: 'USA',
//     }
//   )
// );

// spread + rest
// Object.assign

function merge(...objects) {
  let newObj = {};
  objects.forEach(object => {
    newObj = {
      ...newObj,
      ...object
    };
    // newObj = Object.assign(newObj, object);
  });
  return newObj;

  // return objects.reduce((obj, currentObj) => {
  //   return { ...obj, ...currentObj };
  // }, {});
}

const user1 = {
  name: 'Pavel',
  age: 33
};

// console.log({ ...user1 });

// Функция возвращает 1 новый объект со свойствами всех объектов, которые подали на вход
// Если свойства повторяются, то они перезаписываются

// 2.5
// Написать функцию, на вход которой подаётся много чисел
// Функция возвращает сумму этих чисел

function summ(...num) {
  // let sum = 0;
  // num.forEach(value => { sum += value });
  // return sum;

  return num.reduce((summ, next) => {
    return summ + next;
  });
}
// console.log(summ(1, 1, 1, 1, 1, 1, 1));

// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }

//* 3. Реализуйте функцию getLanguagesStatistic, которая поможет IT журналу подвести итоги 2019 года по популярности использования языков программирования. На входе функция получает массив отзывов пользователей. Необходимо вернуть объект в формате { languageName: count, anotherLanguageName: anotherCount, ... }, где languageName - название языка в строке, а count - число отзывов, которые оставили программисты, использующие этот язык. При этом следует учитывать только те отзывы пользователей, которые были оставлены в 2019 году. Год отзыва хранится в поле year, язык - в поле language.

// Отзыв предоставлен в следующем формате:

// { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 }
// Данные на входе:

const data = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
  { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];
const result = getLanguagesStatistic(data);

// Данные на выходе:
// console.log(result);
// {
//   C: 1,
//   JavaScript: 2
// }

function getLanguagesStatistic(array) {
  const resultObj = {};
  array.filter((obj) => {
    return obj.year === 2019;
  })
    .forEach((obj) => {
      if (resultObj[obj.language]) {
        resultObj[obj.language]++;
      } else {
        resultObj[obj.language] = 1;
      }
    })
  return resultObj;
}
console.log(result);

