import './methodes.js';

document.addEventListener("DOMContentLoaded", function() {
    navbarWhite ? navbarWhite.addEventListener('scroll', navScroll) : console.error("navbarWhite is null");
    emailVerif ? emailVerif.addEventListener('input', emailVerification) : console.error('emailVerif is null');
});