// Fetch

const SWAPI_URL = "https://swapi.dev/api";
const REQRES_URL = "https://reqres.in/api";

// fetch(`${SWAPI_URL}/films`)

// const getFilmsRequest = new XMLHttpRequest();
// getFilmsRequest.open('GET', `${SWAPI_URL}/films`);
// getFilmsRequest.responseType = 'json';
// getFilmsRequest.send();




// fetch(url, [options])

// - method (GET POST PUT PATCH DELETE)
// - body - тело запроса, используется в post put и patch
// - headers - заголовки (хедера запроса)

const options = {
  method: "POST",
  body: JSON.stringify({
    name: "morpheus",
    job: "leader",
  }),
}

fetch(`${REQRES_URL}/users`, options);




// Обработка Fetch запроса. Fetch и Promise

const filmsRequest = fetch(`${SWAPI_URL}/films`);
console.log(`filmsRequest`, filmsRequest);

filmsRequest
  .then((response) => {
    console.log(`response`, response);
    if (response.ok) {
      const result = response.json();
      return result;
    }
    return {}
  })
  .then((result) => {
    const { results: films } = result;
    console.log(`films`, films);
  })
  .catch((err) => {
    console.log(`err`, err);
  });





// Задача:
// - Получить фильмы с серввера
// - После получения отрендерить фильмы в виде карточек
//   в каждой из которых будет соержаться название,
//   продюсер и дата выпуска фильма
// - Пока загружаются фильмы на странице необходимо
//   отображать прелоадер

const container = document.getElementById("container");
const preloader = document.getElementById("preloader");

const fetchMovies = () => {
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
  // const movieCards = films.map((film) => createMovieCard(film));
  const movieCards = films.map(createMovieCard);
  console.log(`movieCards`, movieCards);

  container.append(...movieCards);
};

const showPreloader = (show) => {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
};

showPreloader(true);
fetchMovies()
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((result) => {
    showPreloader(false);

    renderMovies(result);
  })
  .catch((err) => {
    console.log(`err`, err);
  });

