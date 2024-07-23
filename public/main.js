document.addEventListener('DOMContentLoaded', () => {
    const videoPlayers = document.querySelectorAll('.video-player');

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video.video');

            if (entry.isIntersecting) {
                video.play();
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
    });

    videoPlayers.forEach(player => {
        observer.observe(player);
    });
});
