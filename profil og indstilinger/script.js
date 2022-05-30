document.getElementById("profile-edit").onclick = function() {openDrawer()};

function openDrawer() {
    document.getElementById("drawer").style.display = "block";
    document.getElementById("profile-overlay").style.display ="block";
}

document.getElementById("profile-overlay").onclick = function() {closeDrawer()};

function closeDrawer() {
    document.getElementById("drawer").style.display = "none";
    document.getElementById("profile-overlay").style.display ="none";
}


