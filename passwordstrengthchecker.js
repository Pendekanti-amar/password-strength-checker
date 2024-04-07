function checkPasswordStrength() {


    var passwordInput = document.getElementById("password").value;
    var strengthIndicator = document.getElementById("password-strength");
    var strengthIndicator1 = document.getElementById("password-strength1");
    var strengthIndicator2 = document.getElementById("password-strength2");
    var strengthIndicator3 = document.getElementById("password-strength3");

    var containLowercase = /[a-z]/.test(passwordInput);
    var containUppercase = /[A-Z]/.test(passwordInput);
    var containNumber = /[0-9]/.test(passwordInput);
    var containSpecialChar = /[!@#$%^&*]/.test(passwordInput);
    var passwordLength = passwordInput.length >= 8;

    var output1 = `${(containLowercase && containUppercase ? "\u2714" : "\u25CF")} Lowercase & Uppercase`
    var output2 = `${(containNumber ? "\u2714" : "\u25CF")} Number (0-9)`
    var output3 = `${(containSpecialChar ? "\u2714" : "\u25CF")} Special Character (!@#$%^&*)`
    var output4 = `${(passwordLength ? "\u2714" : "\u25CF")} Atleast 8 Character`

    // Strength determination
    if (containLowercase && containUppercase && containNumber && containSpecialChar && passwordLength) {
        strengthIndicator.textContent = output1;
        strengthIndicator1.textContent = output2;
        strengthIndicator2.textContent = output3;
        strengthIndicator3.textContent = output4;
    } else if (containLowercase || containUppercase || containNumber || containSpecialChar) {
        strengthIndicator.textContent = output1;
        strengthIndicator1.textContent = output2;
        strengthIndicator2.textContent = output3;
        strengthIndicator3.textContent = output4;
    } else if (passwordLength) {
        strengthIndicator.textContent = output1;
        strengthIndicator1.textContent = output2;
        strengthIndicator2.textContent = output3;
        strengthIndicator3.textContent = output4;
    } else {
        strengthIndicator.textContent = output1;
        strengthIndicator1.textContent = output2;
        strengthIndicator2.textContent = output3;
        strengthIndicator3.textContent = output4;
    }

}