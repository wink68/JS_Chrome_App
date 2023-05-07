const music = document.querySelector("#music-player");
const preBtn = document.querySelector(".music-container #pre-btn");
const nextBtn = document.querySelector(".music-container #next-btn");
const playBtn = document.querySelector("#play");
const paseBtn = document.querySelector("#pause");
const musicTitle = document.querySelector(".title-box span");

const titles = [
    "White River",
    "Wistful Harp",
    "The First Noel",
    "Simple Sonata",
    "The Closing of Summer",
    "National Express",
    "Requiem in Cello",
    "New Year's Anthem",
    "Shattered Paths",
    "Maryandra's Waltz",
    "Fugue Lullaby",
    "Lifting Dreams",
    "Heavenly"
];
const musicNum = 12;
let currentNum = 0;

function loadAudio() {
    paseBtn.classList.remove(HIDDEN_CLASSNAME);
    playBtn.classList.add(HIDDEN_CLASSNAME);
    music.src = `songs/${currentNum}.mp3`;
    music.load()
    playMusic();
}

function playMusic() {
    if (music.currentTime === 0) {
        music.loop = true;
        music.play();
    } else {
        music.play();
    }
    handleTitle();
}

function pauseMusic() {
    paseBtn.classList.add(HIDDEN_CLASSNAME);
    playBtn.classList.remove(HIDDEN_CLASSNAME);
    music.pause();
}

function handlePreMusic() {
    if (currentNum > musicNum) {
        currentNum--;
    } else {
        currentNum = 0;
    }
    loadAudio();
}

function handleNextMusic() {
    if (currentNum < musicNum) {
        currentNum++;
    } else {
        currentNum = 0;
    }
    loadAudio();
}

function handleTitle() {
    musicTitle.innerText = titles[currentNum];
}
handleTitle();

playBtn.addEventListener("click", loadAudio);
paseBtn.addEventListener("click", pauseMusic);
preBtn.addEventListener("click", handlePreMusic);
nextBtn.addEventListener("click", handleNextMusic)