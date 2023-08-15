// check email and password when submit btn clicked
// STEP 1: added click event handler with the submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit btn clicked');
    // STEP 2: access the email and password inside the input fields
        /*
            2.a Set an id on the html element 
            2.b Get the element
            2.c Get the value from the element
        */
    // we always need to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // console.log(email, password);

    /* 
        DANGER: NEVER VERIFY EMAIL AND PASSWORD ON THE CLIENT SIDE, WE MUST DO IT ON THE SERVER SIDE!!! 
    */
    // STEP 3: verify email and password (and check if valid user or not)
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user');
    }
})