import './styles/header.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import clear from './functions/clear'
import headerDiv from './pages/header';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';

headerDiv();
clear();
home();

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', function() {
    clear();
    home();
});

menuBtn.addEventListener('click', function() {
    clear();
    menu();
});

contactBtn.addEventListener('click', function() {
    clear();
    contact();
});
