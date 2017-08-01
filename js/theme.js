//JavaScript to help with theme change
window.onload = function () {
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
dark.addEventListener("click", function(){
    alert("Theme changed to the Dark Theme");
});
light.addEventListener("click", function(){
    alert("Theme changed to the Light Theme");
})