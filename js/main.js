function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
        x.style.display = "?";
    } else {
        x.style.display = "flex";
    }
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

});