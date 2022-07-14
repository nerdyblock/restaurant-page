import locationIcon from '../asset/icons/location.svg';
import phoneIcon from '../asset/icons/phone.svg';
import emailIcon from '../asset/icons/email.svg';

const content = document.getElementById('content');
const contactDiv =  document.createElement('div');
contactDiv.classList.add('contact-div');

function contact() {
    
    content.classList.add('contact');
    content.classList.remove('home');
    content.classList.remove('menu');

    const contactUs = document.createElement('div');
    const h1 =  document.createElement('h1');
    h1.classList.add('contact-us-text')
    h1.textContent = 'Contact Us';

    contactUs.append(h1);
    content.append(contactUs);
    content.append(contactDiv)

    createContactInfo();
    createForm();
}

function createContactInfo() {
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.innerHTML = 
        `<div class="contact-info">
            <img src="${phoneIcon}" alt="">
            <p>+91-9223456780</p>
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
    const contactUsForm = document.createElement('div');
    contactUsForm.innerHTML = 
        `<form action="">
            <div class="name">
                <input type="text" id="name" name="name" placeholder="Your Name">
            </div>
            <div class="email">
                <input type="email" id="email" name="email" placeholder="Email">
            </div>
            <div class="message">
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Leave us a message"></textarea>
            </div>
            <button type="submit">Send</button>
        </form>`

    contactDiv.append(contactUsForm);
}
export default contact;