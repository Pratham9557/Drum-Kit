for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {

        var buttonPressed = this.innerHTML;
        makesound(buttonPressed); //here passing the button click to the makesound function
        buttonAnimation(buttonPressed);

    });

}
document.addEventListener("keydown", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
})

//a function to play sound based on the pressed keys is made
function makesound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;
        case "s":
            var crash = new Audio("sounds/snare.mp3");
            crash.play();
            break;
        case "d":
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();
            break;
        case "j":
            var crash = new Audio("sounds/tom-2.mp3");
            crash.play();
            break;
        case "k":
            var crash = new Audio("sounds/tom-3.mp3");
            crash.play();
            break;
        case "l":
            var crash = new Audio("sounds/tom-4.mp3");
            crash.play();
            break;

        default:
            break;


    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); //we are using the dot to access the current key's class
    activeButton.classList.add("pressed");

    setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100) //using the setTimeout function to remove the added css after the key is being pressed to give that animation effect

}