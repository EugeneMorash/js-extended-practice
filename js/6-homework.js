//? =========== Чистая функция ===========

// Является ли эта функция чистой?

//* 1. function sum(a, b) { return a + b }; ++

//* 2. function doubleCoordinates(point) { --
// 	point.x *= 2;
// 	point.y *= 2;
// 	return point;
// }

//* 3. function doubleCoordinates(point) {
// 	const pointCopy = Object.assign({}, point);
// 	point.x *= 2;
// 	point.y *= 2;
// 	return point; //? pointCopy? ++
// }

//* 4. function randomize(x) { return x * Math.random()}; --

//* 5. function tellDate() {
// 	const date = (new Date().toDateString());	//?? const date? тогда ++
// 	return `Today is ${date}`; //??
// }

//* 6. const DELAY = 1; --

// function calcDelay(input) {
// 	return input * DELAY;
// }

// calcDelay(a, DELAY) ++

//* 7. function writeToFile(data, fileName) { --
// 	const file = io.open(fileName, "w");
// 	return file.write(data)
// }

//? =========== Рекурсия (решить задачу циклами и рекурсией) =========

//* 8. Написать функцию, которая вычисляет факториал числа

function factorialCir(num) {
  if (num === 0) {
    return 0;
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
// console.log(factorialCir(10));

// function factorialRec(num) {
//   if (num === 1 || num === 0) {
//     return 1;
//   } else {
//     return num * factorialRec(num - 1);
//   }
// }

function factorialRec(num) {
  return num === 1 || num === 0 ? 1 : num * factorialRec(num - 1);
}

// console.log(factorialRec(10));
// console.log("");

//* 9. Написать функцию, которая принимает на вход 2 аргумента, которая вычисляет степень числа
// Пример:
// console.log(nameFunction(2, 4)); // 16

function powCir(num, deg) {
  let result = 1;
  for (let i = 1; i <= deg; i++) {
    result *= num;
  }
  return result;
}
// console.log(powCir(2, 10));

function powRec(num, deg) {
  if (deg === 1) {
    return num;
  } else {
    return num * powRec(num, deg - 1);
  }
}
// console.log(powRec(2, 10));
// console.log("");
//* 10. Написать функцию, которая возвращает число из последовательности Фибоначчи, стоящее на n-ой позиции
// Последовательность Фибоначчи - это ряд числ, где каждое последующее является суммой двух предыдущих
// Пример:
// Так выглядит первые десять чисел: 0 1 1 2 3 5 8 13 21 34
// fibonnachi(4) // 2
// fibonnachi(7) // 8

function fibonachiCir(num) {
  const fibNum = [0, 1];
  for (let i = 1; i <= num; i++) {
    fibNum.push(fibNum[i] + fibNum[i - 1]);
    // console.log(fibNum);
  }
  return fibNum[num - 1];
}
// console.log(fibonachiCir(4));
// console.log(fibonachiCir(7));

function fibonachiRec(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonachiRec(num - 1) + fibonachiRec(num - 2);
  }
}
// console.log(fibonachiRec(4));
// console.log(fibonachiRec(7));
// console.log("");

//* 11. Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел.
// Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности.
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
// sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
// Подсказки

// Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN Сумма чисел последовательности, в которой begin === end, равна begin (или end)

// NaN (т.к. это "пустая" последовательность)
// sequenceSum(7, 2);

// 0 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(0, 0);

// 6 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(6, 6);
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию sequenceSum

function sumCir(begin, end) {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  let sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += begin++;
  }
  return sum;
}
// console.log(sumCir(0, 0));
// console.log(sumCir(6, 6));
// console.log(sumCir(1, 5));
// console.log(sumCir(4, 10));
// console.log(sumCir(-3, 5554));

function sequenceSum(begin, end) {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }

  let sum = 0;
  if (end === begin) {
    return sum;
  } else {
    return (sum = begin + sequenceSum(begin + 1, end));
  }
}
// console.log(sequenceSum(0, 0));
// console.log(sequenceSum(6, 6));
// console.log(sequenceSum(1, 5));
// console.log(sequenceSum(4, 10));
// console.log(sequenceSum(-3, 2));

