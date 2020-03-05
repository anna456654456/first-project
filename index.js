const buttonContact = document.querySelector('.part-1-button-contact');
buttonContact.onclick = function(event) {
    buttonContact.classList.toggle('part-1-button-contact-new');
};

// buttonContact.addEventListener('click', (event) => console.log(event))

const text = document.querySelector('.part-1-title span');
text.onclick = function() {
    text.classList.toggle('part-1-title-new');
};

const twitterButton = document.querySelector('.part-9-img-twitter');
const pinterestButton = document.querySelector('.part-9-img-pinterest');
const facebookButton = document.querySelector('.part-9-img-facebook');
const twittersmsButton = document.querySelector('.part-9-img-twitter-something');
const socialTitle = document.querySelector('.part-9-wrapper-social');
const defaultTitle = socialTitle.textContent;


twitterButton.onclick = function() {
    if (socialTitle.textContent === 'Twitter') {
        socialTitle.textContent = defaultTitle;
    } else {
        socialTitle.textContent = 'Twitter';
    }  
}; 

pinterestButton.onclick = function() {
    if (socialTitle.textContent === 'Pinterest') {
        socialTitle.textContent = defaultTitle;
    } else {
        socialTitle.textContent = 'Pinterest';
    }
};

facebookButton.onclick = function() {
    if (socialTitle.textContent === 'Facebook') {
        socialTitle.textContent = defaultTitle;
    } else {
        socialTitle.textContent = 'Facebook';
    }
};

twittersmsButton.onclick = function() {
    if (socialTitle.textContent === 'Twitter Something') {
        socialTitle.textContent = defaultTitle;
    } else {
        socialTitle.textContent = 'Twitter Something';
    }
};

const emailField = document.querySelector('.part-8-form-email');
const sendButton = document.querySelector('.part-8-form-button');
const enteredEmail = document.querySelector('.part-8-form-email-value');

sendButton.onclick = function() {
    if (emailField.value) {
        enteredEmail.textContent = emailField.value;
    } else {
        enteredEmail.textContent = 'Please, enter your email, bitch!'
    };
};