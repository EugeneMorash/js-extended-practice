const obj = {
  test: 'Test',
  fn() {
    console.log(this);
  }
};


// Задача вызвать функцию newFn для объекта obj
function newFn(text, number) {
  console.log(text);
  console.log(number);
  console.log(this);
}

// * Исправить ситуацию:
// 1 вариант
obj.newFn = newFn;
obj.newFn("text"); // 3) this === obj


// * ===== 2 вариант ====== * //

// !!! 3 метода функций !!! // 
// * === bind | call | apply === * //


// * == метод bind(this, ...params) == * //
// Передаёт контекст this
// Возвращает функцию

// 1 вариант
const bindNewFn1 = newFn.bind(obj, "text", 7);
bindNewFn1();

// 2 вариант - best
const bindNewFn2 = newFn.bind(obj);
bindNewFn2("bind-text", 7);
// Функции будут выполняться всегда в контексте с obj


// * == метод call(this, ...params) == * //
// Передаёт контекст this
// Ничего не возвращает
// Сразу вызывает функцию с контектом

newFn.call(obj, "call-text", 21);


// * == метод apply(this, [...params]) == * //
// Передаёт контекст this
// Ничего не возвращает
// Сразу вызывает функцию с контектом
// 2 параметр массив

newFn.apply(obj, ["apply-text", 30]);


// *** Итого *** //

// 1) const newFunc = bind(this);
// newFunc(...params)
// или
// 2) const newFunc = bind(this, ...params);
// newFunc()

// call(this, ...params)

// apply(this, [...params])




