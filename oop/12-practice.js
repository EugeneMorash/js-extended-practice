// Задача

// Написать класс Animal
// Класс имеет 3 свойства:
// имя и возраст, и пол
// Также имеет в прототипе 1 метод - infoAnimal - выводит в консоль имя и возраст

// Написать двух наследников класса Animal

// Cat
// Имеет метод voice, которые выводит в консоль: "meow"
// По умолчанию переменна, которая отвечает за наличие ошейника равно false

// Dog
// Имеет метод voice, которые выводит в консоль: "wouf"
// По умолчанию переменна, которая отвечает за наличие ошейника равно true

class Animal {
  constructor(nickname = "noNick", age = 0, gender = "male") {
    this.nickname = nickname;
    this.age = age;
    this.gender = gender;
    this.hasCollar = false;
    this.vote = null;
  }
  infoAnimal() {
    console.log(`Nickname: ${this.nickname},\nAge: ${this.age}`);
  }
  voice() {
    console.log(this.vote);
  }
}

class Cat extends Animal {
  constructor(nickname, age, gender) {
    super(nickname, age, gender);
    this.vote = "meow"
  }
}

class Dog extends Animal {
  constructor(nickname, age, gender) {
    super(nickname, age, gender);
    this.hasCollar = true;
    this.vote = "Gafff";
  }
}

const barsik = new Cat("Barsik", 8);
console.log(barsik);
barsik.infoAnimal();
barsik.voice();

const zhuzha = new Dog("ZhuZha", 1, "female");

console.log(zhuzha);
zhuzha.infoAnimal();
zhuzha.voice();


//! 4 принципа ООП

// Полиморфизм (Один и тот же метод для разных объектов региарует по своему)

// Наследования (общее выносим в общий класс)

// Абстракция (из реальности в модель класса)

// Инкапсуляция (Мы не обращаемся напрямую к свойствам, а если их хотим поменять/получить, то пользуемся сетарми/гетерами)
// public, private, protected

// barsik.nickname = "New"
// console.log(barsik);
