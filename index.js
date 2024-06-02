const loginForm = document.getElementById('login-form')
const signupForm = document.getElementById('signup-form')

const loginSignUpButton = document.getElementById('login-signup');
const signupLoginButton = document.getElementById('signup-login')

loginSignUpButton.addEventListener('click', () => {
    loginForm.style.animation = 'switchFrom 200ms forwards ease'
    signupForm.style.animation = 'switchTo 200ms forwards ease'
    loginForm.style.transform = ''
    setTimeout(() => {
        signupForm.classList.remove('hidden')
        loginForm.classList.add('hidden')
    }, 200);
});

signupLoginButton.addEventListener('click', () => {
    signupForm.style.animation = 'switchFrom 200ms forwards ease'
    loginForm.style.animation = 'switchTo 200ms forwards ease'
    loginForm.style.transform = 'rotateY(90deg)'
    setTimeout(() => {
        loginForm.classList.remove('hidden')
        signupForm.classList.add('hidden')
    }, 200);
});