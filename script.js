let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //plano 2d
let box = 32; //pixels de cada quadrado
let snake = []; //array tamanho cobra
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "down" //posicao inicial cobra

function createBG() { //criar background
    context.fillStyle = "lightgreen"; //cores e estilo
    context.fillRect(0, 0, 16 * box, 16 * box); //local do jogo (RECT x, y, height, width)
}

function createSnake() { //criar cobra
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame(){
    createBG();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    //movimentacao cobra
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //retira o ultimo elemento da array
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //acrescenta um elemento a frente
}

let game = setInterval(startGame, 100); //gerar o jogo
