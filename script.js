let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //plano 2d
let box = 32; //pixels de cada quadrado
let snake = []; //array tamanho cobra
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBG() { //criar background
    context.fillStyle = "lightgreen"; //cores e estilo
    context.fillRect(0, 0, 16 * box, 16 * box); //local do jogo (RECT x, y, height, width)
}

function createSnake() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

createBG();
createSnake();