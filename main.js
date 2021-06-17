// Assignment Code
var generateBtn = document.querySelector("#generate");

let criteriaChoices = {
    numbers: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    specials: "`~!@#$%^&*()_+-=[]{}\\|;:'\",.<>/?"
};









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

// Gather user criteria and generate password
function generatePassword() {
    //Initiate variables, most importantly for when a user generates multiple passwords with different criteria
    let criteriaToUse = {};
    let chosenCriteria = [];
    let newPassword = [];
    let nextChar;
    let nextCriterion;
    let onlyChosenCriterion = "";
    let useLowers = false;
    let useUppers = false;
    let useNumbers = false;
    let useSpecials = false;
    let passwordLength = parseInt(Number(prompt("Choose a number of characters for your password (8 - 128).")));
    
    if ((isNaN(passwordLength)) || ((passwordLength < 8) || (passwordLength > 128))) {
        alert("Try again - be sure to enter a number from 8 to 128");
        generatePassword();
    } else {
        //Determine which criteria the user wants to include
        useLowers = confirm(`Would you like your password to use lowercase letters? (OK if yes - Cancel if no)`);
        useUppers = confirm(`Would you like your password to use uppercase letters? (OK if yes - Cancel if no)`);
        useNumbers = confirm(`Would you like your password to use numbers? (OK if yes - Cancel if no)`);
        useSpecials = confirm(`Would you like your password to use special characters? (OK if yes - Cancel if no)`);
    }

    //Adds chosen criteria to an empty object
    if ((useLowers !== true) && (useUppers !== true) && (useNumbers !== true) && (useSpecials !== true)) {
        alert("Start over - you must choose at least one criterion!");
        generatePassword();
    }
    if (useLowers === true) {
        criteriaToUse.lowers = criteriaChoices.lowercase;
    }
    if (useUppers === true) {
        criteriaToUse.uppers = criteriaChoices.uppercase;
    }
    if (useNumbers === true) {
        criteriaToUse.numbers = criteriaChoices.numbers;
    }
    if (useSpecials === true) {
        criteriaToUse.specials = criteriaChoices.specials;
    }

    // Adds all chosen criteria from the criteriaToUse object to an array (to more easily iterate)
    for (item in criteriaToUse) {
        chosenCriteria.push(`${criteriaToUse[item]}`);
    }

    console.log(chosenCriteria);
    console.log(chosenCriteria.length);

    //Checks whether the user chose multiple criteria, and if not, avoids choosing a random character type
    if (chosenCriteria.length > 1) {
        for (let i = 0; i < passwordLength; i++) {
            //Randomly chooses one of the chosen character types for the next character in the generated password
            nextCriterion = chosenCriteria[Math.floor(Math.random() * chosenCriteria.length)];
            
            //From the string for that character type (within the chosenCriteria array), randomly choose a character
            nextChar = nextCriterion[Math.floor(Math.random() * nextCriterion.length)];
    
            //Add the randomly chosen character to a new password array
            newPassword.push(nextChar);
        }
    } else {
        //Since the user only wants one criterion, convert just that character type's array to a string
        onlyChosenCriterion = chosenCriteria.join("");
        for (let i = 0; i < passwordLength; i++) {
            //Randomly choose a character
            nextChar = onlyChosenCriterion[Math.floor(Math.random() * onlyChosenCriterion.length)];
    
            //Add the randomly chosen character to a new password array
            newPassword.push(nextChar);
        }
    }
    
    //Convert password from an array to a string
    let finishedPassword = newPassword.join("");
    
    return finishedPassword;
}




/*function allSelectedCriteria() {
    for each value (an array) in the criteria object {
        if user has selected this criteria {
            for each character in that array {
                push that character into the allCriteria array
            }
        }
    }
    return allCriteria array
}
*/

// for (let i = 0; i < numString.length; i++) {
//     allCriteria.push(numString[i]);
// }

// console.log(allCriteria);

// for (let i = 0; i < uppercaseArr.length; i++) {
//     allCriteria.push(uppercaseArr[i]);
// }

// for (let i = 0; i < 5; i++) {
//     nextChar = allCriteria[Math.floor(Math.random() * allCriteria.length)];
//     newPassword.push(nextChar);
// }

// console.log(newPassword);