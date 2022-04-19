// * ===== set ===== * //

// set - массив значений
// ! Каждое значение может повтриться только один раз !
// ! Ключ равен значению ! (key === value)


const set1 = new Set('button');
console.log(set1); // {'b', 'u', 't', 'o', 'n'}

const set2 = new Set(['button', 'input', 'div', 'button']);
console.log(set2); // {'button'}


// Добавить элемент
set2
    .add('ul')
    .add('div');
console.log(set2);

// Проверить элемент
if (set2.has('div')) {
    // Удалить элемент
    set2.delete('div');
} else {
    // Добавить элемент
    set2.add('div');
}
console.log(set2); // {'button', 'input', 'ul'}
console.log(set2.size); // 3

// Удалить всё
set1.clear()
console.log(set1); // {size: 0}

// * копирование * //
const copySet = new Set(set2);

console.log(copySet);
console.log(set2);
console.log(copySet === set2);



// * Методы * //
console.log(set2.values()); // {'button', 'input', 'ul'}

// console.log(set2.keys()); // {'button', 'input', 'ul'}
// console.log(set2.entries()); // {'button' => 'button', 'input' => 'input', 'ul' => 'ul'}


// Получить массив из set
console.log([...set2]);


set2.forEach((value, againValue, ValueAndValue) => {
    console.log(value);
});

// Set лучше оптимизирован для добавлений, он автоматически проверяет на уникальность - лучше в производительности



// Есть аналог WeekSet











