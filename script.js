const box = document.getElementById('circle')
const circle = box.getBoundingClientRect()


let maxWidth  = window.screen.width - circle.width
let maxHeight = window.screen.height - circle.height
let RADIUS = circle.width



function updatePosition(){
    posX = getRndInteger(RADIUS, maxWidth)
    posY = getRndInteger(RADIUS, maxHeight)

    box.style.transform = `translate(${posX}px, ${posY}px)`
    console.log(box.style.transform)

    requestAnimationFrame()
}

function getRndInteger(min, max) {
    return (Math.random() * (max - min + 1));
}

const circle_button = document.getElementById('circle_button')
circle_button.addEventListener("mouseenter", updatePosition)
updatePosition();