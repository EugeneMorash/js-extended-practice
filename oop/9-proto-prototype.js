// * __proto__ & prototype * //

// __proto__
// Что это, у кого есть?
// __proto__ - это объект ~класса
// __proto__ - есть у всех объектов (+ примитивы, кроме null/undefined/bigInt)

const man = []; // new Array()
const user = {}; // new Object()
const age = 18; // new Number()
const text = "text"; // new String()
function testFunction() { // new Function()
  console.log("111");
}
class Music { } // new Function()
let isAdmin = true; // new Boolean()


// Одинаковые по типу объекты имеют одинаковый __proto__
// Любой объект создается с помощью класса или функции-конструктора

console.log(Music.__proto__ === testFunction.__proto__); // true
console.log(Music.__proto__ === user.__proto__); // false

console.log(man.__proto__ === user.__proto__); // false

console.log(text.__proto__ === age.__proto__); // false


// ! prototype - есть только у класса или функции
// Его нету у стрелочной функции
console.log(man.prototype); // undefined
console.log(Array.prototype);

// Чему равно значение __proto__?

console.log(Music.__proto__ === Function.prototype); // true

console.log(text.__proto__ === String.prototype); // true


console.log([]);







// 1.
const userPavel = { name: "Pavel" };

console.log(userPavel.__proto__);
console.log(userPavel.prototype);
console.log(userPavel.__proto__ === Object.prototype);


// 2.
const numbers = [5, 6, 7, 8, 3];
console.log(numbers);
console.log(numbers.__proto__);
console.log(numbers.prototype); // undefined
console.log(numbers.__proto__ === Array.prototype);
console.log(numbers.__proto__.__proto__ === Object.prototype); // true


// Array - класс / функция-конструктор - она создаёт экзмемляры класса (объекты)
// экзмемляры класса (объекты) - то, что создано с помощью функции-конструктора/класса


// 3.
console.log(Array.__proto__);
console.log(Array.prototype);
console.log(Array.__proto__ === Function.prototype);
console.log(Array.__proto__.__proto__ === Object.prototype);


// 4.

console.log(numbers.__proto__.__proto__ === userPavel.__proto__);

// 5.
console.log(Music.__proto__ === Function.prototype);
console.log(Music.prototype);


const track1 = new Music();
const track2 = new Music();

console.log(track1.__proto__ === Music.prototype);
console.log(track1.prototype); // undefined


const arr = new Array(3, 7, 6);
console.log(arr.__proto__ === Array.prototype);

const testFunc = () => console.log(111);

console.log(testFunc.__proto__ === Function.prototype);
console.log(testFunc.prototype);


const num = 1;
const num2 = 3;

console.log(num.__proto__ === num2.__proto__);


function Test() {
  this.name = "test";
}
const newTest = new Test();

console.log(newTest.__proto__ === Test.prototype);
console.log(newTest.prototype);

console.log(Test.__proto__ === Function.prototype);
console.log(Test.prototype);


class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}
const char = new Person("Nick");



console.log(char);
console.log(char.__proto__ === Person.prototype);
console.log(char.__proto__.__proto__ === Object.prototype);
console.log(char.__proto__.__proto__.__proto__); // null
console.log(char.__proto__.constructor.__proto__ === Function.prototype);
console.log(char.constructor.__proto__ === Function.prototype);



const name = () => { return 'noname' };
console.log(name.__proto__ === Function.prototype);
console.log(name.prototype);// undefined


//! Функия стрелочная не имеет this, arguments, prototype, super


















