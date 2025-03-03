document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const toggleButton = document.getElementById('toggleButton');
    const progressBar = document.getElementById('progressBar');
    const volumeInput = document.getElementById('volume');
    const playbackSpeedInput = document.getElementById('playbackSpeed');
    const rewindButton = document.getElementById('rewindButton');
    const forwardButton = document.getElementById('forwardButton');

    // Automatically start video for testing purposes
    // video.play(); // Uncomment if needed for tests

    // Toggle Play/Pause
    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
            toggleButton.innerHTML = '❚ ❚';
        } else {
            video.pause();
            toggleButton.innerHTML = '►';
        }
    }

    toggleButton.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    // Update Play/Pause Button on Video State Change
    video.addEventListener('play', function() {
        toggleButton.innerHTML = '❚ ❚';
    });
    video.addEventListener('pause', function() {
        toggleButton.innerHTML = '►';
    });

    // Progress Bar
    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Volume Control
    volumeInput.addEventListener('input', function() {
        video.volume = volumeInput.value;
    });

    // Playback Speed Control
    playbackSpeedInput.addEventListener('input', function() {
        video.playbackRate = playbackSpeedInput.value;
    });

    // Skip Buttons
    rewindButton.addEventListener('click', function() {
        video.currentTime -= 10;
    });

    forwardButton.addEventListener('click', function() {
        video.currentTime += 25;
    });

    // Make Progress Bar Clickable
    document.querySelector('.progress').addEventListener('click', function(e) {
        const progress = (e.offsetX / this.offsetWidth) * 100;
        progressBar.style.width = `${progress}%`;
        video.currentTime = (progress / 100) * video.duration;
    });
});
