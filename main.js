let h1Text = document.getElementById("h1Text");
let changeText = document.getElementById("changeText");
let fontSizeUp = document.getElementById("fontSizeUp");
let fontSizeDown = document.getElementById("fontSizeDown");
let ChangeTextColor = document.getElementById("ChangeTextColor");
let ChangeBg = document.getElementById("ChangeBg");
let addImg = document.getElementById("addImg");

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

let img = document.createElement("img");
addImg.addEventListener("click", () => {
  if (img.src == "") {
    img.src =
      "https://images.pexels.com/photos/13422162/pexels-photo-13422162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  } else {
    img.src =
      "https://images.pexels.com/photos/30921109/pexels-photo-30921109/free-photo-of-majestic-icelandic-waterfall-in-scenic-landscape.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  }
});
document.body.appendChild(img);
