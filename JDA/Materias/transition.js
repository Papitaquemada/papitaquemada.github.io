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
});