// * ===== constructor || class || prototype ===== * //

// 1. Задача
// Создать класс, с помощью которого создаются объекты - игроки, у которых есть свойства: никнейм, которые задаёт пользователь, монеты = 0, уровень = 1 и раса, которую задаёт пользователь

// Написать метод класса, который находится в прототипе
// Метод выводит всю информацию о пользователе в красивом виде:
// нинейем: <имя>
// монеты: <кол-во>
// ...

class Player {
  constructor(nickname = "noname", race = "bot") {
    this.nickname = nickname;
    this.race = race;
    this.coins = 0;
    this.level = 1;

    // Методы тут уходят в объект

    this.levelUp = function () {
      this.level++
    }
    this.coinsUp = function () {

      this.coins += 1000 ** this.level;
    }

  }
  // Методы тут уходят в прототип
  // Неявно Player.prototype.
  userFace() {
    console.log(
      `Никнейм: ${this.nickname}\nМонеты: ${this.coins}\nУровень: ${this.level}\nРаса: ${this.race}`);
  }
  nicknameChange(nickname) {
    this.nickname = nickname;
  }
}

obj = {
  name: 'Pvael',
  funct: function () {
    console.log('test');
  },
  ui() {
    console.log(1);
  }
}


const player = new Player("Calve", "Human");
const player2 = new Player();

console.log(player);
console.log(player2);

player2.nicknameChange("qwertyui")
player2.userFace();
player.userFace();
player2.userFace();


// 2 Реализовать задача 1 без использования class
// Только класс(ф-конструткор) называется Gamer

function Gamer(nickname = "nickname", race = "goblin") {
  this.nickname = nickname;
  this.coins = 0;
  this.level = 1;
  this.race = race;

  this.levelUp = function () {
    this.level++
  }
}

Gamer.prototype.userID = function () {
  console.log(`Никнейм: ${this.nickname}\nМонеты: ${this.coins}\nУровень: ${this.level}\nРаса: ${this.race}`);
}


const gamer1 = new Gamer("Vova", "Dark Elf");
console.log(gamer1);
gamer1.userID();



// 3 задача
// Вывести все свойства объекта player и объекта gamer1 через for-in

for (const key in player) {
  console.log(key);
}
console.log('');

for (const key in gamer1) {
  console.log(key);
}



// 1. Написать метод levelUp, метод увеличивает уровень на 1 - в объекте

// 2. Написать метод, смена никнейма - в прототипе

// 3. Написать метод getCoins (в объекте), игрок получает монеты, в зависимости от уровня по формуле:
// coins = 1000 ^ lv



player.levelUp();
player.levelUp();
player.levelUp();
player.levelUp();
player.levelUp();
player.coinsUp();
player.userFace();

gamer1.levelUp();
gamer1.levelUp();
gamer1.levelUp();
gamer1.levelUp();
gamer1.userID();





