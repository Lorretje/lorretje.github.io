// Select elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Initialize first slide
showSlide(currentIndex);

// Event listeners for navigation buttons
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to first slide
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to last slide
    showSlide(currentIndex);
});
