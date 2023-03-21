/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
export default function createMenu() {
  const body = document.querySelector("body");
  body.classList.add("body-menu");
  const content = document.getElementById("content");
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const menuTitle = document.createElement("p");
  menuTitle.textContent = "Our Menu";
  menuContainer.appendChild(menuTitle);
  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        const div1 = document.createElement("div");
        div1.classList.add("starter");
        const title1 = document.createElement("p");
        title1.textContent = "STARTER";
        const egg = document.createElement("p");
        egg.textContent = "Scotch Egg-----------------$2.00";
        const pickles = document.createElement("p");
        pickles.textContent = "Fried Pickles---------------$3.00";
        const dip = document.createElement("p");
        dip.textContent = "Bacon Artichoke Dip------$4.00";
        div1.append(title1, egg, pickles, dip);
        menuContainer.appendChild(div1);
        break;
      case 1:
        const div2 = document.createElement("div");
        div2.classList.add("soups");
        const title2 = document.createElement("p");
        title2.textContent = "SOUPS";
        const soupDay = document.createElement("p");
        soupDay.textContent = "Soup of the day------------$4.00";
        const onion = document.createElement("p");
        onion.textContent = "French onion---------------$5.25";
        const potato = document.createElement("p");
        potato.textContent = "Potato Leek----------------$3.75";
        div2.append(title2, soupDay, onion, potato);
        menuContainer.appendChild(div2);
        break;
      case 2:
        const div3 = document.createElement("div");
        div3.classList.add("salads");
        const title3 = document.createElement("p");
        title3.textContent = "SALADS";
        const special = document.createElement("p");
        special.textContent = "House special salad--------$1.75";
        const ceasar = document.createElement("p");
        ceasar.textContent = "Caesar salad---------------$2.45";
        div3.append(title3, special, ceasar);
        menuContainer.appendChild(div3);
        break;
    }
  }
  menuWrapper.appendChild(menuContainer);
  content.appendChild(menuWrapper);
}
