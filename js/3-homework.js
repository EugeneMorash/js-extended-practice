
//* 1. Написать функцию, которая возвращает последний символ переданной строки

function lastSymbol(string) {
  return string[string.length - 1];
}
// console.log(lastSymbol("ejbeib154iii"));


//* 2. Написать функцию, на вход которой подаётся строка, функция возвращает новую строку состоящая из больших букв переданной строки
// Например: functionName('UpperCamelCase'); // 'UCC'

function upperCaseSymbol(string) {
  let upperString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      // upperString += string[i];

      upperString = `${upperString}${string[i]}`;
    }
  }
  return upperString;
}
// console.log(upperCaseSymbol('UpperCamelCase'));


//* 3. Написать функцию на вход которой подаётся строка, функция возвращает массив индексов заглавных букв переданной строки.

function upperCaseIndex(string) {
  let upperStringArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      upperStringArr.push(i);
    }
  }
  return upperStringArr;
}
// console.log(upperCaseIndex('UpperCamelCase'));



//* 4. Написать функцию, которая возвращает количество знаков препинания в строке
// Учитывать только следующие знаки препинания: ', . ! ? -'

// TODO: Done

const arrSign = [',', '.', '!', '?', '-'];

function punctNum(string) {
  let punctNumQuant = 0;

  for (let i = 0; i < string.length; i++) {
    if (arrSign.includes(string[i])) {
      punctNumQuant++;
    }
  }
  return punctNumQuant;
}
// console.log(punctNum("...vhgv,jvhv?uev,he..uvh.ueh - vue!hv,,"));

//* 4.1 Задача 4 (Использовать Switch - case)
// Пользователь вводит 1 символ:
// Если это "a", то вывести в консоль "alpha"
// Если это "b", то вывести в консоль "beta"
// Если это "c", то вывести в консоль "gamma"
// Если это "1", то вывести в консоль "4"
// Если это "2", то вывести в консоль "8"
// Если это "3", то вывести в консоль "15"
// Во всех остальных случаях выводим: "error"

function switchFunc(key) {
  switch (key) {
    case "a":
      console.log("alpha");
      break;
    case "b":
      console.log("beta");
      break;
    case "c":
      console.log("gamma");
      break;
    case "1":
      console.log("4");
      break;
    case "2":
      console.log("8");
      break;
    case "3":
      console.log("15");
      break;

    default:
      throw new Error("error");
  }
}
// switchFunc("3");


//* 5. Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.

// Пример:
// const str = 'sOme RanDoM sTRING';
// console.log(capitalize(str)); // Some Random String

const str = 'sOme RanDoM sTRING';
function capitalize(string) {

  // let lowString = string.toLowerCase();

  // return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ') //* habr


  // let words = lowString.split(" ");
  // // console.log(words);
  // let capWords = words.map(word => word[0].toUpperCase() + word.slice(1, word.length));
  // console.log(capWords);
  // return capWords.join(" ");
  return string
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1, word.length))
    .join(" ");

}
// console.log(capitalize(str));


//* 6. Написать функцию, которая преобразует строку в стиль lowerCamelCase
// Пример
// const str = 'sOme RanDoM sTRING';
// console.log(toLowerCamelCase(str)); // someRandomString

function toLowerCamelCase(string) {

  let lowString = string.toLowerCase();
  let words = lowString.split(" ");
  let capWords = words.map(word => word[0].toUpperCase() + word.slice(1, word.length));
  let camelCase = capWords.join("");
  return camelCase[0].toLowerCase() + camelCase.slice(1, camelCase.length);
}
// console.log(toLowerCamelCase(str));


//* 7. Написать функцию, которая преобразует строку в стиль kebab-case
// Пример
// const str = 'sOme RanDoM sTRING';
// console.log(toKebabCase(str)); // some-random-string

function toKebabCase(string) {

  let lowString = string.toLowerCase();
  let words = lowString.split(" ");
  return words.join("-");
}
// console.log(toKebabCase(str));


//* 8. Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, 
// в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.

const longString = "С другой стороны выбранный нами инновационный путь напрямую зависит от новых принципов формирования материально-технической и кадровой базы."



function reverseLongWords(string) {
  let words = string.split(" ");
  let reverseWords = words.map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  return reverseWords.join(" ");
}
// console.log(reverseLongWords(longString));


//* 9. Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег

// .split('\n')

// Пример 1:
// const text = `Some
// simple multiline
// text`;

// console.log(wrapInParagraph(text)); 
// <p>Some</p>
// <p>simple multiline</p>
// <p>text</p>
// ________________________________________
// Пример 2:
// const text2 = 'some\ntext';

// console.log(wrapInParagraph(text2)); 
// <p>some</p>
// <p>text</p>
// ________________________________________

// TODO: Done

const text = `Some
simple multiline
text`;
const text2 = 'some\ntext';

function wrapInParagraph(string) {
  const newArr = string.split("\n");
  const newArr2 = newArr.map(words => {
    return words = (`<p>${words}</p>`);
  });
  return newString = newArr2.join("\n");
}
// console.log(wrapInParagraph(text));
// console.log(wrapInParagraph(text2));




//* Задача 10.
// Написать функцию, которая проверяет являются ли две строки анаграммами, причём регистр букв не имеет значения. Учитываются лишь буквы. 
// Пробелы или знаки препинания в расчёт не берутся
// * Анаграмма - так называется слово, которое содержит все буквы друго слова в том же количестве, но в ином порядке

// Пример
// isAnagram('finder', 'Friend'); // true
// isAnagram('hello', 'bye'); // false

function isAnagramm(string1, string2) {
  const lowString1 = string1.toLowerCase();
  const lowString2 = string2.toLowerCase();
  const sortString1 = lowString1.split("").sort().join("");
  const sortString2 = lowString2.split("").sort().join("");
  return sortString1 === sortString2;
}
// console.log(isAnagramm("finder", "Friend"));


//* Задача 11.
// Написать функцию, которая возвращает true/false в зависимости от того является ли слово палиндромом или нет. Нужно учитывать пробелы и знаки препинания

// * Палиндром - слово, предложение или последовательность символов, которая абсолютно одинаково читается, как в привычном направлении, так и в обратном.
// 'Anna' - это палиндром

// Пример:
// isPalindrome('racecar') // true
// isPalindrome('table') // false

function isPalindrome(string) {
  const lowString = string.toLowerCase();
  const reverseString = lowString.split("").reverse().join("");
  return lowString === reverseString;
}
// console.log(isPalindrome("racecar"));



//* Задача 12.
// Написать функцию, принимающая строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются 'a, e, i, o, u'

// Пример:
// findVowels('hello') // 2
// findVowels('why') // 0


// TODO: Done
const vowels = {
  a: 1,
  e: 1,
};

function vowelNum(string) {
  // let vowel = 0;
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
  //     vowel++;
  //   }
  // }
  // return vowel;

  const newVowelObj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (newVowelObj.hasOwnProperty(string[i])) {
      newVowelObj[string[i]]++;
      sum++;
    }
  }
  return sum;
  // for (const key in newVowelObj) {

  //   sum += newVowelObj[key];
  // }
  // console.log(`Total vowels: ${sum}`);
  // return newVowelObj;
}
console.log(vowelNum("why"));
console.log(vowelNum("uvavuuuueo"));