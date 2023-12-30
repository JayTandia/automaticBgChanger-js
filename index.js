const body = document.querySelector("body")
const startBtn = document.querySelector("#startbtn")
const stopBtn = document.querySelector("#stopbtn")


function randomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color

}

startBtn.addEventListener('click', startChangingColor)
stopBtn.addEventListener('click', stopChangingColor)

let intervalID;

function startChangingColor(){
    intervalID = setInterval(() => {
        body.style.backgroundColor = randomColor()
    },1000)
}

function stopChangingColor(){
    clearInterval(intervalID)
}