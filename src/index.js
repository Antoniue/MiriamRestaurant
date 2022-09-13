import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
createHome();

let menu = document.querySelector('.menu');
menu.addEventListener('click', () => {createMenu();
}
);