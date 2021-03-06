
//* 1. Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился username. Поле username создается путем конкатенации firstName в нижнем регистре, первой буквы lastName в нижнем регистре и года рождения пользователя, который необходимо вычислить из текущей даты и возраста пользователя. Учтите, что функция должна работать даже в том случае, если вызвать ее, к примеру, через 10 лет.

// Данные всегда будут передаваться в указаном ниже формате.
// Возраст представлен в виде целого числа.
// Фамилия всегда будет в формате "N.", где N - первая буква фамилии.
// Порядок объектов в массиве должен сохраняться.
// Порядок полей в объекте не важен.

// Пример:

// Данные на входе:

const data = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

// Данные на выходе:

// const processedData = createUsernames(data);
// console.log(processedData); // [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];

function createUsernames(array) {
  array.forEach(user => {
    user.username = (user.firstName + user.lastName[0]).toLowerCase() + (new Date().getFullYear() - user.age);
  });
  return array;
}
const processedData = createUsernames(data);
// console.log(processedData);


//* 2. Написать функцию
// Написать функцию, которая проверяет введённую дату
// На вход в функцию подаётся строка -дата в формате: "ДД.ММ.ГГГГ"
// Функция возвращает true, если такая дата существует, или false - если не существует
// * Необходимо учесть високосные года
// * Функция работает только с положительными годами (наша эра)

function realTime(day, month, year) {
  const refDate = new Date(year, month - 1, day);
  const refYear = refDate.getFullYear();
  if (refYear <= 0 || refYear > (new Date().getFullYear())) {
    throw new Error("Wrong Year!")
  }
  if (month <= 0 || month > 12) {
    throw new Error("Wrong Month!")
  }
  //?? getMonth

  console.log(refYear);
  console.log(refDate);
}
realTime(32, 11, 2021)





//* 3. Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

// getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

// Функция должна корректно работать с объектом Date
// getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

// Функция должна корректно рабоать со значениями в миллисекундах
// getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

// Если входные параметры - невалидные даты, то функция вовращает NaN:
// getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

// Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
// getDaysBetweenDates(null); // -> TypeError

// new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time

// Проверки:
// возвращает количество полных дней между датами 
// ✓ возвращает отрицательное число, если первая дата больше второй 
// ✓ обработка дат в миллисекундах getDaysBetweenDates(1409796000000, 1409925600000) 
// ✓ обработка дат в виде текста getDaysBetweenDates('1-1-2020', '1-3-2020') 
// невалидные данные
// ✓ возвращает NaN, если первая дата Invalid date 
// ✓ возвращает NaN, если вторая дата Invalid date 
// ✓ возвращает NaN, если обе даты Invalid date
// ✓ проброс исключения TypeError , если передано менее 2-х аргументов 
// крайние случаи
// ✓ разница между датами меньше дня, но первая дата меньше второй
// ✓ разница между датами меньше дня, но первая дата больше второй 
// ✓ разница между датами ровно 24 часа 
// ✓ даты равны между собой
// ✓ одна из дат равна null


//* Возможные подсказки:
// переписать ф-ю со стрелочной на обчную function getDaysBetweenDates(a, b){...}, тогда можно получить доступ к кол-ву агрументов 
// делаем проверку if (arguments.length < 2) => выбросить исключение:  throw new TypeError('TypeError')
// в else считаем разницу в днях 
// отрицательный результа округляем Math.ceil()
// в этой же ветке добавляем проверку на -0, если результат -0, то переприсваеваем ему просто 0
// полжительный результат округляем Math.floor()
