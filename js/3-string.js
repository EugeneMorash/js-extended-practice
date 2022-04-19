// * ===== string ===== * //
const num = 10;
const testString = '  It\'s my text';
const array = ['  It', 's my text'];

// ! Все методы со строками не меняют исходную строку
// ! Только возвращают новую


console.log(testString.length); // 14

console.log(testString.toLowerCase()); // "  it's my text"
console.log(testString.toUpperCase()); // '  IT'S MY TEXT'
console.log(testString.trim()); // 'It\'s my text'

console.log(testString.indexOf('t', 2)); // 3
console.log(testString.includes('t', 2)); // true
console.log(testString.slice(2, 6)); // 'It's' (по 6 не вкл)

console.log(testString.split("'")); // ['  It', 's my text']
console.log(array.join("'")); // '  It\'s my text'
// Строка наоборот
console.log(testString.split("").reverse().join("")); // txet ym s'tI






console.log(String(num)); // '10'
console.log(num.toString()); // '10'
console.log(num.toFixed()); // '10'
