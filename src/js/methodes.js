"use strict";

export const navbarWhite = document.querySelector(".navbar");
export const scrollTop = document.getElementById("scroll_Top");
export const loginButton = document.getElementById("loginButton");
export const loginButtonFooter = document.getElementById("login-button-footer");
export const loginModal = document.getElementById("loginModal");
export const closeModal = document.getElementsByClassName("close")[0];
export const overlay = document.getElementById("overlay");
export const navbarContainer = document.getElementById("navbar-container");


export function scrollFunct() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/** 
 * 
 * Fonction storeScroll: 
 * 
 * Récupere la position du scroll et la conserve dans l'attribut data pour
 * l'utiliser dans le CSS.
 *  
**/

export const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

storeScroll();

/** 
 * 
 * Fonction toggleLoginModal: 
 * 
 * Affiche le component modal au click du bouton loginButton si il n'est pas déjà
 * affiché sinon ne le réaffiche pas.
 *  
**/

export function toggleLoginModal() {
    let status = loginModal.style.display
    let stat = (status === "none") ? "block" : "none";
    loginModal.style.display = stat;
    overlay.style.display = stat;
}

/** 
 * 
 * Fonction closeLoginModal: 
 * 
 * Cache le component modal au click du bouton "x" a l'exterieur du modal sur l'overlay.
 *  
**/

export function closeLoginModal() { 
    loginModal.style.display = "none";
    overlay.style.display = "none";
}

/** 
 * 
 * Fonction updateClasseName : 
 * 
 * Modifie les/la classe/s d'un element HTML dans le DOM en fonction de la largeur de la fenetre (820px)
 *  
**/

export function updateClassName() {

    if (window.innerWidth <= 820) {
        navbarContainer.classList.remove("d-flex");
        navbarContainer.classList.add("container");
    } else {
        navbarContainer.classList.add("d-flex");
        navbarContainer.classList.remove("container");
    }
}

updateClassName();

/** 
 * 
 * Fonction debounce : 
 * 
 * limite la frequence d'execution d'une fonction en retardant son appel. 
 * 
**/

export function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
