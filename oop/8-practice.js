// 1 Задача

// Создать объект кошка
// У этого объекта должно быть 2 свойства:
// 1 - кличка
// 2 - возраст

// 2 задача
// Добавить свойство, которое отвечает на вопрос, кошка с шерстью или без

// 3 задача
// Добавить свойство, которое отвечает на вопрос: любит ли кошка курочку или нет

// 4 задача вывести все свойства косноль в виде:
// "ключ: значение"
// "nickname: Bonus"
// "age: 13"
// ...

// 5 задача
// удалить совйство is likes chicken

const cat = {
  nickname: 'Bonus',
  age: 13
};

cat.isFurry = true;
cat.isFurry = false;
cat['is likes chicken'] = true;


for (const key in cat) {
  console.log(`${key}: ${cat[key]}`);
}

delete cat['is likes chicken'];



// 6 задача
// Добавить метод голос, который выводит в консоль "мяу"

// 7 задача
// Создать метод, которвый выводит имя кошки 


cat.voice = function () {
  console.log("Мяу");
}
console.log(cat);
cat.voice();

const getName = function () {
  console.log(this.nickname);
}

cat.getName = getName;
cat.getName();


// Применить метод getName и для kitty
const kitty = {
  nickname: "Musi",
  age: 5,
  "likes food": ['chicken', 'pig', 'hotdog']
}

kitty.getName = getName;
kitty.getName();


// Создать  функцию омоложение
// Функция принимает на вход количество лет
// Функция уменьшает возраст кошки
// Функция должна работать для любого объекта 

const decreaseAge = function (years) {
  this.age -= years;
}

kitty.decreaseAge = decreaseAge;
kitty.decreaseAge(2);
console.log(kitty);

cat.decreaseAge = decreaseAge;
cat.decreaseAge(1);
console.log(cat);

console.log('=========================');


const user = {
  name: 'Pavel',
  age: 30,
  animals: [kitty, cat, kitty, kitty]
}
console.log(user);
// 1. вывести все любимые блюда кошки kitty

const { animals } = user;
const [, Musi] = animals;
console.log(Musi["likes food"]);


console.log(user.animals[1]['likes food']);
console.log(user.animals[1].age);

// const { foodMusi } = animals[1];
// console.log(foodMusi);

// Вывести любимые блюда кошек, чек возраст меньше 10



const catArray = user.animals.filter((cat) => {
  return cat.age < 10;
})

console.log(catArray);

catArray.forEach((cat) => {
  cat['likes food'].forEach((food) => {
    console.log(food);
  })
})

