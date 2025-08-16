const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');
const myButton = document.querySelector('button');

myHeading.textContent = 'Hello world!';

myImage.addEventListener('click', () => {
	const mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png')
		myImage.setAttribute('src', 'images/firefox2.png');
	else myImage.setAttribute('src', 'images/firefox-icon.png');
});

function setUsername() {
	const myName = prompt('Please enter your name.');
	if (!myName) setUsername();
	localStorage.setItem('name', myName);
	myHeading.textContent = `Mozilla is cool, ${myName}`;
}

myButton.addEventListener('click', () => setUsername());

if (!localStorage.getItem('name')) setUsername();
else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
