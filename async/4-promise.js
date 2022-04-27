// * ===== promise ===== * //

const refLodash = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js";
const refSwiper = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.3/swiper-bundle.min.js";

// promise - объект, у которого есть 3 состояния:
// Ожидание 'pending'
// Успешно 'fulfilled'
// Ошибка 'rejected'


// Создание promise - синхнронная операция
// Выполнение promise - асинхронная операция

// На вход promise - функция
// const promiseTest = new Promise(() => {});


// Как только промис создаётся, он находится в режиме ожидания 'pending'

console.log(0);
const promiseTest = new Promise((resolve, reject) => {
  // Эта функция выполняется сразу
  // resolve();

  const script = document.createElement('script');
  script.src = refLodash;
  document.head.append(script);

  script.addEventListener('load', () => {
    resolve(refLodash);
  });
  script.addEventListener('error', () => {
    reject(refLodash);
  });
});

console.log(222);

// then - добавить в очередь выполнения (прмис сам выполнит их)
// Функция в then выполнится, когда прмис будет в 'fullfiled'
// promiseTest.then(() => {})


promiseTest
  .then((value) => {
    console.log(`script ${value} load finished`);
    setTimeout(() => {
      throw new Error("41412");
    }, 1000);
    return value;
  })
  .then((value) => {
    console.log(value); // Получвем из предыдущего then
    console.log("Сработает после завершения первого then");
  })
  .catch((value) => {
    console.log(`script ${value} hasn't finished`);
  })
  ;


// * ===== async / await ====== * //




