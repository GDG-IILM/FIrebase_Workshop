// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// DOM elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const googleLoginButton = document.getElementById('google-login');
const githubLoginButton = document.getElementById('github-login');
const facebookLoginButton = document.getElementById('facebook-login');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

// Login
loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Login successful!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// Sign Up
signupButton.addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Sign-up successful!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// Google Login
googleLoginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            alert('Login with Google successful!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// GitHub Login
githubLoginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GithubAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            alert('Login with GitHub successful!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// Facebook Login
facebookLoginButton.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            alert('Login with Facebook successful!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// Show sign-up form
showSignup.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

// Show login form
showLogin.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});
