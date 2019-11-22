var formEmail = document.getElementById("email-field");
var formErrorMessage = document.getElementById("error-p");
var formErrorIcon = document.getElementById("error-image");
var formButton = document.getElementById("submit-button");


formButton.addEventListener("click", validateEmail);


//Validation of email address
function validateEmail() {
    if(!isEmail(formEmail.value)){
        formErrorMessage.style.visibility="visible";
        formErrorIcon.style.visibility="visible";

    }

}

//Email text control with RegEx
function isEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
