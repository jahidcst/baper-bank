//step-1 :add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('submit button clicked')
    // step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password inside the password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    

    // step-4: Verify email and Password
    if(email === 'jahid@gmail.com' && password === 'jahid'){
        window.location.href = 'bank.html'
    }
    else{
        alert('tui hagol ')
    }
    
})
