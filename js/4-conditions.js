// * ==== Условия ===== * //

console.log('a'.charCodeAt());
console.log('b'.charCodeAt());
console.log('A'.charCodeAt());
console.log('B'.charCodeAt());

console.log('b' > 'a');

// Подробные проверки

// Проверить на пустую строку

const text = 0;
if (text === '') {
  console.log('empty');
}

// 0
// ''
// null
// undefined
// NaN



// &&
// if ()
console.log(1 && 2 && 3);
console.log(1 && 0 && 3);

// ||
console.log(true || false || 3);
console.log(false || false || 3);
