/* eslint-disable default-case */
export default function createNavbar() {
  const content = document.getElementById("content");
  const navbar = document.createElement("div");
  const logo = document.createElement("img");
  navbar.classList.add("navbar");
  logo.setAttribute("src", "../src/assets/images/2d-logo.png");
  logo.setAttribute("alt", `The restaurant's logo`);
  logo.classList.add("logo-image");
  navbar.appendChild(logo);
  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    switch (i) {
      case 0:
        button.classList.add("home-button");
        button.classList.add("clicked");
        button.textContent = "Home";
        navbar.appendChild(button);
        break;
      case 1:
        button.classList.add("menu-button");
        button.textContent = "Menu";
        navbar.appendChild(button);
        break;
      case 2:
        button.classList.add("contact-button");
        button.textContent = "Contact Us";
        navbar.appendChild(button);
        break;
    }
  }
  content.appendChild(navbar);
}
