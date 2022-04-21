// * ===== try - catch - throw - finally ===== * //

function request() {
  try {
    const answer = []; // Представим, что запрос
    console.log(answer);

    if (!answer.length) {
      throw new Error("Пустой ответ");
    }
  } catch (error) {
    // console.log(error); // Ошибка
    console.log(error.name); // Имя ошибки
    // console.log(error.message) // Сообщение ошикби
    // console.log(error.stack) // Стэк вызовов

    if (error.name === "Error") {
      console.log(111);
      // throw new Error();
    }
    setTimeout(request, 5000);
  } finally {
    // console.log("Сюда попадаем в любом случае");
    // Обнуление переменных
    // Чистка данных
  }
}
request();

console.log('Next code');
