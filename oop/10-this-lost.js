// * ===== this ===== * //
// ? Что это такое и зачем он нужен?
// this - object
// this - указывает на тот объект, в контексте которого находимся
console.log(typeof this); // object


// Вопросы:
// 1. Чему равен контекст?
// 2. Где он теряется?
// 3. И как это исправить?


// (контекст создают только функции)
// Контекст передаётся в функцию: 
// 1) Через оператор new
// 2) Через точку
// 3) bind() | call() | apply()


// Исправить потерю  контекста можно:
// 1. Функцией-обёрткой (см 2.5)
// 2. bind() | call() | apply()
// 3. ~ присвоить функцию в метод и вызвать через объект (см 2.2 - 1 вариант)

// * 1. this в class / constructor * //

class Test {
  constructor(name) {
    // this = объекту, который мы создаем через оператор new
    this.name = name;
    console.log(this);
  }
}
const testObj = new Test('Alex');
const anotherObj = new Test('Pavel');

// * 2. this в обычных функциях / методах * //

const obj = {
  test: 'Test',
  fn() {
    console.log(this);
  }
};
obj.fn(); // 1) this === obj



function newFn() {
  console.log(this);
}

// ! Потеря контекста (this === window)
// window.newFn(); // неявно
newFn(); // 2) this === window, в строгом режиме - undefined

// * Исправить ситуацию:
// 1 вариант
obj.newFn = newFn;
obj.newFn(); // 3) this === obj

// 2 вариант
// * bind | call | apply
newFn.call(obj); // 4) this === obj
// ! * ===== См файл bind-call-apply.js ===== * ! //




// const obj = {
//   test: 'Test',
//   fn() {
//     console.log(this);
//   }
// };


// 5)
// Напоминание: контекст передаётся в функцию при вызове
// Здесь не передаём контекст, т.к. не вызываем функцию
// Мы просто обращаемся к функции, как к свойству объекта

// Неявно
// fnTest = fn() {
//   console.log(this);
// }


const fnTest = obj.fn;  // ! потеря контекста
// Мы просто сохранили только функцию в переменную
fnTest(); // 5) this === window

// * Исправление ситуации:
const fnTestFixed = () => { obj.fn() }; // AF
const fnTestFixed2 = function () { obj.fn() }; // FE
fnTestFixed(); // this === obj
fnTestFixed2(); // this === obj


// 6)
const someFn = (callback) => {
  callback(); // Здесь контекст не передали
}

const someObj = {
  name: 'someObj',
  getThis(a) {
    console.log(this, a);
  }
};

someFn(someObj.getThis); // Передаю метод функцию
// Невяно: callback = someObj.getThis; // ! потрея контекста
// this === window

// * Исправление ситуации:

someFn(() => { someObj.getThis() }); // this === someObj
// Невяно: callback = () => { someObj.getThis() };
// callback()



// * 3. this в стрелочная функция * //

const objective = {
  fn() {
    console.log(this); // this === objective
    function nameFn() {
      console.log(this); // this === window
    }
    nameFn(); // ! потеря контекста
  }
};
objective.fn()


// * Исправление ситуцации
// Стрелочная функция не имеет свою this, поэтому наследует this функции, в котором она находится
const objectivity = {
  fn() {
    console.log(this); // this === objective
    const nameFn = () => {
      console.log(this); // this === objective
    }
    nameFn();
  }
};
objectivity.fn();



// * 4. this в обработчиках событий addEventListener * //
const wrapperElement = document.querySelector('.wrapper');

wrapperElement.addEventListener('click', function (event) {
  console.log(event.target); // Тот, на кого нажли внутри прослушки
  console.log(event.currentTarget); // Тот на ком прослушка
  console.log(this); // this === event.currentTarget
});
