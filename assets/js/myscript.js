
// Insert year for copyright
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Hamburger menu toggling
window.onload = function () {
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    var elementsArray = document.querySelectorAll(".nav-link");
    var collapsible = document.getElementById("navbarNav")
    // On click toggle class "is-active"
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
    });

    elementsArray.forEach(function (elem) {
        elem.addEventListener("click", function () {
            hamburger.classList.remove("is-active");
            collapsible.classList.remove("show");
        });
    });
}

