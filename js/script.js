export const gridBox = document.querySelectorAll('.gridBox');
export const points = document.querySelector('#points');


createRandomBox()
export function createRandomBox(){
    let randomInt = Math.floor(Math.random() * gridBox.length);
    setTimeout(()=>{
        gridBox[randomInt].style.backgroundColor = "red";
        gridBox[randomInt].addEventListener('click', getPoint)
        setTimeout(()=>{
            gridBox[randomInt].style.backgroundColor = "white";
            gridBox[randomInt].removeEventListener('click', getPoint)

            createRandomBox()
        },500)
    },1000)




    console.log(randomInt)
}

export function getPoint(){
    points.textContent = Number(points.textContent) +1;
    // alert('You get 1 point')
}