const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    if (!aside.classList.contains("inactive")){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    if (!aside.classList.contains("inactive")){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCartAside () {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
}
