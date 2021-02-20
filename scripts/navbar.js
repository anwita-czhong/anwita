function toggleHam(x) {
    x.classList.toggle("trigger");
    toggleNavClass();
}

function toggleNavClass() {
    document.getElementById("mobile-nav").classList.toggle("show");
}