import {createMenu} from "./menu";
let content = document.querySelector('#content');
let stripes = document.querySelector('#stripes');
content.innerHTML = '';

    function createDiv(elementClass, elementType, appendTo){
        let element = document.createElement(elementType);
        if(appendTo != '')
        {
            element = setClass(element, elementClass);
            return appendElement(appendTo, element)
        }
        return setClass(element, elementClass);
    }
    function setClass(element, elementClass){
        element.className = elementClass;
        return element;
    }
    
    function appendAll(appendTo, array){
        for(let index = 0; index < array.length; index++)
        {
            appendTo.appendChild(array[index]);
        }
    }
    
    function appendElement(appendTo, appendWho){
        appendTo.appendChild(appendWho);
        return appendWho;
    }

function createHome(){
        let header = createDiv('header', 'div', content);
        let logo = createDiv('logo', 'div', content);
        let text = createDiv('text', 'div', content);
        let menu = createDiv('menu', 'div', content);
        let image = createDiv('image', 'div', content);
        let imageActual = createDiv('imageActual', 'div', content);
        let greenC = createDiv('greenC', 'div', content);
        let whiteC = createDiv('whiteC', 'div', content);
        let redC = createDiv('redC', 'div', content);
        let imageText = createDiv('imageText', 'div', content);
        let info = createDiv('info', 'div', content);
        let infoText = createDiv('infoText', 'div', content);
        let miriam = createDiv('miriam', 'div', content);
        let greenC1 = createDiv('greenC', 'div', stripes);
        let whiteC1 = createDiv('whiteC', 'div', stripes);
        let redC1 = createDiv('redC', 'div', stripes);
        
        logo.innerHTML = '<img src="../images/pizzalogo.png" alt="pizzalogo" height="80px">';
        text.innerText = "Miriam's Pizzeria";
        menu.innerText = 'Menu';
        appendAll(header, [logo, text, menu]);
        
        imageActual.innerHTML = '<img src="../images/pizzaimage.jpg" alt="pizzaimage" width="100%" height="800px">';
        imageText.innerText = "- Welcome to Miriam's Pizzeria -";
        appendAll(image, [imageActual, greenC, whiteC, redC, imageText]);
        
        infoText.innerHTML = '<b>"</b>Opened in the 1990s, we have been baking Italian Pizzas with an Azeri twist!<br>'
                             +'Come try our food and be amazed!<br>'
                             +'Our Pizzeria includes a variety of delicious and unique Pizzas with included complimentary authentic japanese dishes!<b>"</b>';
        miriam.innerText = '-Miriam Japan';
        appendAll(info, [infoText, miriam]);
        menu.addEventListener('click', () => {createMenu();}
);
}

export {createHome , createDiv , appendAll};
