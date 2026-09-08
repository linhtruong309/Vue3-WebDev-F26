// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector('h1');
// // Update the text content of the <h1>
// myHeading.textContent = 'Hello world!';

const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Vietnam Nature.jpg') {
    myImage.setAttribute('src', 'images/Vietnam Culture.jpg');
  } else {
    myImage.setAttribute('src', 'images/Vietnam Nature.jpg');
  }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Welcome to Vietnam, ${storedName}`;
}

myButton.addEventListener('click', () => {
  setUserName();
});
