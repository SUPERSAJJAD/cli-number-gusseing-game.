import inquirer from "inquirer";
const randomNUmber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Pleasw guess a number between 1-6"
    },
]);
if (answers.userGuessNumber === randomNUmber) {
    console.log("Congrulation! You guessed the right number.");
}
else {
    console.log("You guessed wrong number");
}
