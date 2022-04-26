var hamburguerMenu2 = document.getElementById("displaymenu");
// var menuPhone = document.getElementsByClassName("display-menu-phone");

hamburguerMenu2.addEventListener("click", displayMenu);

function displayMenu () {
    document.getElementsByClassName("display-menu-phone").style.display = "block";
}