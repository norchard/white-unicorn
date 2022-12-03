const handleMouseOver = () => {
  const cursor = document.getElementById("cursor");
  cursor.classList = "hover";
  const circle = document.getElementById("circle");
  circle.classList = "hover";
  // console.log("mousing over");
  // const tooltip = document.getElementById("tooltip");
  // tooltip.style.visibility = "visible";
};

const handleMouseOut = () => {
  console.log("mouseout");
  const cursor = document.getElementById("cursor");
  const circle = document.getElementById("circle");

  cursor.classList = "";
  circle.classList = "";

  // const tooltip = document.getElementById("tooltip");
  // tooltip.style.visibility = "hidden";
};

let pageTop = 0;

const closeMenu = (e) => {
  const main = document.getElementsByTagName("main");
  const footer = document.getElementsByTagName("footer");
  // main[0].style.height = "50vh";
  main[0].style.display = "block";
  footer[0].style.display = "block";

  // console.log(e.target);
  if (
    e.target.id === "menu-toggle" ||
    e.target.parentElement.id === "menu-toggle"
  ) {
    window.scrollTo(0, pageTop);
  } else if (e.target.id === "logo") {
    pageTop = 0;
    window.scrollTo(0, 0);
  }

  const menu = document.getElementById("menu-body");
  const toggle = document.getElementById("menu-toggle");
  toggle.classList.remove("open");
  menu.style.opacity = 0;
  menu.style.display = "block";
  setTimeout(() => {
    menu.style.display = "none";
  }, 200);
};

const openMenu = () => {
  pageTop = window.pageYOffset;
  const main = document.getElementsByTagName("main");
  const footer = document.getElementsByTagName("footer");
  // main[0].style.height = "50vh";
  main[0].style.display = "none";
  footer[0].style.display = "none";

  const menu = document.getElementById("menu-body");
  const toggle = document.getElementById("menu-toggle");
  toggle.classList.add("open");
  menu.style.display = "block";
  setTimeout(() => {
    menu.style.opacity = 100;
  }, 200);

  // window.removeEventListener("scroll");
};

const makeCursorLinkBehavior = () => {
  const links = document.getElementsByTagName("a");
  for (let link of links) {
    link.addEventListener("mouseover", handleMouseOver);
    link.addEventListener("mouseout", handleMouseOut);
  }
};

const makeFunLetters = () => {
  const heading = document.getElementsByClassName("intro")[0].childNodes[0];
  const words = heading.innerHTML.split(" ");

  const letters = words.map((word) => {
    return word.split("").map((letter) => `<div class="fly">${letter}</div>`);
  });

  const letterWords = letters.map((letter) => letter.join(""));

  heading.innerHTML = letterWords
    .map((letterWord) => `<div class="word">${letterWord}</div>`)
    .join("<div class='fly'>&nbsp;</div>");

  const flyingLetters = document.getElementsByClassName("fly");
  const inlineWords = document.getElementsByClassName("word");

  for (let inlineWord of inlineWords) {
    inlineWord.style.display = "inline-block";
  }

  const offset = Math.floor(Math.random() * 140);
  for (let flyingLetter of flyingLetters) {
    flyingLetter.style.display = "inline-block";
    flyingLetter.style.transform = `translateY(${offset}px)`;
    flyingLetter.style.opacity = 0;
    flyingLetter.style.transition = "all .5s ease-in-out";
    setTimeout(() => {
      flyingLetter.style.transform = "translateY(0px)";
      flyingLetter.style.opacity = 100;
    }, Math.floor(Math.random() * 2000));
  }
};

const Utilities = {
  handleMouseOut,
  handleMouseOver,
  closeMenu,
  openMenu,
  makeCursorLinkBehavior,
  makeFunLetters,
};

export default Utilities;
