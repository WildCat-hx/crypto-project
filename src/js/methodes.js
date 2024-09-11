"use strict";

export const scrollTop = document.getElementById("scroll_Top");
export const navbarWhite = document.querySelector(".navbar");
export const loginButton = document.getElementById("loginButton");
export const loginButtonFooter = document.getElementById("login-button-footer");
export const loginModal = document.getElementById("loginModal");
export const closeModal = document.getElementsByClassName("close")[0];
export const overlay = document.getElementById("overlay");

export function scrollFunct() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

export function toggleLoginModal() {
    var status = loginModal.style.display
    let stat = (status === "none") ? "block" : "none";
    loginModal.style.display = stat;
    overlay.style.display = stat;
}

export function closeLoginModal() { 
    loginModal.style.display = "none";
    overlay.style.display = "none";
}
