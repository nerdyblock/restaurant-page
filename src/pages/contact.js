import locationIcon from '../asset/icons/location.svg';
import phoneIcon from '../asset/icons/phone.svg';
import emailIcon from '../asset/icons/email.svg';
import menu from './menu';

const content = document.getElementById('content');
const contactDiv =  document.createElement('div');
contactDiv.classList.add('contact-div');

const contactUsForm = document.createElement('div');
const contactInfoDiv = document.createElement('div');

function contact() {
    
    content.classList.add('contact');

    const contactUs = document.createElement('div');
    const h1 =  document.createElement('h1');
    h1.classList.add('contact-us-text')
    h1.textContent = 'Contact Us';

    contactUs.append(h1);
    content.append(contactUs);
    content.append(contactDiv);

    highligthNav();

    createContactInfo();
    createForm();

}

function createContactInfo() {
    
    contactInfoDiv.innerHTML = 
        `<div class="contact-info">
            <img src="${phoneIcon}" alt="">
            <p>+91-1234567890</p>
        </div>
        <div class="contact-info">
            <img src="${locationIcon}" alt="">
            <p>420, Fake Road, Close To Your Home, Country</p>
        </div>
        <div class="contact-info">
            <img src="${emailIcon}" alt="">
            <p>totallynotfake@notreal.com</p>
        </div>`

    contactDiv.append(contactInfoDiv);
}


function createForm() {
    
    contactUsForm.innerHTML = 
        `<form action="">
            <div class="name">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="email">
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="message">
                <textarea name="message" id="message" cols="30" rows="8" placeholder="Leave us a message"></textarea required>
            </div>
            <button type="submit" class="submit">Send</button>
        </form>`

    contactDiv.append(contactUsForm);
}

function highligthNav() {
    const homeNav = document.getElementById('home');
    const contactNav = document.getElementById('contact');
    const menuNav = document.getElementById('menu');

    contactNav.style.backgroundColor = '#1B263C';
    contactNav.style.color = '#fff';

    homeNav.style.backgroundColor = '#fff';
    homeNav.style.color = '#1B263C'
    menuNav.style.backgroundColor = '#fff';
    menuNav.style.color = '#1B263C'
}

export default contact;