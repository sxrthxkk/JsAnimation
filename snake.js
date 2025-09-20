

let canvas = document.getElementById('canvas');
let score = document.getElementById('score');
let score1 = 0;


let cxt = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let snake = {
    x: 100,
    y: 100,
    dx: 0,
    dy: 0,
    width:20,
    height:20
}
let food = {
    x: Math.floor(Math.random() * (canvas.width - 20)),
    y: Math.floor(Math.random() * (canvas.height - 20)),
}
window.addEventListener('keydown',(e)=>{
  if(e.key == "ArrowUp") {
    snake.dy = -2; snake.dx = 0;
  }
  if(e.key == "ArrowDown") {
   snake.dy = 2; snake.dx = 0;
  }
  if(e.key == "ArrowLeft") {
    snake.dx = -2; snake.dy = 0;
  }
  if(e.key == "ArrowRight") {
    snake.dx = 2; snake.dy = 0 
  }
});


window.addEventListener('resize',()=>{canvas.width = window.innerWidth;
canvas.height = window.innerHeight;})


function animate(){ 
      if(snake.x < 0 || snake.x + snake.width > canvas.width ||
       snake.y < 0 || snake.y + snake.height > canvas.height){
        alert("Game Over!");
        return; 
    }
    cxt.clearRect(0,0,canvas.width,canvas.height)
    cxt.fillStyle = "green"
    snake.x += snake.dx;
    snake.y += snake.dy;
    cxt.fillRect(snake.x,snake.y,snake.width,snake.height);
      
    eatfood();
    requestAnimationFrame(animate)

}

animate();
function eatfood(){
    cxt.fillStyle = "white";
    cxt.fillRect(food.x,food.y,20,20);
    if(snake.x < food.x + 20 &&
    snake.x + snake.width > food.x &&
    snake.y < food.y + 20 &&
    snake.y + snake.height > food.y){
       snake.width += 20;
       score1++;
       score.innerText = `SCORE: ${score1}`;
       food.x = Math.floor(Math.random() * (canvas.width - 20));
       food.y = Math.floor(Math.random() * (canvas.height - 20));
    }
}
