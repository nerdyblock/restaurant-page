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

    siteInfo.append(h1, h2, order);

    content.append(siteInfo);
}

export default home;