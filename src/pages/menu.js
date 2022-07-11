

const content = document.getElementById('content');

function menu() {
    createMenuDiv('Batat Vada', ' ₹299');
    createMenuDiv('Litti Chokha', ' ₹399');
    createMenuDiv('Veg Paneer Burger', ' ₹149');
    createMenuDiv('Chicken Biryani', ' ₹489');
    createMenuDiv('Chole Bhature', ' ₹199');
    createMenuDiv('Rajma Chawal', ' ₹99');
}

function createMenuDiv(name, cost) {
    const menuDiv = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemCost =  document.createElement('h3');
    const itemImage = document.createElement('img');

    itemCost.textContent = cost;
    itemName.textContent = name;
    itemImage.src = '';

    menuDiv.append(itemName, itemCost, itemImage);
    content.append(menuDiv);
}

export default menu;