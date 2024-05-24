// adding js styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    // Get the values from the input

const usernameValue =username.value.trim();
const emailValue =email.value.trim();
const passwordValue =password.value.trim();
const password2Value =password2.value.trim();

if(usernameValue === ''){

    setErrorFor(username, 'username cannot be blank');
}
else if(usernameValue.length < 6){
    setErrorFor(username, 
        'username must be at least 6 characters long ');
}

else{
    setsuccessFor(username);
}  

// email validation

if (emailValue === ''){
    setErrorFor(email, 'This field cannot be blank');
}

else{
    setsuccessFor(email);
} 

// password validation

if (passwordValue === ''){
setErrorFor(password, 'password cannot be blank');
}

else if(passwordValue.length < 8){
    setErrorFor(password, 
        'password must be at least 8 characters long ');
}

else{
    setsuccessFor(password);
}


// Confirm password validation

if (password2Value === ''){
setErrorFor(password2, 'confirm password')
}
else if(passwordValue !== password2Value){
    setErrorFor(password2, 
        'password mismatched ');
}

else{
    setsuccessFor(password2);
}
}

function setErrorFor(input, message){
    const formControl = input.parentElement;   
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control Error';
}

function setsuccessFor(input){
    const formControl = input.parentElement;   
    

    // add error class
    formControl.className = 'form-control success';
}

