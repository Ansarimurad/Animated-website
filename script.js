// Open and Close Modal
function openProjects() {
    document.getElementById("projectModal").style.display = "flex";
    document.getElementById("projectList").style.display = "grid";
    document.getElementById("projectView").style.display = "none";
}

function closeProjects() {
    document.getElementById("projectModal").style.display = "none";
}

// Close when clicking outside modal
window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Open project inside modal full display
function openProject(url) {
    document.getElementById("projectList").style.display = "none";
    document.getElementById("projectView").style.display = "block";
    document.getElementById("projectIframe").src = url;
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.querySelector(".menu").style.display = "none";  // menu hide
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.querySelector(".menu").style.display = "block"; // menu show again
}


