/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
export default function createContactPage() {
  const content = document.getElementById("content");
  const body = document.querySelector("body");
  body.classList.add("hide-overflow");
  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-wrapper");
  const container = document.createElement("div");
  container.classList.add("contact-container");
  const location = document.createElement("img");
  location.setAttribute("src", "../src/assets/images/map.jpg");
  location.setAttribute(
    "alt",
    `The restaurant's location shown on google maps`
  );
  location.classList.add("location");
  const list = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        const item1 = document.createElement("li");
        item1.textContent = "Parkville St.";
        list.appendChild(item1);
        break;
      case 1:
        const item2 = document.createElement("li");
        item2.textContent = "393049202";
        list.appendChild(item2);
        break;
      case 2:
        const item3 = document.createElement("li");
        item3.textContent = "realemail@email.com";
        list.appendChild(item3);
        break;
    }
  }
  container.append(location, list);
  wrapper.appendChild(container);
  content.appendChild(wrapper);
}
