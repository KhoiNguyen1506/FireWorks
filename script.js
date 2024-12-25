var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var btn = document.querySelector('.app');
const audioPlayer = document.getElementById("audioPlayer");
const pauseIcon = document.querySelector(".pause");
const playIcon = document.querySelector(".play");
function toggleAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

btn.addEventListener('click', () => {
    if(play.classList.contains('active')){
        play.classList.remove('active');
        pause.classList.add('active');
    }
    else{
        pause.classList.remove('active');
        play.classList.add('active');
    }
})