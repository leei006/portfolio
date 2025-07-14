document.addEventListener('DOMContentLoaded', () => {
  function setupClickthrough(slideshowId, imgId, imagePrefix, imageCount, startIndex = 0) {
    const imageArray = [];
    for (let i = 1; i <= imageCount; i++) {
      imageArray.push(`${imagePrefix}${i}.jpg`);
    }

    let currentIndex = startIndex;
    const container = document.getElementById(slideshowId);
    const image = document.getElementById(imgId);
    const tooltip = container?.querySelector('.cursor-tooltip');

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
  setupClickthrough('slideshow3', 'slideshow-img3', 'img/groove', 2);
  setupClickthrough('slideshow4', 'slideshow-img4', 'img/destijl', 3); 
  setupClickthrough('slideshow5', 'slideshow-img5', 'img/dogcarecampaign', 1); 

  // Load images dynamically based on page
  const gallery = document.getElementById('gallery');
  if (gallery) {
    if (document.body.classList.contains('dining-page')) {
      // Load dining shed photos
      const totalImages = 29;
      for (let i = 1; i <= totalImages; i++) {
        const div = document.createElement('div');
        div.className = 'work-img';
        const img = document.createElement('img');
        img.src = `img/collectionphotos${i}.jpg`;
        img.alt = `Dining Shed ${i}`;
        div.appendChild(img);
        gallery.appendChild(div);
      }
    } else if (document.body.classList.contains('photography-page')) {
      // Load homeshoot photos for photography page
      const photos = [
        'img/homeshoot5.jpg',
        'img/homeshoot3.jpg',
        'img/homeshoot2.jpg',
        'img/2.jpg',
        'img/1.jpg',
        'img/homeshoot1.jpg',
        'img/homeshoot4.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',

        // add more if needed
      ];
      photos.forEach((src, i) => {
        const div = document.createElement('div');
        div.className = 'work-img';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Photography ${i + 1}`;
        div.appendChild(img);
        gallery.appendChild(div);
      });
    }
  }
});