let button = document.querySelector('button')

let box = document.getElementById('box');
let colors = ['red', 'blue', 'pink', 'green', 'purple'];

button.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor() {
    let colorIndex = parseInt(Math.random() * colors.length);
    box.style.backgroundColor = colors[colorIndex]
}