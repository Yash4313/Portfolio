const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Reveal Animation (Simple version using Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.section-title, .about-text, .skill-card, .project-card, .edu-card');
hiddenElements.forEach((el) => observer.observe(el));

// Handle Form Submission (Prevent default reload for demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    this.reset();
});


// Load EmailJS
(function () {
  emailjs.init("owW4HsL3N_z5w2ADA"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_zqll9xz", "template_9p3j6tr", this)
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("Failed to send message: " + error);
    });
});
