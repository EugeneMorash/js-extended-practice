// * ===== fetch ===== * //
// const urlRequest = 'https://swapi.dev/api/people/5';

// const response = fetch(urlRequest); // возвращает промис
// * 1 вариант
function httpRequest(urlRequest) {
  fetch(urlRequest)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(`Could not fetch ${response.url}, recevied ${response.status}`)
      }
      return response.json();
    })
    .then((bodyResponse) => { // Получить тело ответа - асинхронная операция
      // console.log(bodyResponse);
      // Обработка JSON в теле then
      generateHtml(bodyResponse);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Основной код:
const inputElement = document.querySelector('.input');
const btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', () => {
  httpRequest(`https://swapi.dev/api/people/${inputElement.value}`);
})


// * ===== async - await * ===== //
// * 2 вариант
// Основной код:
const inputElement2 = document.querySelector('.input2');
const btnElement2 = document.querySelector('.btn2');

btnElement2.addEventListener('click', () => {
  urlRequest(`https://swapi.dev/api/people/${inputElement2.value}`)
    // .then((bodyResponse) => { generateHtml(bodyResponse) })
    .catch((error) => { console.log(error.message) });
});

// Асинхронная функция
async function urlRequest(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${response.url}, recevied ${response.status}`)
  }

  const bodyResponse = await response.json();
  // return bodyResponse;
  generateHtml(bodyResponse);
}

// Пример AF
// const urlReq = async () => {};
// FE
// const urlReq = async function() {};


function generateHtml(bodyResponse) {
  const personTag = document.createElement('div');
  personTag.innerHTML = `name: ${bodyResponse.name}\nheight: ${bodyResponse.height}`
  document.body.append(personTag);
}

{/* <div className="card">
  {`name: ${bodyResponse.name}\nheight: ${bodyResponse.height}`}
</div> */}
