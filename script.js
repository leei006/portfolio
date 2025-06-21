document.addEventListener('DOMContentLoaded', () => {
  function setupClickthrough(slideshowId, imgId, imagePrefix, imageCount, startIndex = 0) {
    const imageArray = [];
    for (let i = 1; i <= imageCount; i++) {
      imageArray.push(`${imagePrefix}${i}.jpg`);
    }

    let currentIndex = startIndex;
    const container = document.getElementById(slideshowId);
    const image = document.getElementById(imgId);
    const tooltip = container.querySelector('.cursor-tooltip');

    if (container && image && tooltip) {
      container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        const isRightSide = e.clientX > rect.left + rect.width / 2;

        if (isRightSide) {
          currentIndex = (currentIndex + 1) % imageArray.length;
        } else {
          currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
        }

        image.src = imageArray[currentIndex];
      });

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const isRightSide = e.clientX > rect.left + rect.width / 2;
        container.style.cursor = isRightSide ? 'e-resize' : 'w-resize';

        // Show and position tooltip
        tooltip.style.opacity = '1';
        tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
        tooltip.style.top = (e.clientY - rect.top + 20) + 'px';
      });

      container.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    }
  }

  // Initialize both slideshows
  setupClickthrough('slideshow', 'slideshow-img', 'img/gardeningbook', 27, 0);
  setupClickthrough('slideshow2', 'slideshow-img2', 'img/diningshed', 27, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  // Slideshow inside image-container
  const imageContainer = document.getElementById('imageContainer');
  const imageElem = document.getElementById('image');
  const imageTooltip = document.getElementById('imageTooltip');

  const recentImages = [
    'img/homeshoot1.jpg',
    'img/homeshoot2.jpg',
    'img/homeshoot3.jpg',
    'img/homeshoot4.jpg',
    'img/homeshoot5.jpg'
  ];

  let currentImageIndex = 0;

  if (imageContainer && imageElem && imageTooltip) {
    imageContainer.addEventListener('mousemove', (e) => {
      const rect = imageContainer.getBoundingClientRect();
      const isRightSide = e.clientX > rect.left + rect.width / 2;

      imageContainer.style.cursor = isRightSide ? 'e-resize' : 'w-resize';

      imageTooltip.style.opacity = '1';
      imageTooltip.style.left = (e.clientX + 10) + 'px';
      imageTooltip.style.top = (e.clientY + 20) + 'px';
    });

    imageContainer.addEventListener('mouseleave', () => {
      imageTooltip.style.opacity = '0';
      imageContainer.style.cursor = 'default';
    });

    imageContainer.addEventListener('click', (e) => {
      const rect = imageContainer.getBoundingClientRect();
      const isRightSide = e.clientX > rect.left + rect.width / 2;

      if (isRightSide) {
        currentImageIndex = (currentImageIndex + 1) % recentImages.length;
      } else {
        currentImageIndex = (currentImageIndex - 1 + recentImages.length) % recentImages.length;
      }

      imageElem.src = recentImages[currentImageIndex];
    });
  }

  // Existing slideshow code for #slideshow
  const container = document.getElementById('slideshow');
  const tooltip = document.getElementById('cursorTooltip');

  if (container && tooltip) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const isRightSide = e.clientX > rect.left + rect.width / 2;

      container.style.cursor = isRightSide ? 'e-resize' : 'w-resize';

      tooltip.style.opacity = '1';
      tooltip.style.left = (e.clientX + 10) + 'px';
      tooltip.style.top = (e.clientY + 20) + 'px';
    });

    container.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
      container.style.cursor = 'default';
    });

    container.addEventListener('click', (e) => {
      // Add slideshow cycling logic here if you want
    });
  }
});