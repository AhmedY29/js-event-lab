let img = document.getElementById("img");
let listItems = document.getElementsByTagName("li");

function changeImg(e) {
  switch (e.target.id) {
    case "one":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
      break;
    case "two":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
      break;
    case "three":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
      break;
    case "four":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
      break;
    case "five":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
      break;
    case "six":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
      break;
    case "seven":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
      break;
    case "eight":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
      break;
    case "nine":
      img.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
      break;
  }
}

// for (let i of listItems) {
//   i.addEventListener("click", (e) => {
//     console.log(e.target.id);
//     switch (e.target.id) {
//       case "one":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
//         break;
//       case "two":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
//         break;
//       case "three":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
//         break;
//       case "four":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
//         break;
//       case "five":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
//         break;
//       case "six":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
//         break;
//       case "seven":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
//         break;
//       case "eight":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
//         break;
//       case "nine":
//         img.src =
//           "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
//         break;
//     }
//   });
// }
