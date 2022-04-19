
// * ==== * Условия, тернарный оператор, switch   * ==== *

//*  В задачах использовать, где необходимо if, switch или тернарный оператор


//* 0. Написать условие, которое проверяет на чётное число

// (num % 2 === 0)

//* 1. Написать условие, которое проверяет на кратность числа 3 и 7 одновременно

//  (num % 3 === 0 && num % 7 === 0)


//* 2. Написать условие, которое проверяет null

// (variable === null)

//* 3. Написать условие, которое проверяет NaN

// (isNaN(variable))

//* 4. Написать условие, которое проверяет undefined

// (variable === undefined)

// let variable = undefined;
// console.log(variable === undefined && typeof variable === 'undefined');

//* 5. Написать условие, которое проверяет массив

// (Array.isArray(arr))
// (Array.isArray([1, 2, 3]))

//* 6. Написать условие, которое проверяет объект

//* LearnJS:

// var toString = {}.toString;
// var arr = [1, 2];
// alert( toString.call(arr) ); // [object Array]

// var date = new Date;
// alert( toString.call(date) ); // [object Date]

// var user = { name: "Вася" };
// alert( toString.call(user) ); // [object Object]


//* 6.5.Написать условие, которое проверяет на пустую строку

// (string.lenght === 0)
// (string === '');


//* 7. Написать условие, которое проверяет есть ли данное свойство в объекте

const obj = {
  name: 'qwerty',
};
console.log(obj);
// 1.('name' in obj)
// 2.(obj.hasOwnProperty('name'))


// toString()


//* 8. Что выведет код
// console.log(0 || 0 || 1); 1
// console.log(0 || null || 1); 1
// console.log(0 || 0 || null); null
// console.log(0 || 0 || 0); 0
// console.log(0 || 1 || 0); 1


console.log(1 && 0 && 3); // 0
console.log(1 && null && 3); // null
console.log(1 && 2 && 3); // 3

let serverLogin = '';
let answer = serverLogin || 'default log';
// let answer = serverLogin ? serverLogin : 'default log';
console.log(answer);

// 9. Написать условия промежутка чисел
// а) от 3 до 7 включительно
// (a >= 3 && a <= 7)
// б) от 0 до 10 не включительно
// (a >= 0 && a < 10)
// в) от - 10 до 10 включительно
// (a >= -10 && a <= 10)
// г) от 5 до бесконечности
// (a >= 5)
// д) от - бесконечности до 7
// (a <= 7)


// 10. Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

// Функция принимает два аргумента:

// exam — оценка за экзамен, число от 0 до 100; projects — количество проектов, число от 0 и выше.Функция возвращает: число(итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае
// Вот как должна работать ваша функция:

// Пример:
// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100

// finalGrade(85, 5);    // 90

// finalGrade(55, 3);    // 75

// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0

function finalGrade(exam, project) {
  if (exam > 90 || project > 10) {
    console.log("100");
  } else if (exam > 75 && exam <= 90 && project >= 5) {
    console.log("90");
  } else if (exam > 50 && exam <= 75 && project >= 2) {
    console.log("75");
  } else {
    console.log("0");
  }
}
finalGrade(100, 12);
finalGrade(99, 0);
finalGrade(10, 15);

finalGrade(85, 5);

finalGrade(55, 3);

finalGrade(55, 0);
finalGrade(20, 2);

// 11. Реализуйте функцию, которая принимает на вход два числа и арифметический оператор(имя которого в виде строки) и возвращает результат соответстующей операции.
// Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

// Примеры использования:
// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5
// В случает если оператор некорректен, функция должна возвращать NaN

// arithmetic(5, 2, "aaa")      => returns NaN

function arithmetic(num1, num2, oper) {
  switch (oper) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return NaN;
  }
}

console.log(arithmetic(5, 2, "add"));
console.log(arithmetic(5, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(5, 2, "divide"));
console.log(arithmetic(5, 2, "aaa"));