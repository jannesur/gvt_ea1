// Scheibe
// Anzahl der Einzelbilder der Scheibe
const numberOfDiscImages = 24;

// Aktuell angezeigtes Bild
let currentDiscImage = 1;

// Speichert die automatische Animation
let discAnimation = null;


// HTML-Elemente
const discImage =
    document.getElementById("disc-image");

const leftButton =
    document.getElementById("left-button");

const rightButton =
    document.getElementById("right-button");

const autoButton =
    document.getElementById("auto-button");

const statusText =
    document.getElementById("status-text");

const angleText =
    document.getElementById("angle-text");


// Scheibe nach links drehen
function rotateLeft() {
    currentDiscImage--;
    if (currentDiscImage < 1) {
        currentDiscImage = numberOfDiscImages;
    }
    showDiscImage();
}


// Scheibe nach rechts drehen
function rotateRight() {
    currentDiscImage++;
    if (currentDiscImage > numberOfDiscImages) {
        currentDiscImage = 1;
    }
    showDiscImage();
}


// Aktuelles Scheibenbild anzeigen
function showDiscImage() {
    // Aus 1 wird 01, aus 2 wird 02 usw.
    let imageNumber =
        String(currentDiscImage).padStart(2, "0");
    // Bildpfad erstellen
    let imagePath =
        "./assets/scheibe-" +
        imageNumber +
        ".png";
    // Neues Bild anzeigen
    discImage.src = imagePath;
    // Aktuellen Winkel berechnen
    let currentAngle =
        (currentDiscImage - 1) * 15;
    // Winkel anzeigen
    angleText.textContent =
        "Aktueller Rotationszustand: " +
        currentAngle +
        "°";
}


// Automatische Drehung der Scheibe
function toggleAutomaticRotation() {
    if (discAnimation !== null) {
        clearInterval(discAnimation);
        discAnimation = null;
        statusText.textContent =
            "Automatische Drehung: Aus";
        return;
    }
    discAnimation = setInterval(function () {
        rotateRight();
    }, 100);
    statusText.textContent =
        "Automatische Drehung: An";
}


// Tastatursteuerung
document.addEventListener("keydown", function (event) {
    const pressedKey =
        event.key.toLowerCase();
    if (pressedKey === "l") {
        rotateLeft();
    }
    if (pressedKey === "r") {
        rotateRight();
    }
    if (pressedKey === "a") {
        toggleAutomaticRotation();
    }
});


// Buttons der Scheibe
leftButton.addEventListener("click", function () {
    rotateLeft();
});
rightButton.addEventListener("click", function () {
    rotateRight();
});
autoButton.addEventListener("click", function () {
    toggleAutomaticRotation();
});



// Hase
// Anzahl der Bilder im Sprite-Sheet
const numberOfRabbitImages = 8;

// Aktuelles Bild
let currentRabbitImage = 0;

// Speichert die Animation
let rabbitAnimation = null;

// Breite eines einzelnen Bildes
const rabbitImageWidth = 300;


// HTML-Elemente
const rabbitSprite =
    document.getElementById("rabbit-sprite");

const rabbitButton =
    document.getElementById("rabbit-button");

const rabbitStatusText =
    document.getElementById("rabbit-status-text");


// Nächstes Bild des Sprite-Sheets anzeigen
function showNextRabbitImage() {
    // Ein Bild weitergehen
    currentRabbitImage++;
    // Nach dem letzten Bild wieder von vorne anfangen
    if (currentRabbitImage >= numberOfRabbitImages) {
        currentRabbitImage = 0;
    }
    // Position des Sprite-Sheets berechnen
    let newPosition =
        currentRabbitImage * rabbitImageWidth;
    // Sprite-Sheet nach links verschieben
    rabbitSprite.style.backgroundPosition =
        "-" + newPosition + "px 0px";
}


// Hasenanimation starten oder stoppen
function toggleRabbitAnimation() {
    // Animation läuft bereits
    if (rabbitAnimation !== null) {
        clearInterval(rabbitAnimation);
        rabbitAnimation = null;
        rabbitButton.textContent =
            "Hase starten";
        rabbitStatusText.textContent =
            "Hasenanimation: Aus";
        return;
    }
    // Animation starten
    rabbitAnimation = setInterval(function () {
        showNextRabbitImage();
    }, 150);
    rabbitButton.textContent =
        "Hase stoppen";
    rabbitStatusText.textContent =
        "Hasenanimation: An";
}


// Button für den Hasen
rabbitButton.addEventListener("click", function () {
    toggleRabbitAnimation();
});