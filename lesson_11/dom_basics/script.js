// DOM Basics

// Браузерное окружение:

// WINDOW
// ---DOM
// ------document
// ---BOM
// ------history
// ------location
// ------screen
// ------......
// ---JS
// ------Object
// ------Array
// ------Function
// ------Date
// ------......

// console.dir(document.body);

// DOM Nodes. Узлы и елементы
// - елементы (1)
// - текст (3)
// - комментарии (8)
// - прочие

// console.dir(document.body.children[0].children[0])

// Навигация по DOM-дереву.

// parentNode -> доступ к родительскому элементу
// nextSibling -> соседний следующий узел
// nextElementSibling -> соседний следующий елемент
// previousSibling -> соседний предыдущий узел
// previousElementSibling -> соседний предыдущий елемент
// childNodes -> список всех дом узлов (сюда входят текстовые
//               узлы и комментарии)
// сhildren -> список всех дочерних елементов
// firstChild -> первый дочерний узел
// firstElementChild -> первый дочерний елемент
// lastChild -> последний дочерний узел
// lastElementChild -> последний дочерний елемент

const wrapper = document.body.children[0];
// console.dir(wrapper);


console.log(`wrapper.parentNode`, wrapper.parentNode); // body
console.log(`wrapper.nextSibling`, wrapper.nextSibling); // text node
console.log(`wrapper.nextElementSibling`, wrapper.nextElementSibling); // script
console.log(`wrapper.previousSibling`, wrapper.previousSibling); // text
console.log(`wrapper.previousElementSibling`, wrapper.previousElementSibling); // text
console.log(`wrapper.childNodes`, wrapper.childNodes); // NodeList
console.log(`wrapper.children`, wrapper.children) // HTMLCollection
console.log(`wrapper.firstChild`, wrapper.firstChild); // text
console.log(`wrapper.firstElementChild`, wrapper.firstElementChild); // ul
console.log(`wrapper.lastChild`, wrapper.lastChild); // text
console.log(`wrapper.lastElementChild`, wrapper.lastElementChild); // p

const lastListElement = wrapper.firstElementChild.lastElementChild;
console.log(lastListElement)



const getAllChildren = (node) => {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    console.log(`child`, child);
    // console.dir(child);
    getAllChildren(child);
  }
};

getAllChildren(wrapper)





// Селекторы

// По css селектору
// - querySelector()
//   находит и возвращает первый элемент, который подходит
//   под селектор или null, если таких элементов нет
// - querySelectorAll()
//   находит и возвращает все элементы, подходящие под селектор, возвращает
//   NodeList, если таких элементов нет - возвращает пустой NodeList

// По айди
// - getElementById()
//   находит и возвращает элемент c искомым id,
//   если таких элементов нет - null

// - getElementsByTagName()
// - getElementsByClassName()
// - getElementsByName()
//   возвращают HTMLCollection, практически не используются, в силу того,
//   что существует querySelector

// получить div обертку
const parentElement = document.querySelector(".root");
console.log(`parentElement`, parentElement);


const allListElements = document.querySelectorAll("li");
console.log(`allListElements`, allListElements);


// получить li с классом test
const testLi = document.querySelector(".test");
console.log(`testLi`, testLi);


// получить первый елемент с классом example
const singleExample = document.querySelector(".example");
console.log(`singleExample`, singleExample);


// получить все элемены с классом example
const allExamples = document.querySelectorAll(".example");
console.log(`allExamples`, allExamples);


// получить элемент по айди
// const button = document.querySelector('#button');
const button = document.getElementById("button"); // без решетки!
console.log(`button`, button)




// Основые свойста DOM елементов
// console.dir(button);
// console.dir(parentElement);
// childNodes - коллекция всех дочерних дом узлов
// children - коллекция всех дочерних ЕЛЕМЕНТОВ
// innerText - текст, который сожержится в элементе
// innerHTML - HTML код, который сожержится в элементе
// style - объект стилей
// classList - массиво подобный объект, содержащий все классы по отдельности
// className - полное название класса в виде строки
// on... - события, принадлежажие элементу

// NodeList и HTMLCollection
// НЕ являются массивами !
// Имееют другие методы, не доступны все методы массива
// - у обоих есть length
// - у NodeList есть перебирающий forEach
// NodeList - статический
// HTMLCollection - меняется, если изменится html

// - Array.from(iterable)
// - ... spread

const productsList = document.querySelector(".products-list");
console.log(`productsList`, productsList);
// const productsListElements = productsList.children;
const productsListElements = document.querySelectorAll(".products-list__item");
console.log(`productsListElements`, productsListElements);




// Трансформация: 
// const productsListElementsArray = Array.from(document.querySelectorAll('.products-list__item'));
const productsListElementsArray = [
    ...document.querySelectorAll(".products-list__item"),
  ];
  
console.log(`productsListElementsArray`, productsListElementsArray);

const products = productsListElementsArray.map((li) => li.innerText);
console.log(`products`, products);



const divs = document.querySelectorAll('div');
// console.log(`divs`, divs);

const boxesContainer = document.querySelector('.boxes');
console.log(`boxesContainer`, boxesContainer);

const boxes = boxesContainer.querySelectorAll('div');
console.log(`boxes`, boxes)