document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  const lightboxImg = document.createElement('img');
  const closeButton = document.createElement('button');
  closeButton.className = 'lightbox-close';
  closeButton.innerHTML = '×';
  
  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(closeButton);
  document.body.appendChild(lightbox);

  document.querySelectorAll('.carousel-image-wrapper img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      const originalSrc = this.getAttribute('data-original');
      lightboxImg.src = originalSrc;
      lightbox.classList.add('active');
    });
  });

  // Close lightbox when clicking outside the image or on close button
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === closeButton) {
      lightbox.classList.remove('active');
    }
  });

  // Close lightbox with escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
});
