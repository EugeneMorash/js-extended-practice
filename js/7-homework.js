//* 1. Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает новую функцию, которая вызывает функцию-аргумент, но только единожды.
// Повторный вызов функции-результата once не должен давать никакого эффекта.

// Пример:

// const f = () => console.log('hi!');

// const onceF = once(f);
// onceF(); // hi!
// onceF(); // nothing


const f = () => console.log("Hello!");

function once(func) {
  let switcher = true;
  return () => {
    if (switcher) {
      switcher = false;
      func();
    }
  }
}
const onceF = once(f);
onceF();
onceF();




//* 2. Для этой задачи вам нужно будет ознакомиться с методом массива filter, который принимает функцию-коллбэк для фильтрации массива.

// Реализуйте набор готовых к использованию функций для arr.filter:

// Если аргумент или элемент массива можно привести к числу,
// то функция должна сначала приводить его к числу, а потом проверять условие.

//? inRange(a, b) – число находится между a и b (включительно).
// Если a > b, то функция должна возвращать false для всех элементов массива
//? inArray([...]) – значение находится в данном массиве.
//? notInArray([...]) – значение не находится в данном массиве.

// Они должны использоваться таким образом:

// arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// arr.filter(notInArray([1,2,3])) – выбирает только те элементы, которые не совпадают ни с одним из элементов массива

// Пример:

// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

// console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
// console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
// console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]

//* inRange
//     ✓ должна возвращать функцию
//     ✓ должна удалять из массива значения, не лежащие в данном промежутке или не являющиеся числом
//* inArray
//     ✓ должны возвращать функции
//     ✓ должна удалять из фильтруемого массива значения,
// не находящиеся в массиве, переданном в аргументы inArray
//* notInArray
//     ✓ должны возвращать функции
//     ✓ должна удалять из фильтруемого массива значения,
// находящиеся в массиве, переданном в аргументы notInArray

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

const inRange = function (a, b) {
  if (a > b) {
    console.log(false);
  }
  return arrVar => (Number(arrVar) >= a && Number(arrVar) <= b);
}
// console.log(arr.filter(inRange(3, 6)))

const inArray = function (array) {
  return function (elem) {
    return array.includes(elem);
  }
}

const notInArray = function (array) {
  return function (elem) {
    return !array.includes(elem);
  }
}

// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];
// [1, 2, 10, undefined]
// [1, 2, undefined]

// console.log(arr.filter(inArray([1, 2, 10, undefined])));
// console.log(arr.filter(notInArray([1, 2, 10, undefined])));



//* 3. Строковый буфер (Важная для понимания замыканий)

// В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функциональность состоит из двух возможностей:

// Добавить значение в буфер.
// Получить текущее содержимое.
// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

// Создание объекта: let buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
// Вот пример работы:

//     function makeBuffer() { /* ваш код */ }

//     let buffer = makeBuffer();

// добавить значения к буферу
//     buffer('Замыкания');
//     buffer(' Использовать');
//     buffer(' Нужно!');

// получить текущее значение
//     alert( buffer() ); // Замыкания Использовать Нужно!
//     Буфер должен преобразовывать все данные к строковому типу:

//     let buffer = makeBuffer();
//     buffer(0);
//     buffer(1);
//     buffer(0);

//     alert( buffer() ); // '010'
// Решение не должно использовать глобальные переменные.


// function makeBuffer() {

//   let string = "";
//   function buff(str) {
//     if (str === undefined) {
//       return string;
//     }
//     string += String(str);
//   }
//   buff.clear = function () {
//     string = "";
//   }
//   return buff;
// }

// let buffer = makeBuffer();
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// console.log(buffer());

// let buffer2 = makeBuffer();
// buffer2('0');
// buffer2('1');
// buffer2('0');
// console.log(buffer2());

// let buffer3 = makeBuffer();
// buffer3("Тест");
// buffer3(" тебя не съест ");
// console.log(buffer3());
// buffer3.clear();
// console.log(buffer3());

//* 4. Строковый буфер с очисткой

// Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:

//     function makeBuffer() {
//     ...ваш код...
//     }

//     var buffer = makeBuffer();

//     buffer("Тест");
//     buffer(" тебя не съест ");
//     alert( buffer() ); // Тест тебя не съест

//     buffer.clear();

//     alert( buffer() ); // ""


// function makeBuffer() {

//   let string = "";
//   function buff(str) {
//     if (str === undefined) {
//       return string;
//     }
//     string += String(str);
//   }
//   buff.clear = function () {
//     string = "";
//   }
//   return buff;
// }

function makeBuffer() {

  let string = "";
  function buff(str) {
    if (str === undefined) {
      return string;
    }
    string += String(str);
  }
  buff.clear = function () {
    string = "";
  }
  return buff;
}

const user = {
  name: 'Pavel',
  age: 30,
  hello: function () {
    console.log('Hello');
  }
}
user.hello()

user.old = function () {
  console.log(this.age);
}
console.log(user);


let buffer = makeBuffer();
//
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// console.log(buffer());

// let buffer2 = makeBuffer();
// buffer2('0');
// buffer2('1');
// buffer2('0');
// console.log(buffer2());

// let buffer3 = makeBuffer();
// buffer3("Тест");
// buffer3(" тебя не съест ");
// console.log(buffer3());
// buffer3.clear();
// console.log(buffer3());