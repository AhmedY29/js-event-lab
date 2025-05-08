let h1Text = document.getElementById("h1Text");
let changeText = document.getElementById("changeText");
let fontSizeUp = document.getElementById("fontSizeUp");
let fontSizeDown = document.getElementById("fontSizeDown");
let ChangeTextColor = document.getElementById("ChangeTextColor");
let ChangeBg = document.getElementById("ChangeBg");

changeText.addEventListener("click", () => {
  h1Text.innerText = "Ahmed Alsaleh";
});
fontSizeUp.addEventListener("click", () => {
  h1Text.style.fontSize = "3em";
});
fontSizeDown.addEventListener("click", () => {
  h1Text.style.fontSize = "0.5em";
});
ChangeTextColor.addEventListener("click", () => {
  h1Text.style.color = "yellow";
});
ChangeBg.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f2f2f2";
});
