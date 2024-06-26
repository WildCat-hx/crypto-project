const scrollTop = document.getElementById("scroll_Top");
const emailVerif = document.getElementById("emailInput");
const navbarWhite = document.querySelector(".navbar");
const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementsByClassName("close")[0];

console.log(loginButton);
console.log(loginModal);

window.onscroll = function() {scrollFunct()};

function scrollFunct() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

function emailVerification() {
    const emailInput = this.value;
    const allowedDomain = "gmail.com"

    if(emailInput.includes(allowedDomain)) {
        this.setCustomValidity('');
    } else {
        this.setCustomValidity('Email must be from gmail.com domain')
    }
};

loginButton.onclick = function() {
    loginModal.style.display = "block";
}

closeModal.onclick = function() {
    loginModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display= "none";
    }
}