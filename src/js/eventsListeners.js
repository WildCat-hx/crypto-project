"use strict";

import { 
    loginButton,
    loginButtonFooter, 
    closeModal, 
    toggleLoginModal,
    closeLoginModal,
    overlay,
    updateClassName,
    debounce,
    storeScroll,
    scrollFunct,
    navbarWhite,
    scrollTop,
    scrollToTop
} from './methodes.js'

document.addEventListener("DOMContentLoaded", initEventListeners);

function initEventListeners() {

    addClickListener(loginButton, toggleLoginModal, 'loginButton');
    addClickListener(loginButtonFooter, toggleLoginModal, 'loginButtonFooter');
    addClickListener(closeModal, closeLoginModal, 'closeModal');
    addClickListener(scrollTop, scrollToTop, 'scrollTop');

    document.addEventListener('scroll', debounce(storeScroll, 200));

    navbarWhite ? window.addEventListener('scroll', debounce(scrollFunct, 200)) : console.error("navbar is null");

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