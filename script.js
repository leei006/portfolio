// Gardeningbook

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

// Diningshedslideshow

const slideshowImages2 = [
  'img/diningshed2.jpg',
  'img/diningshed3.jpg',
  'img/diningshed4.jpg',
  'img/diningshed5.jpg',
  'img/diningshed6.jpg',
  'img/diningshed7.jpg',
  'img/diningshed8.jpg',
  'img/diningshed9.jpg',
  'img/diningshed10.jpg',
  'img/diningshed11.jpg',
  'img/diningshed12.jpg',
  'img/diningshed13.jpg',
  'img/diningshed14.jpg',
  'img/diningshed15.jpg',
  'img/diningshed16.jpg',
  'img/diningshed17.jpg',
  'img/diningshed18.jpg',
  'img/diningshed19.jpg',
  'img/diningshed20.jpg',
  'img/diningshed21.jpg',
  'img/diningshed22.jpg',
  'img/diningshed23.jpg',
  'img/diningshed24.jpg',
  'img/diningshed25.jpg',
  'img/diningshed26.jpg'
  // Add more images as needed
];
let currentSlide2 = 0;
const slideshowImg2 = document.getElementById('slideshow-img2');

if (slideshowImg2) {
  slideshowImg2.addEventListener('click', () => {
    currentSlide2 = (currentSlide2 + 1) % slideshowImages2.length;
    slideshowImg2.src = slideshowImages2[currentSlide2];
  });
}

// Gardeningbooktooltip

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

// tooltip2

const slideshow2 = document.getElementById('slideshow2');
const tooltip2 = document.getElementById('cursorTooltip2');

slideshow2.addEventListener('mousemove', (e) => {
  tooltip2.style.opacity = '1';
  tooltip2.style.left = e.clientX + 15 + 'px';
  tooltip2.style.top = e.clientY + 15 + 'px';
});

slideshow2.addEventListener('mouseleave', () => {
  tooltip2.style.opacity = '0';
});