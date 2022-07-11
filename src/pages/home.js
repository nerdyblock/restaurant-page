function home() {
    const content = document.querySelector('#content');

    const h1 = document.createElement('h1');
    h1.textContent = "World's Best Kitchen To Satisfy Your Hunger";

    const h2 = document.createElement('h2');
    h2.textContent = "Tasty food that will not empty your wallet";

    const order = document.createElement('button');
    order.textContent = 'Order Now';

    content.append(h1, h2, order);
}

export default home;