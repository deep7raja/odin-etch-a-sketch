const container = document.querySelector('.container');
const btnReset = document.querySelector('.btnReset');

let side = 16;
let sidel = 750/side;

function createGrid(side){
    let sidel = 750/side;
    const pixels = [];
    for(let i=0; i<side*side; ++i){
        pixels.push(document.createElement('div'));
        // pixels[i].textContent = i;
        pixels[i].style.cssText = `height:${sidel}px;width:${sidel}px`;
        pixels[i].addEventListener('mouseover', ()=>{pixels[i].classList.add('hover');});
        pixels[i].addEventListener('mouseleave', ()=>{pixels[i].classList.remove('hover');});
        container.appendChild(pixels[i]);
    }
}



createGrid(16);
btnReset.addEventListener('click', ()=>{
    while(container.firstChild){
        container.firstChild.remove();
    }
    side = prompt('enter side size of square grid', 10);
    createGrid(side);
});

