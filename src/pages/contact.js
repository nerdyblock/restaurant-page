function contact() {
    const content = document.getElementById('content');

    const contactUs = document.createElement('div');
    const h1 =  document.createElement('h1');
    h1.textContent = 'Contact Us';

    const phDiv = document.createElement('div');
    const phoneNumberText = document.createElement('span');
    phoneNumberText.textContent = 'ph:'
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+91-9223456780';
    phDiv.append(phoneNumberText, phoneNumber);
    
    const locationDiv = document.createElement('div');
    const locationText = document.createElement('span');
    locationText.textContent = 'Address:'
    const location = document.createElement('p');
    location.textContent  = "420, Fake Road, Close To Your Home, Country";
    locationDiv.append(locationText, location);

    const emailDiv = document.createElement('div');
    const emailText = document.createElement('span');
    emailText.textContent = 'Email:'
    const email = document.createElement('p');
    email.textContent  = "totallynotfake@notreal.com";
    emailDiv.append(emailText, email);

    contactUs.append(h1, phDiv, locationDiv, emailDiv);
    content.append(contactUs);
}

export default contact;