export const scrollTop = document.getElementById("scroll_Top");
export const navbarWhite = document.querySelector(".navbar");
export const loginButton = document.getElementById("loginButton");
export const loginModal = document.getElementById("loginModal");
export const closeModal = document.getElementsByClassName("close")[0];

export function scrollFunct() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

export function showLoginModal() {
    loginModal.style.display = "block";
}

export function hideLoginModal() {
    loginModal.style.display = "none";
}

export function change_form() {
    if (window.getComputedStyle(registerModal).display === "none") {
        registerModal.style.display = "block";
        loginModal.style.display = "none";
    } else {
        registerModal.style.display = "none";
        loginModal.style.display = "block";
    }
}