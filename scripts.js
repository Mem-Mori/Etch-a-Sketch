const newDiv = document.querySelector('#container');

//Remove div elements.
function remove() {
    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.firstChild);
    }
}

//Generate gray shading.
function generate2() {
    let sVal = document.getElementById('gridSize').value;
    value.textContent = sVal;
    remove();
    newDiv.setAttribute('style', `grid-template-columns: repeat(${sVal}, 2fr); grid-template-rows: repeat(${sVal}, 2fr)`);
    for (let i = 0; i < (sVal * sVal); i++) {    
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener('mouseover', function(event) {
            event.target.classList.add('content2');
        })
        newDiv.appendChild(content);
    }
}

//Generate rgb shading.
function generate3() {
    let sVal = document.getElementById('gridSize').value;
    value.textContent = sVal;
    remove();
    newDiv.setAttribute('style', `grid-template-columns: repeat(${sVal}, 2fr); grid-template-rows: repeat(${sVal}, 2fr)`);
    for (let i = 0; i < (sVal * sVal); i++) {    
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener('mouseover', function(event) {
            const rgb = '#' + (Math.floor(Math.random()*16777215).toString(16));
            event.target.style.backgroundColor = rgb;
        })
        newDiv.appendChild(content);
    }
}

function rgbActive() {
    rgbBut.classList.add('rgbActive');
    but.classList.remove('butActive');
    but.textContent = 'GRAY';
    rgbBut.textContent = 'CLEAR';
}

function grayActive() {
    but.classList.add('butActive');
    rgbBut.classList.remove('rgbActive')
    but.textContent = 'CLEAR';
    rgbBut.textContent = 'RGB';
}

//Grid size input.
const slider = document.querySelector('#gridSize');
const value = document.querySelector('.value');
slider.addEventListener('input', generate2);
slider.addEventListener('input', grayActive)

//Change to gray selection.
const but = document.getElementById('reset');
but.addEventListener('click', generate2);
but.addEventListener('click', grayActive)

//Change to color selection
const rgbBut = document.getElementById('rgb');
rgbBut.addEventListener('click', generate3);
rgbBut.addEventListener('click', rgbActive);