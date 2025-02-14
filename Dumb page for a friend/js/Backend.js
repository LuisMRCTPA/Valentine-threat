const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

// Función para cambiar el slide
function updateCarousel() {
  const offset = currentSlide * -100 / totalSlides;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Función para mover al siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

// Función para mover al slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Añadir eventos a los botones
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Movimiento automático cada 5 segundos
setInterval(nextSlide, 5000);

function applyGridLayout(containerSelector, columns = 5, gap = '20px') {
  // Select the container using the selector (e.g., '.products-list')
  const container = document.querySelector(containerSelector);
  if (!container) return; // Exit if container not found

  // Apply grid styling
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gap = gap;
}