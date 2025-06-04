document.addEventListener('DOMContentLoaded', () => {
  // Gardening Book Slideshow (Click to Advance)
  const gardeningImages = [];
  for (let i = 1; i <= 27; i++) {
    gardeningImages.push(`img/gardeningbook${i}.jpg`);
  }
  let gardeningIndex = 0;
  const gardeningImg = document.getElementById('slideshow-img');

  if (gardeningImg) {
    gardeningImg.addEventListener('click', () => {
      gardeningIndex = (gardeningIndex + 1) % gardeningImages.length;
      gardeningImg.src = gardeningImages[gardeningIndex];
    });
  }

  // Dining Shed Slideshow (Auto-Advance)
  const diningImages = [];
  for (let i = 2; i <= 26; i++) {
    diningImages.push(`img/diningshed${i}.jpg`);
  }
  let diningIndex = 0;
  const diningImg = document.getElementById('slideshow-img2');

  if (diningImg) {
    setInterval(() => {
      diningIndex = (diningIndex + 1) % diningImages.length;
      diningImg.src = diningImages[diningIndex];
    }, 2000); // Change every 2 seconds
  }

  // Gardening Tooltip
  const slideshow1 = document.getElementById('slideshow');
  const tooltip1 = document.getElementById('cursorTooltip');

  slideshow1.addEventListener('mousemove', (e) => {
    tooltip1.style.opacity = '1';
    tooltip1.style.left = e.clientX + 15 + 'px';
    tooltip1.style.top = e.clientY + 15 + 'px';
  });

  slideshow1.addEventListener('mouseleave', () => {
    tooltip1.style.opacity = '0';
  });

  // Dining Tooltip
  // const slideshow2 = document.getElementById('slideshow2');
  // const tooltip2 = document.getElementById('cursorTooltip2');

  // slideshow2.addEventListener('mousemove', (e) => {
  //   tooltip2.style.opacity = '1';
  //   tooltip2.style.left = e.clientX + 15 + 'px';
  //   tooltip2.style.top = e.clientY + 15 + 'px';
  // });

  // slideshow2.addEventListener('mouseleave', () => {
  //   tooltip2.style.opacity = '0';
  // });
});