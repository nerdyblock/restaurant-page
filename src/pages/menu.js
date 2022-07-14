// import samosa from '../images/samosa.jpg';
// import fishCurry from '../images/fish-curry.jpg';
// import pakoda from '../images/pakoda.jpg';
// import idli from '../images/idli.jpg';
// import chickenBiryani from '../images/chicken-biryani.jpg';
// import pavBhaji from '../images/pav-bhaji.jpg';

const content = document.getElementById('content');

// remove when whole site is done from all places
content.classList.add('menu');
content.classList.remove('home');
content.classList.remove('contact');

function menu() {
    createMenuDiv('Samosa', ' ₹49', 'samosa', 'Perfect mix of spicy & crunchy. Enjoy your evening with samosa and chai');
    createMenuDiv('Fish Curry', ' ₹399', 'fish-curry', 'Spicy & healthy , a high protein food. Helthy food that tastes good');
    createMenuDiv('Idli', ' ₹149', 'idli', 'Healthy & basic made from rice, enjoy with coconut chutney');
    createMenuDiv('Chicken Biryani', ' ₹489', 'chicken-biryani', 'Craving chicken? Best dish to satisfy your chicken craving & hunger');
    createMenuDiv('Pav Bhaji', ' ₹199', 'pav-bhaji', 'Need something spicy you came at right place. Your perfect cheat meal');
    createMenuDiv('Pakode', ' ₹99', 'pakoda', 'Rainy outside? Pefect to have pakoda & chai on a rainy day');
}

function createMenuDiv(name, cost, imageSrc, desc) {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-div')

    const itemName = document.createElement('h2');
    const itemCost =  document.createElement('h3');
    const itemDesc = document.createElement('p');
    // const itemImage = document.createElement('img');

    const itemImage = document.createElement('div');
    itemImage.classList.add('image');
    itemImage.classList.add(imageSrc);

    const itemDiv = document.createElement('div');
    itemCost.textContent = cost;
    itemName.textContent = name;
    itemDesc.textContent = desc;
    itemDiv.append(itemName, itemCost, itemDesc);
    itemDiv.classList.add('item-div')

    // itemImage.src = imageSrc;

    menuDiv.append(itemImage, itemDiv);
    content.append(menuDiv);
}

export default menu;