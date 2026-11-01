
const envelope = document.getElementById("openEnvelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const mainContent = document.getElementById("mainContent");

envelope.addEventListener("click", function () {

    // Open the envelope
    envelope.classList.add("open");

    // Reveal the appreciation website
    setTimeout(function () {

        envelopeScreen.classList.add("fade-out");

        mainContent.classList.remove("hidden");
        mainContent.classList.add("show");

    }, 1200);

    // Completely remove the envelope screen
    setTimeout(function () {

        envelopeScreen.style.display = "none";

    }, 2000);

});
const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;

function playMusic() {

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()
        .then(function () {
            isPlaying = true;
            musicButton.textContent = "♫ Music: ON";
        })
        .catch(function (error) {
            console.log("Music error:", error);
            musicButton.textContent = "♫ Music: OFF";
        });
}

musicButton.addEventListener("click", function () {

    if (isPlaying) {
        backgroundMusic.pause();
        isPlaying = false;
        musicButton.textContent = "♫ Music: OFF";
    } else {
        playMusic();
    }

});

// Start music when envelope is clicked
envelope.addEventListener("click", function () {
    playMusic();
});