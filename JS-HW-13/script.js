document.getElementById('next-butt-id').addEventListener('click',(event) => {
    const liObjs = document.querySelectorAll('.img-wrapp');
    for (let i = 0; i < liObjs.length; i++) {
        if (!liObjs[i].classList.contains('hide-elem')) {
            liObjs[i].classList.toggle('hide-elem');
            liObjs[(i+1 < liObjs.length ? i+1 : 0)].classList.toggle('hide-elem');
            break;
        }
    }
});

document.getElementById('prev-butt-id').addEventListener('click',(event) => {
    const liObjs = document.querySelectorAll('.img-wrapp');
    for (let i = liObjs.length-1; i >= 0; i--) {
        if (!liObjs[i].classList.contains('hide-elem')) {
            liObjs[i].classList.toggle('hide-elem');
            liObjs[(i-1 >= 0 ? i-1 : liObjs.length-1)].classList.toggle('hide-elem');
            break;
        }
    }
});