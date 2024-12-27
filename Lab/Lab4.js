document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

document.querySelectorAll('.section-headerLab4').forEach(section => {
    section.addEventListener('click', () => {
        // Section expand/collapse functionality can be added here
    });
});
document.querySelectorAll('.tab').forEach(tab => {
tab.addEventListener('click', (e) => {
e.preventDefault();
document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
tab.classList.add('active');
});
});

document.querySelectorAll('.section-headerLab4').forEach(section => {
section.addEventListener('click', () => {
// Section expand/collapse functionality can be added here
});
});

// YouTube API Integration
let player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
}
});
}

function onPlayerReady(event) {
const videoOverlay = document.getElementById('videoOverlay');
videoOverlay.addEventListener('click', function() {
event.target.playVideo();
document.getElementById('player').style.opacity = '1';
videoOverlay.style.display = 'none';
});
}

function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING) {
document.getElementById('player').style.opacity = '1';
document.getElementById('videoOverlay').style.display = 'none';
}
}

// Load YouTube API
(function loadYouTubeAPI() {
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();
