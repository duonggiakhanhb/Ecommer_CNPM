import { FlashMessage } from '../../components';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) ? false : "Email is not valid";
}

function validatePassword(password, confirm = '') {
    if(password != confirm) return "Password not the same as confirm";
    return false;
}
function validateLenght(password) {
    if(password.lenght > 8) return "Password must be including 8 characters";
    return false;
}
function validate() {
    var x = document.getElementsByClassName("MuiInputBase-input MuiInput-input");
    for(var i = 0; i < x.length; i++) {
        if(x[i].getAttribute('aria-invalid') != 'false') {
            FlashMessage("Error input", 3000, "/login", "error");
            return false;
        }
    };
    return true;
}

export {
    validate,
    validateLenght,
    validatePassword,
    validateEmail,
};