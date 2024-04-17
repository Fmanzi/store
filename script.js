let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide-banner img');
  slideIndex += n;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  document.querySelector('.slide-banner').style.transform = `translateX(-${slideIndex * 100}%)`;

  updateIndicators(); // Update indicators
}

function nextSlide() {
  showSlide(1);
}

function prevSlide() {
  showSlide(-1);
}

// Automatic slideshow
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Function to update indicators
function updateIndicators() {
  const slides = document.querySelectorAll('.slide-banner img');
  const indicatorsContainer = document.querySelector('.indicators');

  indicatorsContainer.innerHTML = ''; // Clear existing indicators

  slides.forEach((slide, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === slideIndex) {
      indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);
  });
}
