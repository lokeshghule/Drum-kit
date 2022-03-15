
for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", bindSound);


}

function bindSound() {


    var currentInnerHtml = this.innerHTML;

    produceSound(currentInnerHtml);
    buttonAnimation(currentInnerHtml);

}

document.addEventListener("keypress", function (event) {

    produceSound(event.key);
    buttonAnimation(event.key);


});

function produceSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/JPW3B2T-impact-whoosh-drum.mp3");
            audio1.play();
            break;

        case "a":
            var audio1 = new Audio("sounds/MBR4P6K-storm-drum.mp3");
            audio1.play();
            break;

        case "s":
            var audio1 = new Audio("sounds/mixkit-cinematic-ancient-drums-heartbeat-487.wav");
            audio1.play();
            break;

        case "d":
            var audio1 = new Audio("sounds/mixkit-cinematic-mystery-trailer-drum-hit-546.mp3");
            audio1.play();
            break;

        case "j":
            var audio1 = new Audio("sounds/mixkit-ominous-drums-227.wav");
            audio1.play();
            break;

        case "k":
            var audio1 = new Audio("sounds/RKEUF6N-drum-roll.mp3");
            audio1.play();
            break;

        case "l":
            var audio1 = new Audio("sounds/JPW3B2T-impact-whoosh-drum.mp3");
            audio1.play();
            break;

        default: console.log(key);

    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 200)
}