let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

let goLight = document.getElementById("goLight");
let slowLight = document.getElementById("slowLight");
let stopLight = document.getElementById("stopLight");

stopButton.addEventListener("click", () => {
  goLight.style.backgroundColor = "#111";
  slowLight.style.backgroundColor = "#111";
  stopLight.style.backgroundColor = "red";
});

slowButton.addEventListener("click", () => {
  goLight.style.backgroundColor = "#111";
  stopLight.style.backgroundColor = "#111";
  slowLight.style.backgroundColor = "orange";
});

goButton.addEventListener("click", () => {
  slowLight.style.backgroundColor = "#111";
  stopLight.style.backgroundColor = "#111";
  goLight.style.backgroundColor = "green";
});
