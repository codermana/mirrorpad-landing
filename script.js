document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after revealing
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements with the 'reveal' class
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Add scroll effect to header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.background = 'rgba(15, 23, 42, 0.85)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.background = 'rgba(15, 23, 42, 0.5)';
      header.style.boxShadow = 'none';
    }
  });
});
