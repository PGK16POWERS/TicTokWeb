document.addEventListener('DOMContentLoaded', () => {
    const videoPlayers = document.querySelectorAll('.video-player');

    var isPlaying = true;

    videoPlayers.forEach(video =>{
        const currentVideo = video.querySelector(".video");

        currentVideo.addEventListener("click", () => {

            switch (isPlaying) {
                case true :
                   currentVideo.pause(); 
                   isPlaying = false;
                   break;
                
                case false :
                   currentVideo.play(); 
                   isPlaying = true;
                   break;
            }

        });
    })
    
});
