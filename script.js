const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/7.jpg']; // Add your image paths here
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('image').src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);

const slideshowImages = [];

for (let i = 1; i <= 27; i++) {
  slideshowImages.push(`img/gardeningbook${i}.jpg`);
}

let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
  const slideshowImg = document.getElementById('slideshow-img');

  if (slideshowImg) {
    slideshowImg.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slideshowImages.length;
      slideshowImg.src = slideshowImages[currentSlide];
    });
  }
});

const slideshow = document.getElementById('slideshow');
const tooltip = document.getElementById('cursorTooltip');

slideshow.addEventListener('mousemove', (e) => {
  tooltip.style.opacity = '1';
  tooltip.style.left = e.clientX + 15 + 'px'; // 15px offset from cursor
  tooltip.style.top = e.clientY + 15 + 'px';
});

slideshow.addEventListener('mouseleave', () => {
  tooltip.style.opacity = '0';
});