class CardsStorage {
    
    constructor() {
        this.currCardNo = 0;
        this.cardsArr = [];
        const cardsArrStored = JSON.parse(localStorage.getItem('cardsArr'));
        if (cardsArrStored) {
            this.cardsArr = cardsArrStored;
            this.currCardNo = cardsArrStored[cardsArrStored.length - 1].cardNo + 1;
        }
    };

    saveCard(itemType, itemID) {
        this.cardsArr.push({
            itemType: itemType,
            itemID: itemID,
            cardNo: this.currCardNo                
        });
        this.currCardNo++;
        localStorage.setItem('cardsArr', JSON.stringify(this.cardsArr));
    }

    removeCard(cardNo) {
        this.cardsArr = this.cardsArr.filter((item) => item.cardNo != cardNo);
        localStorage.setItem('cardsArr', JSON.stringify(this.cardsArr));
        };
    
}

class Сard {
    static render(toElement, data, cardNo, appObj) {
        const cardElem = document.createElement('div');
        cardElem.classList.add('card');
        cardElem.setAttribute('cardNo', cardNo);
        // card remove button
        const closeCont = document.createElement('div');
        closeCont.classList.add('close-container');
        const closeElem = document.createElement('span');
        closeElem.classList.add('close-element')
        closeElem.innerText = 'X';
        closeElem.addEventListener('click', (e) => this.remove(cardElem, appObj));
        closeCont.append(closeElem);
        const nameElem = document.createElement('h3');
        nameElem.innerText = data.name;
        cardElem.append(closeCont, nameElem);
        toElement.append(cardElem);
        return cardElem;
    }

    static remove(cardElem, appObj) {
        appObj.cardsStorage.removeCard(Number(cardElem.getAttribute('cardNo')));
        cardElem.remove();
    }
}

class VehicleCard extends Сard {
    static render(toElement, data, cardNo, appObj) {
        const cardElem = super.render(toElement, data, cardNo, appObj);
        const {cost_in_credits: cost, crew, passengers} = data;
        const costElem = document.createElement('p');
        costElem.innerText = `Cost in credits: ${cost}`;
        const crewElem = document.createElement('p');
        crewElem.innerText = `Crew: ${crew}`;
        const passengersElem = document.createElement('p');
        passengersElem.innerText = `Passengers: ${passengers}`;
        cardElem.append(costElem, crewElem, passengersElem);
    }
}

class StarshipCard extends Сard {
    static render(toElement, data, cardNo, appObj) {
        const cardElem = super.render(toElement, data, cardNo, appObj);
        const {model, manufacturer,max_atmosphering_speed: speed} = data;
        const modelElem = document.createElement('p');
        modelElem.innerText = `Model: ${model}`;
        const manufacturerElem = document.createElement('p');
        manufacturerElem.innerText = `Manufacturer: ${manufacturer}`;
        const speedElem = document.createElement('p');
        speedElem.innerText = `Max. atmosphering speed: ${speed}`;
        cardElem.append(modelElem, manufacturerElem, speedElem);
    }
}

class PlanetCard extends Сard {
    static render(toElement, data, cardNo, appObj) {
        const cardElem = super.render(toElement, data, cardNo, appObj);
        const {climate, terrain, population} = data;
        const climateElem = document.createElement('p');
        climateElem.innerText = `Climate: ${climate}`;
        const terrainElem = document.createElement('p');
        terrainElem.innerText = `Terrain: ${terrain}`;
        const populationElem = document.createElement('p');
        populationElem.innerText = `Population: ${population}`;
        cardElem.append(climateElem, terrainElem, populationElem);
    }
}


class API {

    static endpoints = {
        vehicle: 'https://swapi.dev/api/vehicles/',
        starship: 'https://swapi.dev/api/starships/',
        planet: 'https://swapi.dev/api/planets/'
    };
    
    static async handleRequestErrors(response) {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response;
    } 
    
    static async fetchItemData(itemID, itemType) {
        try {
            const response = await this.handleRequestErrors(await fetch(this.endpoints[itemType] + 
                        itemID +
                         "/?" +
                         new URLSearchParams({
                            format: 'json'
                        }), 
                         {method: 'GET'}));
            const jsonResult = await response.json();
            // if there are no 'name' field in JSON response - item ID was incorrect
            if(!jsonResult.name) {
                throw new Error('');
            }
            return jsonResult;
        } catch (error) {
            console.log('error.message', error.message);
            alert(`${error.message}\nThere is no '${itemType}' with ID = '${itemID}'`)
            return null;
        }
    }
}

class SWAPIBoard {

    async renderCard(itemID, itemType, cardNo) {
        cardNo = cardNo >= 0 ? cardNo : this.cardsStorage.currCardNo;
        const itemData = await API.fetchItemData(itemID, itemType);
        if (!itemData) {
            // no data were received - exit
            return null;
        }
        const containerElem =  this.formElem.parentElement.querySelector('#cards-id');
        switch (itemType) {
            case 'vehicle':
                VehicleCard.render(containerElem, itemData, cardNo, this);
                break;
            case 'starship':
                StarshipCard.render(containerElem, itemData, cardNo, this);
                break;
            case 'planet':
                PlanetCard.render(containerElem, itemData, cardNo, this);
                break;
        };
        return true;
    }
    
    async getSWAPIRequest(event) {
        event.preventDefault();
        const submitElem = this.formElem.querySelector('#submit-id');
        submitElem.disabled = true;
        const itemID = this.formElem.querySelector('#item-id').value;
        const itemType = this.formElem.querySelector('#endpoints').value;
        
        if (this.renderCard(itemID, itemType)) {
            this.cardsStorage.saveCard(itemType, itemID);
        };
        
        submitElem.disabled = false;
    }

    renderCardsInit(cardsStorage) {
        for (let card of cardsStorage.cardsArr) {
            this.renderCard(card.itemID, card.itemType, card.cardNo);
        }
    }
    
    constructor(elementToDisplay) {
        // render form for adding info cards
        this.cardsStorage = new CardsStorage();
        const allAppElem = document.createElement('div');
        this.formElem =  document.createElement('form');
        this.formElem.onsubmit = this.getSWAPIRequest.bind(this);
        // select for item types
        const selectElem = document.createElement('select');
        selectElem.id = 'endpoints';
        for (let enpointKey in API.endpoints) {
            const optionElem = document.createElement('option');
            optionElem.value = enpointKey;
            optionElem.innerText = enpointKey;
            selectElem.append(optionElem);
        }
        // input for item ID
        const inputIDElem = document.createElement('input');
        inputIDElem.id = 'item-id';
        inputIDElem.type = 'number';
        //submit button
        const submElem = document.createElement('button');
        submElem.type = 'submit';
        submElem.innerText = 'Add Item';
        submElem.id = 'submit-id';
        // underscore line
        const hrElem = document.createElement('hr');
        // block for rendering cards
        const cardsElem = document.createElement('div');
        cardsElem.id = 'cards-id';
        cardsElem.classList.add('cards');
        // adding controls to form
        this.formElem.append(selectElem, inputIDElem,submElem, hrElem);
        // adding form and card block to app block
        allAppElem.append(this.formElem, cardsElem);
        elementToDisplay.append(allAppElem);
        // render all saved cards
        this.renderCardsInit(this.cardsStorage);
    } 
}

const MySWAPIBoard = new SWAPIBoard(document.getElementById('for-app-id'));