const eventDate = new Date('2025-02-21T00:00:00');

document.getElementById('event-date').textContent = `Event Date: ${eventDate.toDateString()}`;

const updateTimer = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
        document.getElementById('timer').textContent = "Event Started!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
};

setInterval(updateTimer, 1000);


        const registerBtn = document.getElementById('register-btn');
        const communityBtn = document.getElementById('community-btn');
        const registerLink = document.getElementById('register-link');
        const communityLink = document.getElementById('community-link');

        const handleRegisterClick = () => {
            alert('Registration form will be available soon!');
        };

        const handleCommunityClick = () => {
            alert('Join our community on Discord! (Link coming soon)');
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        communityBtn.addEventListener('click', handleCommunityClick);
        registerLink.addEventListener('click', handleRegisterClick);
        communityLink.addEventListener('click', handleCommunityClick);

        // Scroll animation for prize cards
        const prizeCards = document.querySelectorAll('.prize-card');
        const animateCards = () => {
            prizeCards.forEach((card) => {
                const cardTop = card.getBoundingClientRect().top;
                const cardBottom = card.getBoundingClientRect().bottom;
                if (cardTop < window.innerHeight && cardBottom > 0) {
                    card.classList.add('animate');
                }
            });
        };

        window.addEventListener('scroll', animateCards);
        animateCards(); 

        // Parallax effect for hero section
        const heroParallax = document.querySelector('.hero-parallax');
        const heroLayers = document.querySelectorAll('.hero-layer');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            heroLayers.forEach((layer, index) => {
                const speed = (index + 1) * 0.2;
                const yPos = -(scrollY * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });