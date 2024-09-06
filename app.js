// creating function for toggle nav
function toggleNav() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("active");
}

// Carousel functionality to automate image slides
let currentIndex = 0; // track current index
const autoSlideInterval = 3000; // 3 seconds interval between slides

// creating function to display slide
function showSlide(index) {
  const carousel = document.getElementById("carousel");

  const slides = carousel.children;
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// creating function to move to the next slide in the carousel
function nextSlide() {
  showSlide(currentIndex + 1);
}

// creating function to move to the previous slide in the carousel
function prevSlide() {
  showSlide(currentIndex - 1);
}

// creating function to automatically move to next slide after set interval
function autoSlide() {
  nextSlide();

  setTimeout(autoSlide, autoSlideInterval);
}

// creating an Event listener to run certain codes when HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);

  setTimeout(autoSlide, autoSlideInterval);
});
