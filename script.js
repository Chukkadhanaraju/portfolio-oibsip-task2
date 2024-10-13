// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thanks, ${name}! Your message has been sent.`);
    // Clear the form
    this.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

// Scroll Animation - Fade in sections when in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Unobserve after adding the class
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
