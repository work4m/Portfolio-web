document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for Scroll Animations --- //
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // --- Typing Effect for Hero Subtitle --- //
    const typeElement = document.querySelector('.type-effect');
    if (typeElement) {
        const textToType = typeElement.textContent;
        typeElement.textContent = '';
        typeElement.style.borderRight = '2px solid var(--accent-primary)';
        
        let i = 0;
        const typingSpeed = 60; // ms per character

        function typeWriter() {
            if (i < textToType.length) {
                typeElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Remove cursor blink after typing is done
                setTimeout(() => {
                    typeElement.style.borderRight = 'none';
                }, 2000);
            }
        }
        
        // Start typing after a brief delay
        setTimeout(typeWriter, 500);
    }
    
    // --- Smooth Scrolling for Navbar Links --- //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
