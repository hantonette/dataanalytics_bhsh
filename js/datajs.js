// Contact form submit handler
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks! Your message is most appreciated ❤️");
});

// Navbar hide/show & menu button
(() => {
  const navbar = document.querySelector('.navbar');
  const menuButton = document.getElementById('menuButton');
  const menuOverlay = document.getElementById('menuOverlay');
  let lastScroll = 0;

  // Show/hide menu button on scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if  (currentScroll < lastScroll) {
      // scrolling up → hide navbar, show menu button
      navbar.classList.add('navbar-hidden');
      menuButton.style.display = 'flex';
    }

    if (currentScroll <= 0) {
      navbar.classList.remove('navbar-hidden');
      menuButton.style.display = 'none';
      menuOverlay.classList.remove('show');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Toggle menu overlay when button clicked
  menuButton.addEventListener('click', () => {
    menuOverlay.classList.toggle('show');
  });

  // Close overlay when link clicked
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuOverlay.classList.remove('show');
    });
  });
})();   