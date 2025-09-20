let canvas = document.getElementById('canvas');
let cxt = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let snake = {
    x: 100,
    y: 100,
    dx: 0,
    dy: 0
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
    cxt.clearRect(0,0,canvas.width,canvas.height)
    cxt.fillStyle = "green"
    snake.x += snake.dx;
    snake.y += snake.dy;
    cxt.fillRect(snake.x,snake.y,20,20)
requestAnimationFrame(animate)
}

animate();