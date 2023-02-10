
//EVENTS
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
};
//SIGN UP
function signup (){
    let email=document.getElementById('email').value.toLowerCase();
    let username=document.getElementById('username').value.toLowerCase();
    let password=document.getElementById('password').value.toLowerCase();
    if(email==''&&username==''&&password==''){
        swal({
            title: 'Please check your username and password',
            text: 'Signup error',
            icon: 'error',    
        }); 
    }
    else if(email.includes(".com")){
        swal({
            title: 'Welcome to Intra',
            text: 'Signup Success',
            icon: 'success',
            
        }); 
        let user={
            Email:email,
            Username:username,
            Password:password,
        };
        debugger;
        let data=localStorage.setItem('ACCOUNT',JSON.stringify(user));
        console.log(data);
    }
}
// SIGN IN
function loginFunc(){
    
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    
    let data = JSON.parse(window.localStorage.getItem('ACCOUNT'));
    console.log(data);
    
    if(username == data.Username && password == data.Password){
        swal({
            title: 'Welcome to Intra',
            text: 'Login Success',
            icon: 'success',
            
        });
         
         
    }

    else{
        swal({
            title: 'Please check your username and password',
            text: 'Login error',
            icon: 'error',
            
        }); 

    }
}
