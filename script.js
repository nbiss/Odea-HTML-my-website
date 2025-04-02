const box = document.getElementById('circle')
const circle = box.getBoundingClientRect()

let posX = 0
let posY = 0
let velX = 10
let velY = 10
let speed = 20
let maxWidth  = window.screen.width - circle.width
let maxHeight = window.screen.height - circle.height
let RADIUS = circle.width


// interval = setInterval(()=>{console.log(getRndInteger(100, 1700))}, 1000)

function updatePosition(){
    posX = getRndInteger(RADIUS, maxWidth)
    posY = getRndInteger(RADIUS, maxHeight)

    box.style.transform = `translate(${posX}px, ${posY}px)`
    console.log(box.style.transform)

    requestAnimationFrame()
}

function getRndInteger(min, max) {
    return (Math.random() * (max - min + 1) + min);
}


//event listeners
const circle_button = document.getElementById('circle_button')
circle_button.addEventListener("click", updatePosition)