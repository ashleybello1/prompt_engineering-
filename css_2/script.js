
    // script.js

// Use named constant
const welcomeMessage = "Welcome to Elf's Kitchen!";
const userAge = 25;
const userName = "Ashley";

// Calculate double age
const doubleAge = userAge * 2;

// Check if user is an adult
if (userAge >= 18) {
    console.log(userName + " is an adult");
} else {
    console.log(userName + " is a minor");
}

const isAdult = userAge >= 18;
const hasName = userName !== "";

// Log double age
console.log("Double of " + userName + "'s age is: " + doubleAge);

// Modify web pages for interaction
document.getElementById('h1').textContent = welcomeMessage;
document.querySelector('.nav1').setAttribute('data-nav', 'main-nav');
document.querySelector('p').style.color = 'brown';

// Output user info to the HTML
let outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<p>" + userName + " is an adult: " + isAdult + "</p>";
outputDiv.innerHTML += "<p>" + userName + " has a name: " + hasName + "</p>";

// React to user actions for engagement
document.getElementById('h1').onclick = () => alert('Welcome to the best recipes site!');
window.onload = () => console.log('Page loaded');
document.querySelector('p').onmouseover = () => changeColor(document.querySelector('p'));

// Direct code flow for logic
const changeColor = (element) => {
    if (element.style.color === 'brown') {
        element.style.color = 'green';
    } else if (element.style.color === 'green') {
        element.style.color = 'red';
    } else {
        element.style.color = 'brown';
    }
};

// Modularize and organize your code with reusable functions
function changeText(element, text) {
    element.textContent = text;
}

// Automate repetition for simplicity
const items = ['Home', 'Pastries', 'Lunch', 'Dinner'];
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Organize data for efficiency
const recipes = ['Concha', 'Churro', 'Taco', 'Burrito'];
recipes.forEach(recipe => console.log(recipe));

// Schedule tasks for interactive experiences
const intervalId = setInterval(() => {
    console.log('This message repeats every 5 seconds');
}, 5000);

// Stop the interval after some time
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped');
}, 20000);

// Event listeners for audio control
document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById('background-music');
    const musicControlButton = document.getElementById('music-control');

    musicControlButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            musicControlButton.textContent = 'Pause Music';
        } else {
            audioElement.pause();
            musicControlButton.textContent = 'Play Music';
        }
    });
});

document.getElementById('play-pause-button').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer.paused) {
        audioPlayer.play();
        this.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        this.textContent = 'Play';
    }
});

// Slideshow controls
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


      