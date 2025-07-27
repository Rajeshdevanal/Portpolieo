// Initialize AOS
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
    once: true
});

// Toggle Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close menu on mobile after clicking a link
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// Contact Form Validation and Submission with Confetti
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    // Clear previous error messages
    form.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Basic validation
    if (!name) {
        form.querySelector('[name="name"]').nextElementSibling.textContent = 'Name is required';
        valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.querySelector('[name="email"]').nextElementSibling.textContent = 'Valid email is required';
        valid = false;
    }
    if (!message) {
        form.querySelector('[name="message"]').nextElementSibling.textContent = 'Message is required';
        valid = false;
    }

    if (valid) {
        console.log('Form Submitted:', { name, email, message });
        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#facc15', '#ec4899', '#3b82f6', '#84cc16']
        });
        alert('Thank you for your message! (Demo: Message logged to console.)');
        form.reset();
    }
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercentage + '%';
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});