let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //plano 2d
let box = 32; //pixels de cada quadrado

function criarBG() { //criar background
    context.fillStyle = "lightgreen"; //cores e estilo
    context.fillRect(0, 0, 16 * box, 16 * box); //local do jogo (RECT x, y, height, width)
}

criarBG();