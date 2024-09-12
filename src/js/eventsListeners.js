"use strict";

import { 
    navbarWhite, 
    loginButton,
    loginButtonFooter, 
    closeModal, 
    scrollFunct, 
    toggleLoginModal,
    closeLoginModal,
    overlay,
    updateClassName,
    debounce
} from './methodes.js'

document.addEventListener("DOMContentLoaded", initEventListeners);

function initEventListeners() {

    addClickListener(loginButton, toggleLoginModal, 'loginButton');
    addClickListener(loginButtonFooter, toggleLoginModal, 'loginButtonFooter');
    addClickListener(closeModal, closeLoginModal, 'closeModal');
    navbarWhite ? window.addEventListener('scroll', scrollFunct) : console.error("navbarWhite is null");
    window.addEventListener('resize', debounce(updateClassName, 200));

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeLoginModal();
        }
    });
}

function addClickListener(element, handler, elementName) {
    if (element) {
        element.addEventListener('click', handler);
    } else {
        console.error(`${elementName} is null`);
    }
}