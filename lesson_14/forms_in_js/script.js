// FORMS in JS

const form = document.getElementById("login-form");

const passwordInput = document.getElementById("password");
const loginInput = document.getElementById("login");

const handleSubmit = (event) => {
  event.preventDefault();

  const formValues = {
    login: loginInput.value,
    password: passwordInput.value,
  };

  console.log(`formValues`, formValues);
};

form.addEventListener("submit", handleSubmit);




// Работа с инпутами
const exampleInput = document.getElementById("example");
const exampleContainer = document.getElementById("example-container");

const textElem = document.createElement("p");
exampleContainer.append(textElem);

const handleChange = (event) => {
  console.log(`CHANGE event`, event);
  console.log(`event.target.value`, event.target.value);

  textElem.innerText = event.target.value;
};

const handleInput = (event) => {
  console.log(`INPUT event`, event);
  console.log(`event.target.value`, event.target.value);

  textElem.innerText = event.data;
};

exampleInput.addEventListener("change", handleChange);
exampleInput.addEventListener("input", handleInput);




// select

const select = document.getElementById("example-select");

const handleSelectChange = (event) => {
  //  v1
  const value = event.target.value;
  //  v2
  const options = event.target.options;
  const selectedOption = options[options.selectedIndex];
  console.log(`selectedOption`, selectedOption);
};

select.addEventListener("change", handleSelectChange);




// - checkbox
const checkbox = document.getElementById("example-checkbox");

const handleCheckboxChange = (event) => {
  console.log(`event.target.value`, event.target.value);
  console.log(`event.target.checked`, event.target.checked);
};

checkbox.addEventListener("change", handleCheckboxChange);




// - radiobutton

const genderRadioGroup = document.getElementsByName("gender");

const getRadioValue = (radioGroup) => {
  const checkedRadio = [...radioGroup].find((radio) => radio.checked);
  if (!checkedRadio) {
    return null;
  }

  return checkedRadio.value;
};

const res = getRadioValue(genderRadioGroup);
// console.log(`res`, res)

const handleRadioButtonChange = (event) => {
  console.dir(event.target);
};

genderRadioGroup.forEach((radio) => {
  radio.addEventListener("change", handleRadioButtonChange);
});





// Форма обмена валют

const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency-select");
const resultElement = document.getElementById("result");

const rates = {
  USD: 27.3,
  EUR: 31.7,
};

const getExchangeResult = (amount, currency) => {
  return (Number(amount) / rates[currency]).toFixed(2);
};

const updateResult = (exhangeAmount) => {
  resultElement.innerText = exhangeAmount;
};

const handleCurrencySelectChange = (event) => {
  const selectedCurrency = event.target.value;
  const amount = amountInput.value;

  const result = getExchangeResult(amount, selectedCurrency);
  updateResult(result);

  console.log(`selectedCurrency`, selectedCurrency);
};

const handleAmountInputChange = (event) => {
  const currentAmount = event.target.value;
  const currency = currencySelect.value;

  const result = getExchangeResult(currentAmount, currency);
  updateResult(result);

  console.log(`currentAmount`, currentAmount);
};

amountInput.addEventListener("input", handleAmountInputChange);
currencySelect.addEventListener("input", handleCurrencySelectChange);





// Form Data

const exampleForm = document.getElementById("form-data-example");

const convertFormDataToObject = (formData) => {
  const formValues = {}

  for (let pair of formData.entries()) {
    console.log(`pair`, pair)
    formValues[pair[0]] = pair[1] 

  }

  return formValues
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const preparedData = convertFormDataToObject(formData);
  console.log(`preparedData`, preparedData)

  
};

exampleForm.addEventListener("submit", handleFormSubmit);
