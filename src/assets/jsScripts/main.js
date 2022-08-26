

function Input(){
    const headerbtn = document.getElementsByClassName("header");
    const closePopUp = document.getElementsByClassName("popup__close--btn");
    const popup = document.getElementsByClassName("popup");
    const overlay = document.getElementsByClassName("overlay");
    headerbtn[0].addEventListener('click', () => {
        popup[0].classList.add("active");
        overlay[0].classList.remove("hidden");
    });
    closePopUp[0].addEventListener('click', () => {
        popup[0].classList.remove("active");
        overlay[0].classList.add("hidden");
    });
    const emailField = document.getElementById('emailInput');
    const emailSpan = document.getElementById('emailSpan');
    const nameField = document.getElementById('nameInput');
    const okButton = document.getElementById('contactBtn');
    const inputs = document.querySelectorAll('input');
    var emailValidation = 0;
    var nameValidation = 0;
    emailField.addEventListener('keyup', function (event) {
        isValidEmail = emailField.checkValidity();
        if (isValidEmail) {
            emailValidation = 1;
            emailField.classList.remove("invalid");
        }
        else {
            emailValidation = 0;
            emailField.classList.add("invalid");
        }
        var emailInputValue = document.getElementById('emailInput').value.length;
        console.log(emailInputValue);
        if (emailInputValue != 0) {
            emailSpan.classList.add("valid");
        }
        else {
            emailSpan.classList.remove("valid");
        }
    });
    nameField.addEventListener('keyup', function (event) {
        var numberInputValue = document.getElementById('nameInput').value.length;
        if (numberInputValue <= 8) {
            nameValidation = 0;
            nameField.classList.add("invalid");
        }
        else {
            nameValidation = 1;
            nameField.classList.remove("invalid");
        }
    });
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function (event) {
            if (emailValidation == 1 && nameValidation == 1) {
                okButton.disabled = false;
            }
            else {
                okButton.disabled = true;
            }
        });
    };
}