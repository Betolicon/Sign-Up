const Password = document.getElementById("Password")
const Cpassword = document.getElementById("cPassword")
const firstName = document.getElementById("name")
const lastName = document.getElementById("Lname")
const Phone = document.getElementById("phone")
const Mail = document.getElementById("mail")
const Span = document.querySelector('span')
const Button = document.querySelector(".create")
const root = document.documentElement;

const confirmPasswrord = () =>{
    Span.style.fontSize = '18px'
    if(Password.value === Cpassword.value){
        newTheme = 'correct'
        root.className = newTheme;
        Span.textContent = 'The passwords match.'
    }
    else{
        newTheme = 'incorrect'
        root.className = newTheme;
        Span.textContent = 'The passwords do not match.'
    }
}

const createAccount = () =>{
    Span.innerText = ''
    Span.style.fontSize = '25px'
    if (Password.value.length !== 0 && Cpassword.value.length !== 0 && firstName.value.length !== 0 
        || lastName.value.length !== 0 && Phone.value.length !== 0 && Mail.value.length !== 0 ){
        Span.innerText = ''
        newTheme = 'correct'
        root.className = newTheme;
        Span.textContent = 'Your account has been successfully created'  

    }
    else{
        newTheme = 'incorrect'
        root.className = newTheme;
        Span.textContent = 'Fill out the form.'
    }
}

Cpassword.addEventListener("input", confirmPasswrord)
Button.addEventListener("click", createAccount)