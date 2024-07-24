document.addEventListener('DOMContentLoaded', () => {
    const videoPlayers = document.querySelectorAll('.video-player');

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('.video');

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
        player.addEventListener("click", () => {
            playPause()
        })
    });
});

function playPause() {
    const videoPlayers = document.querySelectorAll('.video-player');

    var isPlaying = true;

    videoPlayers.forEach(player => {

        const video = player.querySelector('.video');

        player.addEventListener("click", () => {
            // if (isPlaying == true) {
            //     video.pause();
            //     isPlaying = false;
            // } else if(isPlaying == false) {
            //     video.play();
            //     isPlaying = true
            // }

            switch (isPlaying) {
                case true :
                    video.pause()
                    isPlaying = false;
                    break;
                
                case false :
                    video.play();
                    isPlaying = true;
                    break;
            }
        })

    });
        
}