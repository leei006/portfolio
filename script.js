const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/7.jpg']; // Add your image paths here
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('image').src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);