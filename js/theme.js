//JavaScript to help with theme change
window.onload = function () {
    var buttons = document.getElementsByClassName("button");
    var navigation = document.getElementsByClassName("navigation");
    var intro = document.getElementById("intro");
    var about = document.getElementById("about");
    var certificates = document.getElementById("certificates");
    var hobbies = document.getelementyById("hobbies");
    var goals = document.getElementById("goals");
    var contact = document.getElementById("contact");
    var bottom = document.getElementById("bottom");
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");
};
dark.addEventListener("click", function () {
    window.alert("dark");
    intro.style.background = "black";
    navigation.style.background = "black";
});
light.addEventListener("click", function () {
    window.alert("light");
    intro.style.background = "#7cc6ff";
    about.style.background = "#76e7cd";
    certificates.style.background = "#7cc6ff";
    hobbies.style.background = "#76e7cd";
    goals.style.background = "#7cc6ff";
    contact.style.background = "#76e7cd";
    buttons.style.background = "#e3dfe8";
    bottom.style.background = "#dd8247";
});