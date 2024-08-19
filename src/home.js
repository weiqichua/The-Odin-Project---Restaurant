import prawnImage from '../images/prawn.jpg';

const header = document.createElement('h1');
header.textContent = 'Welcome to our restaurant!';

const descriptionContainer = document.createElement('div');
descriptionContainer.textContent = 'We serve delicious prawns!';

const prawn = document.createElement('img');
prawn.src = prawnImage;
prawn.alt = 'A delicious plate of prawns';

export { header, descriptionContainer, prawn };