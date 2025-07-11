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

        tooltip.style.opacity = '1';
        tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
        tooltip.style.top = (e.clientY - rect.top + 20) + 'px';
      });

      container.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    }
  }

  // Initialize all slideshows
  setupClickthrough('slideshow', 'slideshow-img', 'img/gardeningbook', 27);
  setupClickthrough('slideshow2', 'slideshow-img2', 'img/diningshed', 26);
  setupClickthrough('slideshow3', 'slideshow-img3', 'img/groove', 1);
  setupClickthrough('slideshow4', 'slideshow-img4', 'img/destijl', 2); 

  // Optional dynamic gallery section
  const gallery = document.getElementById('gallery');
  if (gallery) {
    for (let i = 1; i <= 29; i++) {
      const div = document.createElement('div');
      div.className = 'work-img';
      const img = document.createElement('img');
      img.src = `img/collectionphotos${i}.jpg`;
      img.alt = `Image ${i}`;
      div.appendChild(img);
      gallery.appendChild(div);
    }
  }
});