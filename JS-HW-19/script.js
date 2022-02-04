const IPAPI_URL = "https://ipapi.co/json/";
const RESTCOUNTS_URL = "https://restcountries.com/v2/name/";
const SWAPI_PEOPLE_URL = "https://swapi.dev/api/people/";

const task1Elem = document.getElementById('task1-id');

const handleRequestErrors = async (response) => {
    if(!response.ok) {
        const { error } = await response.json();
        throw new Error(response.status);
    }
    return response;
}

const getCountryInfo = async () => {
    try {
        const response = await handleRequestErrors(await fetch(IPAPI_URL, {method: "GET"}));
        const { country_name, country_capital, currency } = await response.json();
        return { 
            country_name, 
            country_capital, 
            currency 
        };
    } catch (error) {
        console.log('error.message', error.message);
        return { 
            country_name: "(N/A)", 
            country_capital: "(N/A)", 
            currency: "(N/A)" 
        };
    }
}

const getCounrtyFlag = async (countryName) => {
    try {
        const response = await handleRequestErrors(await fetch(RESTCOUNTS_URL + countryName, {method: 'GET'}));
        const [{flags: {png: flag}}] = await response.json();
        return flag;
    } catch (error) {
        console.log('error.message', error.message);
        return "(N/A)";
    }
}

const renderCountryInfo = async () => {
    const countryInfoElem = document.getElementById('country-info-id');
    // to clear info container
    countryInfoElem.innerHTML = "";
    const country = await getCountryInfo();
    const countryNameElem = document.createElement('h3');
    countryNameElem.innerText = country.country_name;
    const countryCapitalElem = document.createElement('h4');
    countryCapitalElem.innerText = country.country_capital;
    const countryCurrencyElem = document.createElement('h4');
    countryCurrencyElem.innerText = country.currency;
    // render flag
    const flagPNGUrl = await getCounrtyFlag(country.country_name);
    const flagElem = document.createElement('img');
    flagElem.setAttribute('src', flagPNGUrl);
    flagElem.setAttribute('alt', country.country_name);
    countryInfoElem.classList.add('country-card');
    countryInfoElem.append(countryNameElem, countryCapitalElem, countryCurrencyElem, flagElem);
}

task1Elem.querySelector('button:nth-child(1)').addEventListener('click', renderCountryInfo);




const task2Elem = document.getElementById('task2-id');

const getCharacterInfo = async (characterID) => {
    try {
        const response = await handleRequestErrors(await fetch(SWAPI_PEOPLE_URL + 
                     characterID +
                     "/?" +
                     new URLSearchParams({
                        format: 'json'
                    }), 
                     {method: 'GET'}));
        const {name: characterName, films} = await response.json();
        return {
            characterName,
            films
        };
    } catch (error) {
        console.log('error.message', error.message);
        return {
            characterName: '(N/A)',
            films: {}
        };
    }
}

const getFilmTitle = async (filmURL) => {
    try {
        const response = await handleRequestErrors(await fetch(filmURL + 
                    "?" + 
                    new URLSearchParams({
                        format: 'json'
                    }), 
                     {method: 'GET'}));
        const { title } = await response.json();
        return title;
    } catch (error) {
        console.log('error.message', error.message);
        return "";
    }
}

const getFilmTitles = async (filmURLs) => {
    const requests = filmURLs.map((filmURL) => getFilmTitle(filmURL));
    const filmTitles = await Promise.all(requests);
    return filmTitles;
}

const renderFilms = async (filmURLs) => {
    const containerElem = event.target.parentElement;
    if(!containerElem.hasAttribute('isFilled')) {
        const filmTitles = await getFilmTitles(filmURLs);
        titleElems = [];
        for (let filmTitle of filmTitles) {
            filmTitleElem = document.createElement('h4');
            filmTitleElem.innerText = filmTitle;
            titleElems.push(filmTitleElem);
        }
        containerElem.append(...titleElems);
        containerElem.setAttribute('isFilled', 'true');
    }
}

const renderCharacterInfo = async () => {
    const characterID = +document.getElementById('character-id').value;
    if (!(characterID >= 1 && characterID <= 82)) {
        alert('Character ID value should be between 1 and 82');
        return;
    }
    const {characterName, films} = await getCharacterInfo(characterID);
    const characterInfoElem = document.getElementById('character-info-id');
    characterInfoElem.innerHTML = "";
    const characterNameElem = document.createElement('h3');
    characterNameElem.innerText = characterName;
    const showFilmsButt = document.createElement('button');
    showFilmsButt.innerText = 'Films';
    showFilmsButt.addEventListener('click', function() { renderFilms(films); });
    characterInfoElem.classList.add('country-card');
    characterInfoElem.append(characterNameElem, showFilmsButt);
    characterInfoElem.removeAttribute('isFilled');
}

task2Elem.querySelector('button:nth-child(2)').addEventListener('click', renderCharacterInfo);
