// async await.

// async function func () {

// }

// const arrowFunc = async () => {

// }

const sayHello = async () => {
    console.log("Hello!");
  };
  
console.log("Hello from outer!");
sayHello();




// ASYNC FUNCTIONS:
// - результат работы функции (возвращаемое значение)
//   оборачивается в Промис
// - внутри асинхронных функций можно использовать await

const getNumber = async () => {
    return 1;
  };
  
const number = getNumber();
console.log(`number sync`, number);

getNumber().then((result) => {
console.log(`number in then`, result)
})




const sleep = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };
  
console.log("Getting data...");
sleep(1500).then(() => {
console.log("Data resolved");
});



const getData = async () => {
    console.log("Getting data");
    await sleep(1500);
    console.log("Data resolved");
  };
  
getData();




const url = "https://jsonplaceholder.typicode.com/posts/1";

const getPost = async () => {
  const response = await fetch(url);
  const post = await response.json();
  await sleep(1000);

  console.log(`response`, response);
  console.log(`post`, post);
};

getPost()



const SWAPI_URL = "https://swapi.dev/api";
const container = document.getElementById("container");
const preloader = document.getElementById("preloader");

const fetchMovies = async () => {
  return fetch(`${SWAPI_URL}/films`);
};

const createMovieCard = ({ title, producer, release_date }) => {
  const cardContainer = document.createElement("div");
  const titleElem = document.createElement("h4");
  const producerElem = document.createElement("p");
  const dateElem = document.createElement("p");

  cardContainer.classList.add("movie-card");

  titleElem.innerText = title;
  producerElem.innerText = producer;
  dateElem.innerText = release_date;

  cardContainer.append(titleElem, producerElem, dateElem);

  return cardContainer;
};

const renderMovies = ({ results: films }) => {
  const movieCards = films.map(createMovieCard);
  container.append(...movieCards);
};

const showPreloader = (show) => {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
};

// showPreloader(true);
// fetchMovies()
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((result) => {
//     showPreloader(false);

//     renderMovies(result);
//   })
//   .catch((err) => {
//     console.log(`err`, err);
//   });

const getMovies = async () => {
  showPreloader(true);
  const response = await fetchMovies();
  const result = await response.json();
  showPreloader(false);
  renderMovies(result);
};

getMovies();

// ERROR
// const test = () => {
//   await sleep(100)
// }

// ERROR
// await sleep(100)






// Promise.all

const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 800)), // 3
    new Promise((resolve) => setTimeout(() => resolve(1), 500)), // 1
  ];
  
const result = Promise.all(promises);
console.log(`result111`, result);
  
Promise.all(promises).then((result) => {
console.log(`result222`, result);
});




const getPromiseAllResult = async () => {
    const result = await Promise.all(promises);
    console.log(`result3`, result);
  };
  
getPromiseAllResult();




const promisesWithError = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)), // 1
  new Promise((resolve, reject) => setTimeout(() => reject("Error! 400"), 400)), // 2
  new Promise((resolve, reject) => setTimeout(() => reject("Error! 300"), 300)), // 3
];

const promiseErrorTest = async () => {
    const result = await Promise.all(promisesWithError);
  
    console.log(`resultE`, result);
  };
  
promiseErrorTest()




// Promise.all(promisesWithError)
//   .then((res) => {
//     console.log(`res`, res);
//   })
//   .catch((err) => {
//     console.log(`err`, err);
//   });

const urls = [
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/6/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/1/",
    // "https://swapi.dev/api/films/7/",
  ];
  
  // Алгоритм будет следующий:
  // - каждую ссылку нужно обернуть в fetch (map)
  // - Массив полученных промисов (возвращаемых fetch)
  //   нужно передать в Promise.all
  // - получим массив объектов Response
  // - что бы достать ответ сервера, у кажого из них нужно
  //   вызвать метод json() (map)
  // - поскольку этот метод асинхронный, нам нужно снова
  //   обернуть все в Promise.all и дождаться результата
  // - получаем результат
  
  const getAllFilms = async () => {
    const requests = urls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const jsonResponses = responses.map((resp) => resp.json());
    const result = await Promise.all(jsonResponses);
  
    renderMovies({ results: result });
  
    console.log(`result`, result);
    console.log(`requests`, requests);
    console.log(`responses`, responses);
  };
  
  getAllFilms();
  