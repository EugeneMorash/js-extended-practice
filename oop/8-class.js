// function Player(name = "noname", age) {
//   // this - объект в который присваивается new Player()
//   this.name = name;
//   this.age = age;

//   this.hello = function () {
//     console.log('Hello! I\'m ' + this.name);
//   }
//   // Неявно return this
// }

// enumerable = true
// Player.prototype.helloProto = function () {
//   console.log('Hello! I\'m ' + this.name);
// }

// Array.prototype.forEach = function (callback, thisArg) { }



class Player {
  constructor(name = "noname", age) {
    this.name = name;
    this.age = age;

    // Метод уходит в обект
    // enumerable = true
    this.hello = function () {
      console.log('Hello! I\'m ' + this.name);
    }
  }

  // Метод уходит в прототип
  // enumerable = false
  helloProto() {
    console.log('Hello! I\'m ' + this.name);
  }
}
// Отличия от функции-конструктора
// 1. Нельзя вызвать функию конструктор без оператора new
// 2. Весь код внутри класса находится в строгом режиме "use strict"
// 3. Методы класса являются неперечисляемыми (цикл for-in их не видит) - enumerable = false

console.log(typeof Player); // function


const player1 = new Player('Nick', 33);
console.log(player1);
player1.helloProto();
player1.hello();


