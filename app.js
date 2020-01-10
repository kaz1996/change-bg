"use strict";

const body = document.querySelector("#js-body");
const changeButton = body.querySelector("#js-change-button");

const generateBgColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 255);
    rgb.push(num);
  }
  return rgb;
};

const countUp = (color, colorNum) => {
  let num = 0;
  const colorElement = document.querySelector(`#js-${color}`);
  const timerId = setInterval(() => {
    num += 1;
    if (num >= colorNum) clearInterval(timerId);
    colorElement.textContent = num;
  }, 0);
};

window.addEventListener("load", () => {
  const [r, g, b] = generateBgColor();
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  countUp("red", r);
  countUp("green", g);
  countUp("blue", b);
});

changeButton.addEventListener("click", () => {
  const [r, g, b] = generateBgColor();
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  countUp("red", r);
  countUp("green", g);
  countUp("blue", b);
});
