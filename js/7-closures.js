// * Замыкания * //

// написать функцию, которая считает количество нажатий 



function wrapClick() {
  let count = 0;
  return function click() {
    // ! Функция имеет доступ к переменным вне её в момент выполнения
    count++;
    console.log(count);
  }
}

// const funct = function () {
// }

const clickNew = wrapClick();
const clickNew2 = wrapClick();
// console.log(clickNew);
clickNew(); // 1
clickNew(); // 2
clickNew(); // 3

const clickNewAnother = wrapClick(); // Создали новую переменную
clickNewAnother(); // 1
clickNewAnother(); // 2

clickNew(); // 4


// 2 Пример
// urlGenerator

// .com - domain
// .ru - domain

// vk - url
// yandex - url


function urlGenerator(domain, protocol) {
  return function (url) {
    return `${protocol}://${url}.${domain}`;

  };
}

const ruUrlGenerator = urlGenerator('ru', 'http');

console.log(ruUrlGenerator('yandex'));
console.log(ruUrlGenerator('mail'));
console.log(ruUrlGenerator('rambler'));


const comUrlGenerator = urlGenerator('com', 'https');

console.log(comUrlGenerator('google'));
console.log(comUrlGenerator('youtube'));









