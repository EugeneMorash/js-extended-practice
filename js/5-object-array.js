// * ===== object ===== * //





const user = {
  name: 'Pavel',
  address: {
    city: 'LA',
    country: 'USA'
  }
};

user.name = 'Maks'; //  Замена
user.secondName = 'Petrov'; // Создание

const prop = 'isPerson';
user.prop = true; // prop: true

user[prop] = true; // isPerson: true

user['likes cat'] = true; //  likes cat: true

console.log(user);


// =================================== //
// Перебор объекта - for - in

for (const key in user) {
  console.log(key); // ключи
  console.log(user[key]); // значения
}

// =================================== //
// Проверка на наличие свойства в объекте
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('name2')); // false
console.log(user.hasOwnProperty('toString')); // false

// Проверка на наличие свойство в объекте и его прототипах
console.log('name' in user); // true
console.log('name2' in user); // false
console.log('toString' in user); // true


// Копирование объекта / массива

// объект - ссылочный тип данных
const copyUser = user;

copyUser.name = "Nick";
console.log(user);
console.log(copyUser);

// Как быстрее проверить является ли copyUser ссылкой на user

console.log(user === copyUser); // true - они связаны по ссылке
console.log({} === {}); // false - они не связаны по ссылке


// Копирование
// Неглубокое копирование

// 1) Object.assign() - склеивание объектов

const newCopyUser = Object.assign({}, user);
console.log(newCopyUser === user); // false
console.log(newCopyUser.address === user.address); // true


// 2) Через перебор
const new2partCopy = {};
for (const key in user) {
  new2partCopy[key] = user[key];
}
console.log(new2partCopy === user); // false
console.log(new2partCopy.address === user.address); // true


// Глубокое копирование (deep)



// * == practice == * //
// 1. Функция может мутировать (менять) объект/массив

const person = {
  name: 'Mick'
};
// Написать функцию, которая переименовывает имя в переданном объекте

function renameObject(obj, newName = 'noname') {
  // console.log(obj === person); // true
  if (obj.hasOwnProperty('name')) {
    obj.name = newName;
  } else {
    throw new Error('Отсутствует свойство name')
  }
}
renameObject(person, 'Michael');
console.log(person);


// 2. Функция создаёт новый объект и его возвращает

// Написать функцию, которая принимает на вход массив, функция возвращает новый массив состоящий из чётных чисел

const array = [3, 2, 6, 7, 9, 0, 3, 2, 22, 21];


function getEvenArray(arr) {
  return arr.filter((value, index, copyarr) => {
    // console.log(copyarr === arr);  // true
    return value % 2 === 0;
  });
}

const evenArr = getEvenArray(array);
console.log(evenArr);

