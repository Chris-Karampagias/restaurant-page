import navbar from "./navbar";
import menuPage from "./menu";
import homePage from "./home";
import contactPage from "./contact";
import "./style.css";

navbar();
homePage();

const menuButton = document.querySelector(".menu-button");
const contactButton = document.querySelector(".contact-button");
const homeButton = document.querySelector(".home-button");
const content = document.getElementById("content");

function changeButtonStatus(element) {
  element.classList.toggle("clicked");
}

function findClickedButton() {
  if (homeButton.classList.contains("clicked")) {
    changeButtonStatus(homeButton);
  } else if (menuButton.classList.contains("clicked")) {
    changeButtonStatus(menuButton);
  } else {
    changeButtonStatus(contactButton);
  }
}

homeButton.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  findClickedButton();
  homeButton.classList.toggle("clicked");
  homePage();
});

menuButton.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  findClickedButton();
  menuButton.classList.toggle("clicked");
  menuPage();
});

contactButton.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  findClickedButton();
  contactButton.classList.toggle("clicked");
  contactPage();
});
