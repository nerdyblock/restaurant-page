import menu from "./menu";
import clear from "../functions/clear";

function home() {
    const content = document.querySelector('#content');
    content.classList.add('home');

    const siteInfo = document.createElement('div');
    siteInfo.classList.add('site-info')

    const h1 = document.createElement('h1');
    h1.textContent = "World's Best Kitchen To Satisfy Your Hunger";

    const h2 = document.createElement('h2');
    h2.textContent = "Tasty food that will not empty your pocket";

    const order = document.createElement('button');
    order.textContent = 'Order Now';
    order.classList.add('order');

    order.addEventListener('click' , function() {
        clear();
        menu();
    });

    siteInfo.append(h1, h2, order);
    highligthNav();

    content.append(siteInfo);
}

function highligthNav() {
    const homeNav = document.getElementById('home');
    const contactNav = document.getElementById('contact');
    const menuNav = document.getElementById('menu');

    homeNav.style.backgroundColor = '#1B263C';
    homeNav.style.color = '#fff';

    contactNav.style.backgroundColor = '#fff';
    contactNav.style.color = '#1B263C';
    menuNav.style.backgroundColor = '#fff';
    menuNav.style.color = '#1B263C';
}

export default home;