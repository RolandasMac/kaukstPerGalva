const gridBox = document.querySelectorAll('.gridBox');
const points = document.querySelector('#points');
const birdInBox = document.createElement('img');

createRandomBox()
function createRandomBox(){
    let randomInt = Math.floor(Math.random() * gridBox.length);
    setTimeout(()=>{
        gridBox[randomInt].children[0].classList.remove("d-none");
        gridBox[randomInt].addEventListener('click', getPoint);
        setTimeout(()=>{
            gridBox[randomInt].children[0].classList.add("d-none");
            gridBox[randomInt].removeEventListener('click', getPoint);
            createRandomBox()
        },600)
    },1000)
}

function getPoint(){
    points.textContent = Number(points.textContent) +1;
}