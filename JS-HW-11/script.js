const createTooltip = (elem, text) => {
        console.log(`elem`, elem);
    const tooltipObj =  document.createElement('div');
    tooltipObj.classList.add('tooltip');
    tooltipObj.innerText = text;
    const tooltipObjDoc = document.body.appendChild(tooltipObj);
    
    tooltipObjDoc.style.top = elem.getBoundingClientRect().top + window.pageYOffset - tooltipObjDoc.offsetHeight - 10 +  'px';
    
    tooltipObjDoc.style.left = window.pageXOffset + elem.getBoundingClientRect().left + (elem.offsetWidth/2 - tooltipObjDoc.offsetWidth/2) + 'px';
};



const p = document.getElementById('for_tooltip');

createTooltip(p, 'example text bla bla bla');