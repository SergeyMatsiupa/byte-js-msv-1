const renderWelcome = () => {
    const welcomeElem = document.createElement('h1');
    welcomeElem.innerText = "Welcome!";
    document.body.append(welcomeElem);
}

const incVisits = () => {
    let visitsCount = localStorage.getItem('visitsCount');
    visitsCount = visitsCount || 0;
    localStorage.setItem('visitsCount', +visitsCount + 1);
    return visitsCount; 
}

const renderVisitsCount = (visitsCount) => {
    const visitsCountElem = document.createElement('h2');
    visitsCountElem.innerText = `You visited this site ${visitsCount} times`;
    document.body.append(visitsCountElem);
}


renderWelcome();
const visitsCount = incVisits();
if (visitsCount) {
    renderVisitsCount(visitsCount);
}