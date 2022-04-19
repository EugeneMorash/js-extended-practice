// * ===== json ===== * //
// java script object notation

const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    stack: ['html', 'css', 'jQuery'],
    address: {
        coutry: 'Russia',
        city: 'Moscow'
    },
    hello: function () {
        console.log('Hello World!');
    },
    test: undefined,
    nuller: null
};
console.log(student);

// * Получить string в формате json из object * //

const jsonObj = JSON.stringify(student);
console.log(jsonObj);
console.log(typeof jsonObj); // string

// JSON.stringify пропускает:
// 1. Методы объектов
// 2. Свойства содержащие undefined
// 3. Символьные свойства (symbol)


// JSON.stringify поддерживает
// + object (кроме map, set, date, ...)
// + array
// + string
// + number
// + boolean
// + null

// *** Получить объект из JSON *** //
const obj = JSON.parse(jsonObj);
console.log(obj);


// * === Deep Clone === * //

console.log(obj.stack === student.stack); // false
console.log(obj.address === student.address); // false















