const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const divForList = document.body.appendChild(document.createElement('div'));



// 1
const task1 = () => {

  const renderProdsAppend = (prodsArr, elemToRend) => {
    const divObj = document.createElement('div');
    for (let prodObj of prodsArr) {
        const objH2 = document.createElement('H2');
        objH2.innerText = prodObj.name;
        const objH3 = document.createElement('H3');
        objH3.innerText = prodObj.brand;
        const objUL = document.createElement('ul');
        for (let strProp of prodObj.properties) {
            const objLI = document.createElement('li');
            objLI.innerText = strProp;
            objUL.append(objLI);
        }
        divObj.append(objH2, objH3, objUL);
    }
    
    elemToRend.append(divObj);
  }

  renderProdsAppend(products, divForList);

}


//2
function task2() {

    const renderProdsInnerH = (prodsArr, elemToRend) => {
        // const
        const divObj = `
        <div>
            ${prodsArr.map((item) => 
                '<h2>'+item.name+'</h2>'
                +'<h3>'+item.brand+'</h3>'
                +'<ul>'+item.properties.map((p) => 
                        '<li>' + p + '</li>').join('\n')+'</ul>'
                ).join("\n")}
        </div>`;
        elemToRend.innerHTML = divObj;
      }
      
      renderProdsInnerH(products, divForList);
}