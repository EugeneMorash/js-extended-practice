// * ===== Наследование ===== * //

class Person {
  constructor(name = "noname", age = 18) {
    this.name = name;
    this.age = age;
    this.race = 'human';
  }

  hello() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

// Workman
// Doctor

class Workman extends Person {
  constructor(name, age, field) {
    super(name, age); // Вызвать родительский конструктор
    // new Person(name)
    this.job = 'workman';
    this.field = field;
  }

  cleaning() {
    console.log("Здесь теперь чисто!");
  }
}

class Doctor extends Person {
  constructor(name, age) {
    super(name, age);
    this.job = 'doctor';
  }

  heal() {
    console.log("Ты теперь здоров!");
  }
}


const maks = new Workman("Maks", 20, "Old street");
maks.hello();
maks.cleaning();
// maks.heal()

const pavel = new Doctor("Pavel", 40);
pavel.hello();
pavel.heal()

console.log(maks);
console.log(pavel);


// * Navtive js
const tagDiv = document.createElement('div');
tagDiv.classList.value = 'test';
tagDiv.innerText = "Hello world!"
document.body.prepend(tagDiv);

// * Pure React *
// React.createElement("div", { className: 'test'}, "Hello world!")

// * React JSX *
// function component() {
//   return <div onclick={() => { clickDiv() }} className="test">Hello World</div>;
// }




