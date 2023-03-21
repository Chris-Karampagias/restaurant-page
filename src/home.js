export default function createHomePage() {
  const body = document.querySelector("body");
  body.classList.add("hide-overflow");
  const content = document.getElementById("content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  const interior = document.createElement("img");
  interior.setAttribute("src", "../src/assets/images/home-image.jpg");
  interior.setAttribute("alt", `A sketch of the restaurant's interior`);
  interior.classList.add("home-image");
  const para = document.createElement("p");
  para.classList.add("welcome");
  para.textContent = `Welcome to our 2d Restaurant! Have a look around and don't forget to
  check out our delicious homemade dishes!`;
  homeContainer.append(interior, para);
  content.appendChild(homeContainer);
}
