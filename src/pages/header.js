function headerDiv() {
    const content = document.getElementById('content');
    const body = document.querySelector('body');
    
    const header = document.createElement('header');
    const siteName = document.createElement('h1');
    siteName.innerText = "Nerdy's Kitchen";

    const nav = document.createElement('div');
    nav.classList.add('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';


    nav.append(home, menu, contact);

    header.append(siteName);
    header.append(nav);
    body.insertBefore(header, content);
}

export default headerDiv();



