let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //plano 2d
let box = 32; //pixels de cada quadrado
let snake = []; //array tamanho corpo cobra
snake[0] = {
    x: 8 * box, //posicao inicial cobra
    y: 8 * box
}
let direction = "down" //posicao inicial cobra

//posicao aleatoria para comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
}

function createBG() { //criar background
    context.fillStyle = "lightgreen"; //cores e estilo
    context.fillRect(0, 0, 16 * box, 16 * box); //local do jogo (RECT x, y, height, width) desenha fundo jogo
}

function createSnake() { //criar cobra
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function foodUp() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box); //desenha comida
}

document.addEventListener('keydown', movement); //movimentacao cobra pelo teclado

function movement(event){
    //nao deixa a cobra de dar meia-volta
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function startGame(){
    //borda infinita
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    
    createBG();
    createSnake();
    foodUp();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //movimentacao cabeça cobra
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        //retira o ultimo elemento da array
        snake.pop();
    }
    else {
        //nova posicao para a comida
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //acrescenta um elemento a frente
}

let game = setInterval(startGame, 100); //gerar o jogo, atualiza
