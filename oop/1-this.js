// * ===== контенкст this ===== * //

function test() {
  return function getThis() {
    console.log(this);
  };
}
const res = test();
res(); // window
console.log(this); // window

function old() {
  console.log(`I'm ${this.age} years old`);
}

const user = {
  name: "Pavel",
  age: 40,
  array: [3, 5, 6, 7],
  hello: function () {
    // ! this есть только у функции (в описании)
    // У стрелочной функции нету this

    // console.log("i'm " + name);
    // console.log("i'm " + window.name);

    // console.log("i'm " + user.name); // X
    console.log("i'm " + this.name); // V
    // console.log(this); // {name: 'Pavel', age: 40, hello: ƒ}
  },
  old,
  sumArray: function () {
    return this.array.reduce((prV, v) => {
      return prV + v + ` ${this.name}\n`;
    });
  },
  // sumArray2: function () {
  //   return this.array.reduce(function(prV, v) {
  //     return prV + v + ` ${this.name}\n`;
  //   });
  // },
};

console.log(user.sumArray());

const person = {
  name: "Maks",
  age: 39,
  old,
};
user.hello();
user.old(); // Вызвать метод old для объекта user
old.call(user); // Вызвать функцию old для объекта user

user.hello.call(person); // Вызвать метод hello (user'а) для объекта person

// person.hello();
person.old();
old();



