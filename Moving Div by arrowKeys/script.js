const element = document.getElementById("myDiv")
window.addEventListener("keydown", move);
window.addEventListener("mousedown",startDragging);
let x = 0;
let y = 0;
let initialX,initialY;
let offsetX=0,offsetY=0;
let isDragging=false;
function move(event) {
  switch (event.key) {
    case "ArrowUp":
    if(y-10<0){
        break;
    }
      y -= 10;
        element.style.top = y + "px"
      break;
    case "ArrowDown":
      y += 10;
        element.style.top = y + "px"
      break;
    case "ArrowLeft":
      x -= 10;
        element.style.left = x + "px"
      break;
    case "ArrowRight":
      x += 10;
        element.style.left = x + "px"
      break;
  }
}

function startDragging(event){
  isDragging=true;
  initialX= event.clientX - offsetX;
  initialY= event.clientY- offsetY;
  window.addEventListener("mousemove", moveElement)
  window.addEventListener("mouseup", stopDragging)
}

function moveElement(event){
  if(!isDragging) return;
  
  offsetX = event.clientX - initialX;
  offsetY = event.clientY - initialY;
  element.style.left= offsetX+"px";
  element.style.top=offsetY+ "px";

}

function stopDragging(event){
  isDragging=false;
  document.removeEventListener("mousemove", moveElement);
  document.removeEventListener("mouseup", stopDragging);
}

function resetPosition() {
  x = parseInt(element.style.left) || 0;
  y = parseInt(element.style.top) || 0;
}

window.addEventListener("keydown", resetPosition);