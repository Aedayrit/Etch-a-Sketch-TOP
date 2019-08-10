const container = document.querySelector('.container');
let button = document.querySelectorAll('button');

let a = [];



makeBox(3);

function makeBox(b){
    removeBox();
    container.style.gridTemplateColumns = `repeat(${b}, 1fr)`;

    let c = b*b;

    for(let i=0; i<c; ++i){
        a[i] = document.createElement('div');
        a[i].classList.add('gap');
        a[i].style.border = (b >= 75) ? "none" : '';
        container.appendChild(a[i]);
    }
    a.forEach((a) => a.addEventListener('mouseover', () => a.style.background = 'black'));
}

function removeBox(){
    a.forEach((a) => a.parentNode.removeChild(a));
    a.length = 0;
}

function clickedButton(e){
    let btn = document.querySelector(`#${e.target.id}`);
    console.log(btn.id);
    if(btn.id == 'resize'){
        makeBox(checkInput());
    } else if(btn.id == 'black'){
        a.forEach((a) => a.addEventListener('mouseover', () => a.style.background = 'black'));
    } else if(btn.id == 'assorted'){
        a.forEach((a) => a.addEventListener('mouseover', () => a.style.background = 'green'));
    }
}

button.forEach((button) => button.addEventListener('click', clickedButton));


function checkInput(){
    let box = prompt("how many grids?");
    if(isNaN(box)){
        checkInput();
    }
    return box;
}