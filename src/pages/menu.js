import fishCurry from '../asset/images/fish-curry.jpg';
import samosa from '../asset/images/samosa.jpg';
import idli from '../asset/images/idli.jpg';
import chickenBiryani from '../asset/images/chicken-biryani.jpg';
import pavBhaji from '../asset/images/pav-bhaji.jpg';
import pakoda from '../asset/images/pakoda.jpg';

const content = document.getElementById('content');

function menu() {
    content.classList.add('menu');
    createMenuDiv('Samosa', ' ₹49', samosa, 'Perfect mix of spicy & crunchy. Enjoy your evening with samosa and chai');
    createMenuDiv('Fish Curry', ' ₹399', fishCurry, 'Spicy & healthy , a high protein food. Helthy food that tastes good');
    createMenuDiv('Idli', ' ₹149', idli, 'Healthy & basic made from rice, enjoy with coconut chutney');
    createMenuDiv('Chicken Biryani', ' ₹489', chickenBiryani, 'Craving chicken? Best dish to satisfy your chicken craving & hunger');
    createMenuDiv('Pav Bhaji', ' ₹199', pavBhaji, 'Need something spicy you came at right place. Your perfect cheat meal');
    createMenuDiv('Pakode', ' ₹99', pakoda, 'Rainy outside? Pefect to have pakoda & chai on a rainy day');
}

function createMenuDiv(name, cost, img, desc) {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-div');

    const itemName = document.createElement('h2');
    const itemCost =  document.createElement('h3');
    const itemDesc = document.createElement('p');

    const itemImage = document.createElement('div');
    itemImage.classList.add('image-div');

    const itemImg = document.createElement('img');
    itemImg.classList.add('image');
    itemImg.src = img;

    itemImage.append(itemImg);

    const itemDiv = document.createElement('div');
    itemCost.textContent = cost;
    itemName.textContent = name;
    itemDesc.textContent = desc;
    itemDiv.append(itemName, itemCost, itemDesc);
    itemDiv.classList.add('item-div');

    menuDiv.append(itemImage, itemDiv);
    content.append(menuDiv);
    highligthNav();
}

function highligthNav() {
    const homeNav = document.getElementById('home');
    const contactNav = document.getElementById('contact');
    const menuNav = document.getElementById('menu');

    menuNav.style.backgroundColor = '#1B263C';
    menuNav.style.color = '#fff';

    contactNav.style.backgroundColor = '#fff';
    contactNav.style.color = '#1B263C';
    homeNav.style.backgroundColor = '#fff';
    homeNav.style.color = '#1B263C';
}

export default menu;