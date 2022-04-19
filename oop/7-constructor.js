// * ===== * Функция Конструктор * ===== * //

// Зачем нужен? Если мы хотим создать много однотипных объектов
// Обычно функция - это глагол
// функция-Конструктор - это существительное

// Функция конструктор пишется с большой буквы


function Player(name = "noname", age) {
  // this - объект в который присваивается new Player()
  this.name = name;
  this.age = age;

  this.hello = function () {
    console.log('Hello! I\'m ' + this.name);
  }
  // Неявно return this
}

// Создать объект может только через оператор new
const player1 = new Player("Kate", 25);
console.log(player1);
player1.hello();

const player2 = new Player();
console.log(player2);
player2.hello();


// *  === Не литеральная форма записи === * //

// const array = [3, 7];
const array = new Array(3, 7);
console.log(array);


const num2 = 8.333;
console.log(num2);


const num = new Number(8.333);
console.log(num);
let testNum = num;
console.log(testNum);

console.log(num.toFixed(2));

num.toFixed(3);
parseInt(num)


const text = new String("text");
console.log(text);
// null, undefined - не имеют функций-конструктора


