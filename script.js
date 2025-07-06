// Read More functionality
const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const parent = btn.parentElement;
        const moreText = parent.querySelector('.more-text');
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            btn.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            btn.textContent = 'Read More';
        }
    });
});

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form fake submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
        contactForm.reset();
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 4000);
    });
} 