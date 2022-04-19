// * ===== Date ===== * //

const currentDate = new Date(); // Создать объкет с текущей датой

console.log(currentDate);
// Thu Mar 31 2022 11:02:30 GMT+0300 (Москва, стандартное время)

console.log(typeof currentDate); // object

// * методы * //
console.log(currentDate.getFullYear()); // 2022
console.log(currentDate.getMonth() + 1); // 2 + 1 - Март // Январь - 0
console.log(currentDate.getDate()); // от 1 до 31(30)(29)(28)

console.log(currentDate.getHours()); // от 0 до 23
console.log(currentDate.getMinutes()); // от 0 до 59
console.log(currentDate.getSeconds()); // от 0 до 59

console.log(currentDate.getMilliseconds()); // от 0 до 999


console.log(currentDate.getTime()); // 1648715614526 мс прошло от 1 янв 1970 года



const date = new Date(2000, 1);
// Tue Feb 01 2000 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(date);

date.setFullYear(2025);
date.setMonth(11);
// Аналогично все методы get -> set

console.log(date);
console.log(date.getTime()); // 1764536400000 мс от 1 янв 1970

console.log((date - currentDate) / 1000 / 3600 / 24 / 365); // Результат в мс


// Разность двух дат
const date1 = new Date(2016, 1, 28).getTime();
const date2 = new Date(2017, 1, 28).getTime();
console.log((date2 - date1) / (1000 * 3600 * 24 * 366)); // 1


// Автоисправление даты
console.log(new Date(2022, 1, 50)); // Tue Mar 22 2022

// Получить объект дата через 7 дней
const anotherDate = new Date();
anotherDate.setDate(anotherDate.getDate() + 7)
console.log(anotherDate);


// * Методы Date() * //
// 1. Date.now() - текущее время в мс

console.log(Date.now());

// Расчитать время выполнения цикла

const beforeDate = Date.now();
for (let i = 0; i < 30000000; i++) {
  let j = i * i ** i;
}
const afterDate = Date.now();
console.log(afterDate - beforeDate); // 37 мс


// 2. Date.parse() - получить из строки, похожей на тип Date, мс от 1 января 1970 года

console.log(Date.parse('Jan 1 1970') + 3 * 3600 * 1000);

