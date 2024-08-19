console.log("Running webpack serve...")
import { header, descriptionContainer, prawn } from './home.js';
import { mains, beverages } from './menu.js';
import './style.css';

const content = document.querySelector('#content')
const homeTab = document.querySelector('.homeBtn');
const menuTab = document.querySelector('.menuBtn');

const aboutTab = document.querySelector('.aboutBtn');



// Home tab
const home = document.createElement('div');
home.classList.add('home');
home.appendChild(header);
home.appendChild(descriptionContainer);
home.appendChild(prawn);

homeTab.addEventListener('click', () => {
    console.log('Home clicked');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(home);
});


// Menu tab
const menu = document.createElement('div');
menu.classList.add('menu');
menu.appendChild(mains);
menu.appendChild(beverages);

menuTab.addEventListener('click', () => {
    console.log('Menu clicked');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(menu);
});



// About tab