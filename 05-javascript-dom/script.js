let header = document.querySelector("h1");
/*
h1 {
    font-size: 140px
}
*/
header.style.fontSize = "140px";

// 1. select the button with the id "highight-btn"
let btn = document.querySelector("#highlight-btn");
// 2. declare that when the button is pressed, a certain function
// should return
// -- DECLARATIVE --
btn.addEventListener("click", function() {
  let allTasks = document.querySelectorAll("li.urgent");
  for (let t of allTasks) {
    t.style.backgroundColor = "yellow";
  }
});
