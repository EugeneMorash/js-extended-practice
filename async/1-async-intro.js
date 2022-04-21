// * ===== async intro ===== * //

// * setTimeout() - функция из браузреного API

// function test(text) {
//   console.log(text);
// }

// // Интересное применение bind
// setTimeout(test.bind(null, 211), 1000);



function test() {
  for (let u = 0; u < 2900000000; u++) {
    let test = u * u ** u;
  }
  console.log("Function finish");
}

// * Синхронный код
// console.log(1);
// test(); // Не даёт выполнить код дальше, пока не отработает
// console.log(2);


// * Асинхронный код
// console.log(1);
// setTimeout(test, 0);
// console.log(2);


// * Задача с собеседования
console.log(1);
setTimeout(function () { console.log(a) }, 8000);
console.log(2);
setTimeout(function () { console.log(23) }, 6000);
console.log(3);
setTimeout(function () { console.log(32) }, 0);
console.log(4);
const a = 10;

// 1 2 3 4 32 23 10 

// ? Все асинхронный функции выполняются только после того, как отработает синхронный код


const btn = document.querySelector('button');

// * Event loop * //
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coMSk7CnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZygxMikgfSwgODAwMCk7CmNvbnNvbGUubG9nKDIpOwpzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coMjMpIH0sIDYwMDApOwpjb25zb2xlLmxvZygzKTsKc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKDMyKSB9LCAwKTsKY29uc29sZS5sb2coNCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// * Call stack
// * Wep Apis
// * Callback queue
