function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {
    const previewDuration = 2000; // Show first 2 seconds
    const videos = document.querySelectorAll('.bento-item video');

    videos.forEach(video => {
        video.addEventListener('loadeddata', () => {
            video.currentTime = 0;
            video.play();

            setTimeout(() => {
                video.pause();
            }, previewDuration);
        });

        // Resume playing on hover
        video.parentElement.addEventListener('mouseenter', () => {
            video.play();
        });

        // Pause when mouse leaves
        video.parentElement.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});