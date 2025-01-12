document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  let currentSlide = 0;
  let isPlaying = true;
  
  // Remove no-js-active class since JavaScript is running
  slides.forEach(slide => slide.classList.remove('no-js-active'));
  
  // Set initial state immediately
  slides[currentSlide].classList.add('active');
  loadSlideImage(currentSlide);
  loadSlideImage((currentSlide + 1) % slides.length);
  
  // Start the slideshow after a delay
  let slideInterval = setInterval(nextSlide, 5000);

  function loadSlideImage(index) {
    const slide = slides[index];
    const img = slide.querySelector('img.lazy');
    if (img && img.dataset.src && !img.src) {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    }
  }

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
        // Preload next image
        loadSlideImage((index + 1) % slides.length);
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
    // When going backwards, preload the previous image
    loadSlideImage((currentSlide - 1 + slides.length) % slides.length);
  }

  function resetTimer() {
    if (isPlaying) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  prevBtn.addEventListener('click', () => {
    previousSlide();
    resetTimer();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  carousel.addEventListener('mouseenter', () => {
    if (isPlaying) {
      clearInterval(slideInterval);
    }
  });

  carousel.addEventListener('mouseleave', () => {
    if (isPlaying) {
      slideInterval = setInterval(nextSlide, 5000);
    }
  });
});
