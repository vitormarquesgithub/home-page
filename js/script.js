const openDrawerBtn = document.getElementById('openDrawerBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawer = document.getElementById('drawer');
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

let isFocused = false;

openDrawerBtn.addEventListener('click', () => {
    drawer.classList.add('open');
});

closeDrawerBtn.addEventListener('click', () => {
    drawer.classList.remove('open');
});

document.addEventListener('click', (event) => {
    if (!drawer.contains(event.target) && !openDrawerBtn.contains(event.target)) {
        drawer.classList.remove('open');
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        drawer.classList.remove('open');
        searchInput.blur(); 
    }
});

window.onscroll = function() {
    if (window.scrollY > 300 && !isFocused) {
        searchInput.style.display = "none";
        searchIcon.style.display = "block";
    } else {
        searchInput.style.display = "block";  
        searchIcon.style.display = "none";
    }
};

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { 
        searchInput.blur(); 
    }
});

searchIcon.onclick = function() {
    if (!isFocused) {
        searchInput.style.display = "block";
        searchInput.focus();
        isFocused = true;  
        searchIcon.style.display = "none";
    }
};

searchInput.addEventListener("focus", function() {
    isFocused = true;  
    searchInput.style.display = "block"; 
});

searchInput.addEventListener("blur", function() {
    isFocused = false;  
});


