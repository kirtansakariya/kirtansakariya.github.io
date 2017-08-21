//JavaScript to help with theme change
window.onload = function () {
    var buttons = document.getElementById("buttons");
    var navigation = document.getElementsById("navigation");
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
    navigation.style.backgroundColor = "#8c344e";
    intro.style.background = "#35524a";
    about.style.background = "#6a5837";
    certificates.style.background = "#35524a";
    hobbies.style.background = "#6a5837";
    goals.style.background = "#35524a";
    contact.style.background = "#6a5837";
    bottom.style.background = "#35524a";
});
light.addEventListener("click", function () {
    navigation.style.backgroundColor = "#dd8247";
    intro.style.background = "#7cc6ff";
    about.style.background = "#76e7cd";
    certificates.style.background = "#7cc6ff";
    hobbies.style.background = "#76e7cd";
    goals.style.background = "#7cc6ff";
    contact.style.background = "#76e7cd";
    buttons.style.backgroundColor = "#e3dfe8";
    bottom.style.background = "#dd8247";
});