//* 12. Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

// getStringCount({
//   first: '1',
//   second: '2',
//   third: false,
//   fourth: ['anytime', 2, 3, 4 ],
//   fifth:  null,
// }); // 3

// getStringCount(['1', '2', ['3']]) // 3
// getStringCount(['1', '2', {age: '3']) // 3

const obj = [3, 5, 6];
function getStringCount(obj) {
  let counter = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      counter += getStringCount(obj[key]);
    } else if (typeof obj[key] === "string") {
      counter++;
    }
  }
  return counter;
}
// console.log(getStringCount(["1", "2", ["3"]])); // 3
// console.log(getStringCount(["1", "2", { age: "3" }])); // 3
// console.log(getStringCount(obj));

//* 13. Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

// ✓ должна получать свойство по цепочке
// ✓ не должна изменять исходные объект
// ✓ должна получать свойство любого уровня вложенности
// ✓ должна корректно возвращать объекты, функции и массивы
// ✓ должна возвращать undefined если свойства по указанному пути нет
// ✓ должна возвращать undefined на пустом массиве параметров
// Пример:
// const obj = {
//   a: {
//     b: {
//       c: {
//         d: 'Привет!'
//       }
//     }
//   }
// }
// optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
// optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined

// optionalChaining(obj, ["a", "c", "d"]) // undefined
// optionalChaining(obj, ["b", "d", "a"]) // undefined

const objChain = {
  a: {
    b: {
      c: {
        d: "Привет!",
      },
    },
  },
};

function optionalChaining(obj, array, counter = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (key !== array[counter]) {
        return undefined;
      }
      return optionalChaining(obj[key], array, ++counter);
    } else {
      if (counter !== array.length - 1) {
        return undefined;
      }
      return obj[key];
    }
  }
}

const opChFunc = optionalChaining(objChain, ["a", "b", "c", "d"]);
const opChFunc2 = optionalChaining(objChain, ["a", "b", "c", "d", "e"]);
const opChFunc3 = optionalChaining(objChain, ["a", "c", "d"]);
const opChFunc4 = optionalChaining(objChain, ["b", "d", "a"]);

// console.log(opChFunc);
// console.log(opChFunc2);
// console.log(opChFunc3);
// console.log(opChFunc4);

//* 14. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.



// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

function sumToCir(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumToCir(10000));

function sumToRec(num) {
  return num === 0 ? num : num + sumToRec(num - 1);
}


// const start = Date.now();
// console.log(sumToRec(10452));
// const end = Date.now();
// console.log(end - start);

// console.log(sumToRec(100452)); // Maximum call stack size exceeded

function sumToAri(num) {
  return ((1 + num) * num) / 2; // шаг === 1, формула сильно упрощается
}

// const start2 = Date.now();
// console.log(sumToAri(40000));
// const end2 = Date.now();
// console.log(end2 - start2);

//* 15. Вывод односвязного списка

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

// console.log(list.value);
// console.log(list.next);
// printList(list);

//* 16. Написать функцию, которая выполняет глубокое копирование объекта или массива

const user = {
  name: "Mark",
  age: 90,
  address: {
    city: "Moscow",
    country: "Russia",
    visited: ["LA", "London", "New York"],
  },
  bag: ["pencil", "apple", "carot"],
  isHuman: true,
  list: null,
};

