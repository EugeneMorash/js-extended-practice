// * ===== callback ===== * //

// Написать функцию, при вызове которой загружается скрипт

const refLodash = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js";
const refSwiper = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.3/swiper-bundle.min.js";


function scriptLoader(error, src) {
  if (error) {
    console.log(`Скрипт ${src} НЕ загружен`);
    console.log("Ошибка, повтор запроса через 5 секунд");
    setTimeout(() => { loadScript(src, scriptLoader) }, 5000);

  } else {
    console.log(`Скрипт ${src} загружен`);

    // Выполнение определённого кода после загрузки
    const obj = { name: 'Pavel' };
    const copyObj = _.cloneDeep(obj);
    console.log(copyObj);
    console.log(obj === copyObj);

    // ! Если после загрузки lodash нужно загрузить swiper
    loadScript(refSwiper, () => {
      // + нужно реализовывать проверки
      console.log("swiper загружен");

      // ! Если нужно загрузить скрпит после swiper
      // loadScript(refSwiper, () => {
      //   console.log("swiper загружен");
      //   loadScript(refSwiper, () => {
      //     console.log("swiper загружен");
      //     loadScript(refSwiper, () => {
      //       console.log("swiper загружен");
      //       loadScript(refSwiper, () => {
      //         console.log("swiper загружен");
      //          !! Колбэк - пирамида (адд колбэков)
      //       });
      //     });
      //   });
      // });
    });
  }
}



function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  document.head.append(script);


  script.addEventListener('load', () => {
    callback(null, src);

  });
  // script.addEventListener('load', callback.bind(null, src));
  script.addEventListener('error', () => { callback(new Error(), src) });
}


loadScript(refLodash, scriptLoader);




// ! Скаичвание скрипта - ассинхронное действие
// const obj = { name: 'Pavel' };
//   const copyObj = _.cloneDeep(obj);
//   console.log(copyObj);
//   console.log(obj === copyObj);
