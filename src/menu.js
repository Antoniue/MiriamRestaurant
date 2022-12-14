import {createHome , createDiv , appendAll} from "./home.js";

function createMenu(){
    let content = document.querySelector('#content');
    content.innerHTML = '';
    let stripes = document.querySelector('#stripes');
    stripes.innerHTML = '';
    let header = createDiv('header','div',content);
    let logo = createDiv('logo', 'div', content);
    let text = createDiv('text', 'div', content);
    let home = createDiv('home', 'div', content);
    logo.innerHTML = '<img src="../images/pizzalogo.png" alt="pizzalogo" height="80px">';
    text.innerText = "Miriam's Pizzeria";
    home.innerText = 'Home';
    appendAll(header, [logo, text, home]);
    home.addEventListener('click', () => {content.removeChild(body); createHome()});
    let body = createDiv('menuBody', 'div', content);
    let item1 = createDiv('singleItem', 'div', content);
    let item2 = createDiv('singleItem', 'div', content);
    let item3 = createDiv('singleItem', 'div', content);
    let item4 = createDiv('singleItem', 'div', content);
    let item5 = createDiv('singleItem', 'div', content);
    let pic1 = createDiv('menuPic', 'div', content);
    let pic2 = createDiv('menuPic', 'div', content);
    let pic3 = createDiv('menuPic', 'div', content);
    let pic4 = createDiv('menuPic', 'div', content);
    let pic5 = createDiv('menuPic', 'div', content);
    let text1 = createDiv('menuText', 'div', content);
    let text2 = createDiv('menuText', 'div', content);
    let text3 = createDiv('menuText', 'div', content);
    let text4 = createDiv('menuText', 'div', content);
    let text5 = createDiv('menuText', 'div', content);
    text1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    text2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    text3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    text4.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    text5.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    pic1.innerHTML = '<img src="../images/item1.png" alt="pizzalogo" height="300px">';
    pic2.innerHTML = '<img src="../images/item1.png" alt="pizzalogo" height="300px">';
    pic3.innerHTML = '<img src="../images/item2.png" alt="pizzalogo" height="300px">';
    pic4.innerHTML = '<img src="../images/item2.png" alt="pizzalogo" height="300px">';
    pic5.innerHTML = '<img src="../images/item1.png" alt="pizzalogo" height="300px">';
    appendAll(item1, [pic1, text1]);
    appendAll(item2, [pic2, text2]);
    appendAll(item3, [pic3, text3]);
    appendAll(item4, [pic4, text4]);
    appendAll(item5, [pic5, text5]);
    appendAll(body, [item1, item2, item3, item4, item5]);
}

export {createMenu};