function deepCopy(obj) {
  const copyObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      copyObj[key] = deepCopy(obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}
const copyUser = deepCopy(user);

function deepCopy2(obj) {
  const copyObj = {};
  // const keysObj = Object.keys(obj);
  // console.log(keysObj);
  for (const key of Object.keys(obj)) {
    if (typeof keysObj[key] === "object" && keysObj[key] !== null) {
      copyObj[key] = deepCopy2(obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}

function deepCopy3(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const copyUser3 = deepCopy3(user);
console.log(copyUser3 === user);

// const copyUser2 = deepCopy(user);
// console.log(copyUser2);

// console.log(copyUser2.address === user.address);

//? ====== Функции высшего порядка ======

//* 17. Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

// partition(array, callback) => [trueArray, falseArray]
// Во время выполнения функция должна вызвать callback для каждого элемента массива array.

// Сигнатура функции callback

// callback(element) => boolean
// element - Элемент массива на котором была вызвана функция callback


// Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray

// Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray

// Функция должна правильно отрабатывать если callback возвращает приводимые к true false значения:

// 	Приводимые к true
// 	{} => true
// 	1 => true
// 	...
// 	совокупность таких значений называется truthy

// 	Приводимые к false
// 	undefined => false
// 	"" => false
// 	0 => false
// 	...

// 	совокупность таких значений называется falsey

// Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray

// Функция не должна менять изначальный массив

// Примеры использования:
// Попроще:
// 	const numbers = [1,2,3,4,5,6];

// 	partition(numbers, (element) => element > 3);
// 	=> [
// 		[4, 5, 6], // trueArray
// 		[1, 2, 3]  // falseArray
// 	];
// 	const numbers = [0, 1, 2, {}, false, "", "0"];

// 	partition(numbers, (element) => element);
// 	=> [
// 		[1, 2, {}, "0"], // trueArray
// 		[0, false, ""]  // falseArray
// 	];

// Посложнее:

// 	const users = [
// 	  { 'user': 'barney',  'age': 36, 'active': false },
// 	  { 'user': 'fred',    'age': 40, 'active': true },
// 	  { 'user': 'pebbles', 'age': 1,  'active': false }
// 	];

// 	partition(users, (element) => element.active );
// 	=> [
// 	  [
// 		  { 'user': 'fred',    'age': 40, 'active': true }
// 	  ],
// 	  [
// 		  { 'user': 'barney',  'age': 36, 'active': false },
// 		  { 'user': 'pebbles', 'age': 1,  'active': false }
// 	  ]
// 	]


const myCallback = element => element > 3;
const myCallback2 = (element) => Boolean(element);
// const myCallback2 = element => element;
const myCallback3 = element => element.active;

const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [0, 1, 2, {}, false, "", "0"];
const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred', 'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1, 'active': false }
];

function partition(array, callback) {
  const truthyArr = [];
  const falsyArr = [];
  array.forEach((value) =>
    callback(value) ? truthyArr.push(value) : falsyArr.push(value))
  return [[...truthyArr], [...falsyArr]];
}
console.log(partition(numbers, myCallback));
console.log(partition(numbers2, myCallback2));
console.log(partition(users, myCallback3));


//* 18. Реализуйте функцию getField, которая принимает массив объектов в качестве первого аргумента и ключ объекта в строке в качестве второго. Функция должна вернуть новый массив. На месте объекта должно находиться значение поля объекта, находящееся по ключу, переданному в функцию вторым аргументом. Массив гарантированно состоит из объектов. Если в данном объекте, нет такого поля, то вместо значения поля должен быть undefined. Если массив не передан, то функция должна вернуть пустой массив.

// Пример:
const dataField = [
  {
    name: "Denis",
    age: 25,
  },
  {
    name: "Ivan",
  },
  {
    name: "Ann",
    age: 18,
  },
];

// console.log(getField(data, 'age'));
// [25, undefined, 18]

function getField(data, key) {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  } else {
    return data.map((elem) => elem[key]);
  }
}
// console.log(getField(dataField, "age"));

//* 19. Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

// Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.

// Пример:

const data = [
  {
    type: "food",
    price: 130,
  },
  {
    type: "clothes",
    price: 7300,
  },
  {
    type: "other",
    price: 1400,
  },
];

// calculatePrice(data); // 8830

function calculatePrice(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return 0;
  } else {
    return data.map((elem) => elem.price).reduce((prev, curr) => prev + curr);
  }
}
// console.log(calculatePrice(data));

//* 20. Дан список информации о людях.

// Необходимо вернуть массив, содержащий самого старшего человека в списке. Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

// Возраст хранится в поле age.

// Данные на входе:

const dataAge = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];
const result = getMostSenior(data);
// Данные на выходе:

// console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

function getMostSenior(data) {
  const maxAge = Math.max(...data.map((elem) => elem.age));
  return data.filter((elem) => elem.age === maxAge);
}
const resultAge = getMostSenior(dataAge);
// console.log(resultAge);
