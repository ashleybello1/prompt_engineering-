alert("Hello")
// Named constant for a fixed value
const MAX_LOGIN_ATTEMPTS = 3;

// Conditional Statement to check login attempts
let attempts = 2; // Example number of attempts 
if (attempts < MAX_LOGIN_ATTEMPTS) {
    console.log ("Try logging in.");    
} else if (attempts ===MAX_LOGIN_ATTEMPTS) {
    console.LOG("Last attempt!") ;
} else {
    console.log("Account locked.") ;
}
// While Loop Example
let counter = 0;
while ( counter <5) {
    console.log ("Counter is at: " + counter);
    counter++;
}
// For Loop Example
for (let index = 0; index < 5; index++) {
    console.log("Loop iteration number: " + index);

}
// Function that Accepts an Argument 
function greetPerson (personName) {
    console.log("Hello, " + personName) ;
}
greetPerson("Alice") ;

//Function that Accepts Multiple Arguments
function calculateSum( numberOne , numberTwo) {
    return numberOne + numberTwo; 
}
console.log(calculateSum(5,7)); {
}
//Function that Returns a Value 
function multiplyNumbers(firstNumber, secondNumber) {
    return firstnumber * secondNumber; 
}
console.log(multiplyNumbers(3,4)); // Outputs 12 

// Create an array of different types of pets
let petTypes = ["Dog", "Cat", "Rabbit", "Parrot", "Fish"];

// Accessing an element in an array
console.log(petTypes[0]);

// Iterating through the array using a for loop
for (let index =0; index < petTypes.length; index++) {
    let pet =petTypes[index];
    console.log("Pet type " + (index + 1) + ": " + pey)
}io
// Get element by ID and change text 
document.getElementbyId("demo").innerText = "Hello World!";

// Get element by class and change color
document.getElementsByClassName("example-class")[0].style.color ="blue";

// Get element by tag and set attribute 
let imgTag= document.getElementsByTagName("img")[0];
imgTag.setAttribute("alt", "Exmaple Image");

// Create an attribute node 
let newAttr = document.createAttribute("data-custom");
newAttr.value = "customData";
imgTag.setattritbuteNode(newAttir) ;

// Add CSS styling via DOM
document.getElementById("demo").style.fontsize = "20xp";

// Create an Event: Onclick event 
document.getElementById("clickButton").onclick = function () {
    alert("Button");
} ;
// Create an Event: Onclick event
document.getElementById("clickButton").onclick = function() {
    alert("Butoon clicked!");
}; 

// Actions on Event: Change text on button click
document.getElementById("clickButton").addEventListener('click', () => {
    this.innerText = "Clicked!";
});

// Actions on Event: Change text on button click
document.getElementById("clickButton").addEventListener('click', () => {

})

// Onload Event: Show message when page loads 
window.onload = function() {
    this.innerText = "Clicked!";
};

// Onmouseover Event: Change color on mouse over 
document.getElementById("hoverDiv").onmouseover = function() {
    this.style.backgroundColor = "lightblue";
};

// Display a message every 2 seconds using setInterval 
let intervalId = setInterval(() => {
    console.log("Message displayed every 2 seconds")
},2000);

// After 10 seconds, clear the interval 
setTimeout (() => {
    clearInterval(intervalid); 
    console.log("Interval cleared after 10 seconds");
}, 10000); 
    
    

    


