document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('.navbar');

    // Set initial state
    navbar.setAttribute('data-visible', 'false');
    mobileNavToggle.setAttribute('aria-expanded', 'false');

    // Toggle mobile menu
    mobileNavToggle.addEventListener('click', () => {
        const visibility = navbar.getAttribute('data-visible');

        if (visibility === "false") {
            navbar.setAttribute('data-visible', "true");
            mobileNavToggle.setAttribute('aria-expanded', "true");
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            navbar.setAttribute('data-visible', "false");
            mobileNavToggle.setAttribute('aria-expanded', "false");
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', () => {
            navbar.setAttribute('data-visible', "false");
            mobileNavToggle.setAttribute('aria-expanded', "false");
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            navbar.setAttribute('data-visible', "false");
            mobileNavToggle.setAttribute('aria-expanded', "false");
            document.body.style.overflow = '';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current section in viewport
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar__link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === #${current}) {
                link.classList.add('active');
            }
        });
    });
});

// Assignment Slideshow Script
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.Assignment-slide');

    // Function to show a specific slide
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Calculate the correct slide index (handles wrap-around)
        currentSlide = (n + slides.length) % slides.length;

        // Show the selected slide
        slides[currentSlide].classList.add('active');
    }

    // Function to move to next/previous slide
    function moveSlide(n) {
        showSlide(currentSlide + n);
    }

    // Initialize the slideshow by showing the first slide
    showSlide(0);

    // Optional: Add event listeners for navigation buttons
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => moveSlide(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => moveSlide(1));
    }

    // Optional: Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (e.key === 'ArrowRight') {
            moveSlide(1);
        }
    });
});