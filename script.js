const photo = [
  {
    "id": 15,
    "title": "Groove",
    "year": 2025,
    "medium": "Typeface Design. Draws from visual spirit of 1960’s  in San Francisco. Hand-painted concert posters, and psychedelic lettering.",
    "img": [
      "img/groove.jpg", "img/groove2.jpg","img/groove3.jpg","img/groove4.jpg","img/groove5.jpg",
      "img/groove6.jpg","img/groove7.jpg","img/groove8.jpg","img/groove9.jpg","img/groove10.jpg",
      "img/groove11.jpg"
    ]
  },
  {
    "id": 2,
    "title": "Dining Shed Collection",
    "year": 2024,
    "medium": "City collection of pandemic dining sheds.",
    "img": [
      "img/collectionphotos3.jpg","img/collectionphotos1.jpg","img/collectionphotos2.jpg",
      "img/collectionphotos4.jpg","img/collectionphotos5.jpg","img/collectionphotos6.jpg",
      "img/collectionphotos7.jpg","img/collectionphotos8.jpg","img/collectionphotos9.jpg",
      "img/collectionphotos10.jpg","img/collectionphotos11.jpg","img/collectionphotos12.jpg",
      "img/collectionphotos13.jpg","img/collectionphotos14.jpg","img/collectionphotos15.jpg",
      "img/collectionphotos16.jpg","img/collectionphotos17.jpg","img/collectionphotos18.jpg",
      "img/collectionphotos19.jpg","img/collectionphotos20.jpg","img/collectionphotos21.jpg",
      "img/collectionphotos22.jpg","img/collectionphotos23.jpg","img/collectionphotos24.jpg",
      "img/collectionphotos25.jpg","img/collectionphotos26.jpg","img/collectionphotos27.jpg",
      "img/collectionphotos28.jpg","img/collectionphotos29.jpg"
    ]
  },
  {
    "id": 12,
    "title": "Wiki Book",
    "year": 2025,
    "medium": "Graphic Design",
    "img": [
      "img/wiki12.jpg","img/wiki2.jpg","img/wiki3.jpg","img/wiki4.jpg","img/wiki5.jpg",
      "img/wiki6.jpg","img/wiki7.jpg","img/wiki8.jpg","img/wiki9.jpg","img/wiki10.jpg",
      "img/wiki11.jpg"
    ]
  },
  {
    "id": 14,
    "title": "Radishes",
    "year": 2025,
    "medium": "Photography",
    "img": ["img/radish1.jpg",]
  },
  {
    "id": 11,
    "title": "Item In Hand",
    "year": 2025,
    "medium": "Graphic Design",
    "img": ["img/iteminhand.jpg"]
  },
  {
    "id": 10,
    "title": "Park Benches",
    "year": 2024,
    "medium": "Photography",
    "img":["img/bench2.jpg", "img/bench3.jpg", "img/bench4.jpg", "img/bench6.jpg",
          "img/bench7.jpg", "img/bench8.jpg", "img/bench9.jpg", "img/bench11.jpg", "img/bench12.jpg"]
  },
  {
    "id": 1,
    "title": "De Stijl",
    "year": 2023,
    "medium": "Typographic print in color on copy paper.",
    "img":["img/vilmos1.jpg", "img/vilmos2.jpg", "img/vilmos3.jpg"]
  },
  {
    "id": 3,
    "title": "Gardening Book",
    "year": 2025,
    "medium": "Illustrations and found text in a 3.25 x 4.5 inch saddle stitch book.",
    "img":["img/gardeningbook8.jpg","img/gardeningbook9.jpg","img/gardeningbook10.jpg",
          "img/gardeningbook11.jpg","img/gardeningbook12.jpg","img/gardeningbook13.jpg",
          "img/gardeningbook14.jpg","img/gardeningbook15.jpg","img/gardeningbook16.jpg",
          "img/gardeningbook17.jpg","img/gardeningbook18.jpg","img/gardeningbook19.jpg",
          "img/gardeningbook20.jpg","img/gardeningbook21.jpg","img/gardeningbook22.jpg",
          "img/gardeningbook23.jpg","img/gardeningbook24.jpg","img/gardeningbook25.jpg",
          "img/gardeningbook26.jpg","img/gardeningbook27.jpg"]
  },
  {
    "id": 4,
    "title": "San Francisco",
    "year": 2025,
    "medium": "Photography. San Francisco Bay",
    "img": ["img/homeshoot1.jpg", "img/homeshoot2.jpg", "img/homeshoot3.jpg",
            "img/homeshoot4.jpg","img/homeshoot5.jpg"]
  },
  {
    "id": 9,
    "title": "Food",
    "year": 2024,
    "medium": "Photography. Food styling.",
    "img": ["img/1.jpg", "img/4.jpg"]
  }
];

function createMediaElement(src, title) {
  if (src.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";  // 🔥 cover mode
    return video;
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";  // 🔥 cover mode
    return img;
  }
}

// Smoothly change media
function changeMedia(mediaElement, src, title) {
  mediaElement.classList.add("fade-out");
  setTimeout(() => {
    if (src.endsWith(".mp4")) {
      mediaElement.src = src;
      mediaElement.autoplay = true;
      mediaElement.loop = true;
      mediaElement.muted = true;
      mediaElement.playsInline = true;
      mediaElement.style.objectFit = "cover";
    } else {
      mediaElement.src = src;
      mediaElement.alt = title;
      mediaElement.style.objectFit = "cover";
    }
    mediaElement.classList.remove("fade-out");
  }, 500);
}

// Render work with auto-rotation only when visible
const workContainer = document.getElementById("work-container");

photo.forEach(item => {
  const workItem = document.createElement("div");
  workItem.classList.add("work-item");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("work-image");

  const slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");

  let currentIndex = 0;
  let mediaElement = createMediaElement(item.img[0], item.title);
  slideshowContainer.appendChild(mediaElement);
  imageWrapper.appendChild(slideshowContainer);

  const info = document.createElement("div");
  info.classList.add("work-info");

  const titleEl = document.createElement("div");
  titleEl.classList.add("work-title");
  titleEl.textContent = item.title;

  const yearEl = document.createElement("div");
  yearEl.classList.add("work-year");
  yearEl.textContent = item.year;

  const mediumEl = document.createElement("div");
  mediumEl.classList.add("work-medium");
  mediumEl.textContent = item.medium;

  info.appendChild(titleEl);
  info.appendChild(yearEl);
  info.appendChild(mediumEl);

  workItem.appendChild(imageWrapper);
  workItem.appendChild(info);
  workContainer.appendChild(workItem);

  // Auto-rotate ONLY when this slideshow is visible
  if (item.img.length > 1) {
    let intervalId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!intervalId) {
            intervalId = setInterval(() => {
              currentIndex = (currentIndex + 1) % item.img.length;
              changeMedia(mediaElement, item.img[currentIndex], item.title);
            }, 1000); // 🔥 change rotation speed here (ms)
          }
        } else {
          clearInterval(intervalId);
          intervalId = null;
        }
      },
      { threshold: 1.0 } // 80% visible triggers rotation
    );

    observer.observe(slideshowContainer);
  }
});