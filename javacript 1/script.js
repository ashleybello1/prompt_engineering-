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
console.log(petTypes[0])