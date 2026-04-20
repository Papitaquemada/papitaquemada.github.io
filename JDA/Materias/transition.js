document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a, .view-activities-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (link.target === '_blank' || link.href.startsWith('http')) {
                return;
            }

            e.preventDefault();
            const href = link.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
        }
    });

    // Botón de play para el video
    const playBtn = document.getElementById('play-btn');
    const video = document.getElementById('feria-video');
    if (playBtn && video) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.textContent = '⏸️';
            } else {
                video.pause();
                playBtn.textContent = '▶️';
            }
        });
    }
});