function headerDiv() {
    const content = document.getElementById('content');
    const body = document.querySelector('body');
    
    const header = document.createElement('header');
    const siteName = document.createElement('h1');
    siteName.setAttribute('id', 'sitename')
    siteName.innerText = "Nerdy's Kitchen";

    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav')
    const home = document.createElement('button');
    home.setAttribute('id', 'home');
    const menu = document.createElement('button');
    menu.setAttribute('id', 'menu');
    const contact = document.createElement('button');
    contact.setAttribute('id', 'contact');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';


    nav.append(home, menu, contact);

    header.append(siteName, nav);
    body.insertBefore(header, content);
}

export default headerDiv;



