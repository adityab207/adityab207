const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('submitSignIn');
    
    if (signInButton) {
        signInButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Get user input values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Perform account verification logic (this is a placeholder)
            const accountExists = verifyAccount(email, password); // Replace this with actual verification logic
            
            if (accountExists) {
                // Redirect to the other HTML page
                window.location.href = 'home.html'; 
            } else {
                // Handle invalid login (show a message, etc.)
                document.getElementById('signInMessage').innerText = 'Invalid credentials';
                document.getElementById('signInMessage').style.display = 'block';
            }
        });
    }
});


function verifyAccount(email, password) {
    
    return true;
}
