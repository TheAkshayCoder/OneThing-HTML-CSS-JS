let i = 0;
let images = [];
const time = 3000;

// Image List
images[0] = "./images/card1.jpg";
images[1] = "./images/card2.png";
images[2] = "./images/card3.jpg";
images[3] = "./images/card4.png";

// Change Image
const changeImg = () => {
  document.slides.src = images[i];
  document.slide1.src = images[i];
  document.slides2.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
};

window.onload = changeImg;

const show1 = () => {
  document.slide1.src = images[0];
};

const show2 = () => {
  document.slide1.src = images[1];
};

const show3 = () => {
  document.slide1.src = images[2];
};

const show4 = () => {
  document.slide1.src = images[3];
};
