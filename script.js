document.addEventListener("DOMContentLoaded", () => {

  const workContainer = document.getElementById("work-container");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  // ----------------------
  // MEDIA CREATION
  // ----------------------
  function createMediaElement(src, title) {
    if (src.toLowerCase().endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      return video;
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = title;
      return img;
    }
  }

  // ----------------------
  // DATA (YOUR FULL ARRAY + CATEGORY)
  // ----------------------
  const photo = [
    {
      id: 28,
      title: "What's With the Two-Button Rule?",
      year: 2026,
      medium: "Doodle series.",
      category: "illustration",
      img: [
        "video/buttonanimation.MP4"
      ]
    },
    {
      id: 23,
      title: "Rhubarb Season",
      year: 2026,
      medium: "Illustration.",
      category: "illustration",
      img: ["img/rhubarb.png"]
    },
    {
      id: 22,
      title: "Condiment Fridge",
      year: 2026,
      medium: "Illustration.",
      category: "illustration",
      img: ["img/foodgraphics1.png","img/foodgraphics2.jpg"]
    },
    {
      id: 16,
      title: "The Kitchen Witch",
      year: 2025,
      medium: "Doodle series.",
      category: "illustration",
      img: [
        "video/kitchenwitch5.mp4","video/kitchenwitch1.mp4",
        "video/kitchenwitch2.mp4"
      ]
    },
  
    {
      id: 26,
      title: "The Kitchen Witch",
      year: 2025,
      medium: "Doodle series.",
      category: "illustration",
      img: [
        "video/kitchenwitch4.mp4"
      ]
    },
    {
      id: 27,
      title: "The Kitchen Witch",
      year: 2025,
      medium: "Doodle series.",
      category: "illustration",
      img: [
        "video/kitchenwitch3.mp4"
      ]
    },
    {
      id: 12,
      title: "Wiki Book",
      year: 2025,
      medium: "Graphic Design",
      category: "design",
      img: [
        "img/wiki12.jpg","img/wiki2.jpg","img/wiki3.jpg","img/wiki4.jpg","img/wiki5.jpg",
        "img/wiki6.jpg","img/wiki7.jpg","img/wiki8.jpg","img/wiki9.jpg","img/wiki10.jpg",
        "img/wiki11.jpg"
      ]
    },
    {
      id: 15,
      title: "Groove",
      year: 2025,
      medium: "Typeface Design.",
      category: "design",
      img: [
        "img/groove.jpg","img/groove2.JPG","img/groove3.jpg","img/groove4.jpg",
        "img/groove5.jpg","img/groove6.jpg","img/groove7.jpg","img/groove8.jpg",
        "img/groove9.jpg","img/groove10.jpg","img/groove11.jpg"
      ]
    },
    {
      id: 21,
      title: "French Onion Soup",
      year: 2026,
      medium: "Illustration series.",
      category: "illustration",
      img: [
        "img/frenchonionsoup.jpg","img/frenchonionsoup2.jpg","img/frenchonionsoup3.jpg",
        "img/frenchonionsoup4.jpg","img/frenchonionsoup5.jpg","img/frenchonionsoup6.jpg",
        "img/frenchonionsoup7.jpg","img/frenchonionsoup8.jpg"
      ]
    },
    {
      id: 2,
      title: "Dining Shed Collection",
      year: 2024,
      medium: "Photography",
      category: "photo",
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
      id: 11,
      title: "Item In Hand",
      year: 2025,
      medium: "Graphic Design",
      category: "design",
      img: ["img/iteminhand.jpg"]
    },
    {
      id: 17,
      title: "Dog Days",
      year: 2025,
      medium: "Doodle series",
      category: "illustration",
      img: ["img/dogcarecampaign.jpg"]
    },
    {
      id: 10,
      title: "Park Benches",
      year: 2024,
      medium: "Photography",
      category: "photo",
      img: [
        "img/bench2.jpg","img/bench3.jpg","img/bench4.jpg",
        "img/bench6.jpg","img/bench7.jpg","img/bench8.jpg",
        "img/bench9.jpg","img/bench11.jpg","img/bench12.jpg"
      ]
    },
    {
      id: 1,
      title: "De Stijl",
      year: 2023,
      medium: "Typographic print",
      category: "design",
      img: ["img/vilmos1.jpg","img/vilmos2.jpg","img/vilmos3.jpg"]
    },
    {
      id: 18,
      title: "Leek",
      year: 2026,
      medium: "Illustrator Graphic.",
      category: "illustration",
      img: ["img/leek.jpg"]
    },
    {
      id: 24,
      title: "Chocolate Cake",
      year: 2025,
      medium: "Food styling + Photography",
      category: "photo",
      img: ["img/cake1.jpg",]
    },
    {
      id: 25,
      title: "Pulao",
      year: 2025,
      medium: "Food styling + Photography",
      category: "photo",
      img: ["img/rice1.jpg",]
    },
    {
      id: 19,
      title: "A Space to Remember",
      year: 2026,
      medium: "Book Design. Photography.",
      category: "design",
      img: [
        "img/thesis2.jpg","img/thesis4.jpg","img/thesis1.jpg","img/thesis3.jpg",
        "img/thesis5.jpg","img/thesis6.jpg","img/thesis7.jpg","img/thesis8.jpg",
        "img/thesis9.jpg","img/thesis10.jpg","img/thesis11.jpg","img/thesis12.jpg",
        "img/thesis13.jpg","img/thesis14.jpg","img/thesis15.jpg","img/thesis16.jpg",
        "img/thesis17.jpg","img/thesi18.jpg","img/thesis19.jpg","img/thesis20.jpg",
        "img/thesis21.jpg","img/thesis22.jpg"
      ]
    }
  ];


  // ----------------------
  // RENDER
  // ----------------------
  function renderGrid(filter = "all") {
    workContainer.innerHTML = "";

    const filtered = photo.filter(item => {
      if (filter === "all") return true;
      return item.category === filter;
    });

    filtered.forEach(item => {

      const workItem = document.createElement("div");
      workItem.classList.add("work-item");

      const previewMedia = createMediaElement(item.img[0], item.title);
      previewMedia.classList.add("preview");
      workItem.appendChild(previewMedia);

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

      workItem.addEventListener("click", () => openModal(item));
    });
  }

  // ----------------------
  // FILTER BUTTONS
  // ----------------------
  const filterButtons = document.querySelectorAll(".filter-bar button");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      renderGrid(filter);
    });
  });

  // ----------------------
  // MODAL
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

  // INITIAL LOAD
  renderGrid();

});