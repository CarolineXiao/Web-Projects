var userAge = parseInt(prompt("What's your age?"),10);
if (isNaN(userAge)) {
    console.log("Please enter a valid number!");
} else if (userAge < 18) {
    console.log("Sorry, you have to be 18 or older to use this website.");
} else {
    console.log("Your age is " + userAge + " years old? Go ahead!");
}
