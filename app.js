const rainbowContainer = document.querySelector(".rainbow-container");
const ranBtn = document.querySelector(".random-btn");
const resetBtn = document.querySelector(".reset-btn");
const color = rainbowContainer.children;
// it gets different numbers
function random(number) {
  return Math.floor(Math.random() * number);
}

rainbowContainer.addEventListener("click", (e) => {
  e.target.style.borderColor = `rgb(${random(255)}, ${random(255)}, ${random(
    255
  )})`;
 
});

ranBtn.addEventListener("click", () => {
  
  for (let i = 0; i < color.length; i++) {
    color[i].style.borderColor = `rgb(${random(255)}, ${random(255)}, ${random(
      255
    )})`;
  
  }
});

resetBtn.addEventListener("click", ()=>{
    
    for (let i = 0; i < color.length; i++) {
      color[i].removeAttribute("style")
    }
    
})


