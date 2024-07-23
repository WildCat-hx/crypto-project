import { 
    navbarWhite, 
    loginButton, 
    loginModal,
    closeModal, 
    scrollFunct, 
    showLoginModal, 
    hideLoginModal, 
} from './methodes.js';

document.addEventListener("DOMContentLoaded", function() {
    navbarWhite ? window.addEventListener('scroll', scrollFunct) : console.error("navbarWhite is null");
    loginButton ? loginButton.addEventListener('click', showLoginModal) : console.error('loginButton is null');
    closeModal ? closeModal.addEventListener('click', hideLoginModal) : console.error('closeModal is null');
    window.addEventListener('click', (event) => event.target == loginModal ? loginModal.style.display == "none" : null);
});