const form = document.getElementById('form');
const name = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phoneNumber');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();

    if (nameValue === "") {
        setErrorFor(name, "Name cannot be blank");
    } else {
        setSuccessFor(name);
    }

    if (usernameValue === ""){
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === "") {
        setErrorFor(password2, "Password cannot be blank");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords don't match");
    } else {
        setSuccessFor(password2);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else {
        setSuccessFor(email);
    }

    if (phonenumberValue === "") {
        setErrorFor(phonenumber, "Phone Number cannot be blank");
    } else {
        setSuccessFor(phonenumber);
    }
}


function setErrorFor(input, message) {
    console.log('setErrorFor');
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    
    small.innerText = message;

    formControl.className = "form_control error"
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success"
}

