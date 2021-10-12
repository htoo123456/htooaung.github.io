const ulTag = document.querySelector("ul");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const fullLines = document.querySelector(".fullLine");
const calculator = document.querySelector(".calculator")
const h6  = document.querySelector("h6")
const tags = ["Blue", "White", "Purple"];
const firstTheme = [
  "hsl(222, 26%, 31%)",
  "hsl(223, 31%, 20%)",
  "hsl(224, 36%, 15%)",
  "#fff"
];
const secondTheme = [
  "hsl(0, 0%, 90%)",
  "hsl(0, 5%, 81%)",
  "hsl(0, 0%, 93%)",
  "#000"
]
const thirdTheme = [
  "hsl(268, 75%, 9%)",
  "hsl(268, 71%, 12%)",
  "hsl(268, 71%, 12%)",
  "hsl(52, 100%, 62%)"
]
tags.forEach((t) => {
  const li = document.createElement("li");
  li.append(t);
  ulTag.append(li);
  li.classList.add(t);
  li.id = tags.indexOf(t);
  li.addEventListener("click", (e) => {
    const target = e.target;
    const clicked = e.target.id;
    const clickedLiTag = document.getElementById(clicked);
    const clickedLiTagWidth = clickedLiTag.offsetWidth;
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
    slider.style.width = clickedLiTagWidth + "px";
    if (clicked == "0") {
      changeColor(firstTheme);
    } else if (clicked == "1") {
      changeColor(secondTheme);
    } else if (clicked == 2) {
      changeColor(thirdTheme);
      console.log(clickedLiTagOffsetLeft);
      console.log(clickedLiTagWidth);
    }
    slider.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
    localStorage.setItem("theme", `${target.textContent}`);
  });
});

window.addEventListener("load", () => {
  const getFromLs = localStorage.getItem("theme");
  if(getFromLs) {
    console.log(typeof getFromLs)
    const element = document.querySelector(`.${getFromLs}`);
    checkValue(element);
  }
});
const checkValue = (liTag) => {
  if (liTag.textContent == "Blue") {
  changeColor(firstTheme);
} else if (liTag.textContent == "White"){
  changeColor(secondTheme);
} else if (liTag.textContent == "Purple") {
  changeColor(thirdTheme);
}
const offsetWidth = liTag.offsetWidth;
const offsetLeft = liTag.offsetLeft;
slider.style.width = offsetWidth + "px";
slider.style.transform = `translateX(${offsetLeft}px)`;
}
const changeColor = (arr) => {
  body.style.backgroundColor = arr[0];
  calculator.style.backgroundColor = arr[0];
  fullLines.style.backgroundColor = arr[1];
  input.style.backgroundColor = arr[2];
  inputSide.style.backgroundColor = arr[2];
  input.style.color = arr[3];
  h6.style.color = arr[3];
};

