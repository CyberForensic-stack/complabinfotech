// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Slider Functionality
const reviewCards = document.querySelectorAll('.review-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Function to show the current review card
function showReview(index) {
  reviewCards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) {
      card.classList.add('active');
    }
  });
}

// Function to move to the next review
function nextReview() {
  currentIndex = (currentIndex < reviewCards.length - 1) ? currentIndex + 1 : 0;
  showReview(currentIndex);
}

// Function to move to the previous review
function prevReview() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : reviewCards.length - 1;
  showReview(currentIndex);
}

// Event listeners for buttons
prevButton.addEventListener('click', prevReview);
nextButton.addEventListener('click', nextReview);

// Auto-slide functionality
let autoSlideInterval = setInterval(nextReview, 5000); // Change slide every 5 seconds

// Pause auto-slide on hover
const slider = document.querySelector('.review-slider');
slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slider.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextReview, 5000);
});

// Initialize first review
showReview(currentIndex);

// Countdown Timer
const countdown = () => {
    const endDate = new Date("December 31, 2023 23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
  
    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".countdown-timer").innerHTML = "<p>Offer Expired!</p>";
    }
  };
  
  const countdownInterval = setInterval(countdown, 1000);

 // FAQ Toggle Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    // Toggle the active class on the answer
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');

    // Close other answers when one is opened
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove('active');
      }
    });
  });
});