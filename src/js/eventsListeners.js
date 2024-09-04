import { 
    navbarWhite, 
    loginButton,
    loginButtonFooter, 
    closeModal, 
    scrollFunct, 
    toggleLoginModal,
    closeLoginModal,
    overlay
} from './methodes.js'

document.addEventListener("DOMContentLoaded", function() {
    navbarWhite ? window.addEventListener('scroll', scrollFunct) : console.error("navbarWhite is null");
    loginButton ? loginButton.addEventListener('click', toggleLoginModal) : console.error('loginButton is null');
    loginButtonFooter ? loginButtonFooter.addEventListener('click', toggleLoginModal) : console.error('loginButton is null');
    closeModal ? closeModal.addEventListener('click', closeLoginModal) : console.error('closeModal is null');

    if (overlay) {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeLoginModal();
            }
        });
    } else {
        console.error("overlay is null");
    }
});