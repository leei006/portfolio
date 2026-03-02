document.addEventListener("DOMContentLoaded", () => {

  // ----------------------
  // DOM ELEMENTS
  // ----------------------
  const workContainer = document.getElementById("work-container");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  // ----------------------
  // MEDIA FUNCTIONS
  // ----------------------
  function createMediaElement(src, title) {
    if (src.toLowerCase().endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = src;
      video.autoplay = false; // we control playback manually
      video.loop = false;
      video.muted = true;
      video.playsInline = true;
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      return video;
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = title;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      return img;
    }
  }

  function changeMedia(mediaElement, src, title) {
    mediaElement.classList.add("fade-out");
    setTimeout(() => {
      mediaElement.src = src;
      mediaElement.classList.remove("fade-out");
    }, 500);
  }

  // ----------------------
  // PHOTO ARRAY
  // ----------------------
  const photo = [
    {
      id: 15,
      title: "Groove",
      year: 2025,
      medium: "Typeface Design. Draws from visual spirit of 1960’s in San Francisco. Hand-painted concert posters, and psychedelic lettering.",
      img: [
        "img/groove.jpg","img/groove2.JPG","img/groove3.jpg","img/groove4.jpg",
        "img/groove5.jpg","img/groove6.jpg","img/groove7.jpg","img/groove8.jpg",
        "img/groove9.jpg","img/groove10.jpg","img/groove11.jpg"
      ]
    },
    {
      id: 17,
      title: "Dog Days",
      year: 2025,
      medium: "Doodle series",
      img: [
        "img/dogcarecampaign.jpg"
      ]
    },
    {
      id: 16,
      title: "The Kitchen Witch",
      year: 2025,
      medium: "Doodle series.",
      img: [
        "video/kitchenwitch1.mp4","video/kitchenwitch2.mp4","video/kitchenwitch3.mp4","video/kitchenwitch4.mp4", "video/kitchenwitch5.mp4"
      ]
    },
    {
      id: 2,
      title: "Dining Shed Collection",
      year: 2024,
      medium: "City collection of pandemic dining sheds.",
      img: [
        "img/collectionphotos3.jpg","img/collectionphotos1.jpg","img/collectionphotos2.jpg",
        "img/collectionphotos6.jpg","img/collectionphotos8.jpg","img/collectionphotos9.jpg",
        "img/collectionphotos10.jpg","img/collectionphotos13.jpg","img/collectionphotos14.jpg",
        "img/collectionphotos15.jpg","img/collectionphotos16.jpg","img/collectionphotos17.jpg",
        "img/collectionphotos18.jpg","img/collectionphotos19.jpg","img/collectionphotos20.jpg",
        "img/collectionphotos21.jpg","img/collectionphotos22.jpg","img/collectionphotos23.jpg",
        "img/collectionphotos24.jpg","img/collectionphotos25.jpg","img/collectionphotos27.jpg",
        "img/collectionphotos28.jpg","img/collectionphotos29.jpg"
      ]
    },
    {
      id: 12,
      title: "Wiki Book",
      year: 2025,
      medium: "Graphic Design",
      img: [
        "img/wiki12.jpg","img/wiki2.jpg","img/wiki3.jpg","img/wiki4.jpg","img/wiki5.jpg",
        "img/wiki6.jpg","img/wiki7.jpg","img/wiki8.jpg","img/wiki9.jpg","img/wiki10.jpg",
        "img/wiki11.jpg"
      ]
    },
    {
      id: 11,
      title: "Item In Hand",
      year: 2025,
      medium: "Graphic Design",
      img: ["img/iteminhand.jpg"]
    },
    {
      id: 10,
      title: "Park Benches",
      year: 2024,
      medium: "Photography",
      img: ["img/bench2.jpg","img/bench3.jpg","img/bench4.jpg","img/bench6.jpg",
            "img/bench7.jpg","img/bench8.jpg","img/bench9.jpg","img/bench11.jpg",
            "img/bench12.jpg"]
    },
    {
      id: 1,
      title: "De Stijl",
      year: 2023,
      medium: "Typographic print in color on copy paper.",
      img: ["img/vilmos1.jpg","img/vilmos2.jpg","img/vilmos3.jpg"]
    },
    {
      id: 3,
      title: "Gardening Book",
      year: 2025,
      medium: "Illustrations and found text in a 3.25 x 4.5 inch saddle stitch book.",
      img: [
        "img/gardeningbook14.jpg","img/gardeningbook15.jpg","img/gardeningbook16.jpg",
        "img/gardeningbook17.jpg","img/gardeningbook18.jpg","img/gardeningbook19.jpg",
        "img/gardeningbook20.jpg","img/gardeningbook21.jpg","img/gardeningbook22.jpg",
        "img/gardeningbook23.jpg","img/gardeningbook24.jpg","img/gardeningbook25.jpg",
        "img/gardeningbook26.jpg","img/gardeningbook27.jpg"
      ]
    },
    {
      id: 4,
      title: "San Francisco",
      year: 2025,
      medium: "Photography. San Francisco Bay",
      img: ["img/homeshoot1.jpg","img/homeshoot2.jpg","img/homeshoot3.jpg",
            "img/homeshoot4.jpg","img/homeshoot5.jpg"]
    }
  ];

  // ----------------------
  // RENDER GRID
  // ----------------------
  photo.forEach(item => {
    const workItem = document.createElement("div");
    workItem.classList.add("work-item");

    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");
    slideshowContainer.style.position = "relative"; // stack media

    // create all media elements
    const mediaElements = item.img.map(src => createMediaElement(src, item.title));
    let currentIndex = 0;

    // append all but hide them except the first
    mediaElements.forEach((el, i) => {
      el.style.position = "absolute";
      el.style.top = 0;
      el.style.left = 0;
      el.style.width = "100%";
      el.style.height = "100%";
      el.style.objectFit = "cover";
      el.style.transition = "opacity 0.5s ease";
      el.style.opacity = i === 0 ? 1 : 0;
      slideshowContainer.appendChild(el);
    });

    // function to show next media
    function showNext() {
      const current = mediaElements[currentIndex];
      currentIndex = (currentIndex + 1) % mediaElements.length;
      const next = mediaElements[currentIndex];

      current.style.opacity = 0;
      next.style.opacity = 1;

      if (next.tagName === "VIDEO") {
        next.currentTime = 0;
        next.play();
        next.onended = showNext;
      } else {
        setTimeout(showNext, 3000); // display images 3 seconds
      }
    }

    // start slideshow
    if (mediaElements[0].tagName === "VIDEO") {
      mediaElements[0].play();
      mediaElements[0].onended = showNext;
    } else {
      setTimeout(showNext, 3000);
    }

    workItem.appendChild(slideshowContainer);

    const titleEl = document.createElement("div");
    titleEl.classList.add("work-title");
    titleEl.textContent = item.title;

    const yearEl = document.createElement("div");
    yearEl.classList.add("work-year");
    yearEl.textContent = item.year;

    const mediumEl = document.createElement("div");
    mediumEl.classList.add("work-medium");
    mediumEl.textContent = item.medium;

    workItem.appendChild(titleEl);
    workItem.appendChild(yearEl);
    workItem.appendChild(mediumEl);

    workContainer.appendChild(workItem);

    // OPEN MODAL ON CLICK
    workItem.addEventListener("click", () => openModal(item));
  });

  // ----------------------
  // MODAL FUNCTIONS
  // ----------------------
  function openModal(item) {
    modalBody.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = item.title;

    const info = document.createElement("p");
    info.textContent = `${item.year} — ${item.medium}`;

    modalBody.appendChild(title);
    modalBody.appendChild(info);

    item.img.forEach(src => {
      const media = createMediaElement(src, item.title);
      media.style.height = "auto";
      modalBody.appendChild(media);
    });

    modal.style.display = "block";
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});