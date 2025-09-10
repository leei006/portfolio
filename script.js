const photo = [
  {
    "id": 10,
    "title": "Park Benches",
    "year": 2024,
    "medium": "Photography",
    "img":["img/bench2.jpg", "img/bench3.jpg", "img/bench4.jpg", "img/bench6.jpg", "img/bench7.jpg", "img/bench8.jpg", "img/bench9.jpg", "img/bench11.jpg", "img/bench12.jpg",]
},
    {
        "id": 1,
        "title": "De Stijl",
        "year": 2023,
        "medium": "Typographic print in color on copy paper.",
        "img":["img/destijl3.jpg", "img/destijl1.jpg", "img/destijl2.jpg"]
    },
    {
      "id": 7,
      "title": "Groove",
      "year": 2024,
      "medium": "Typeface Design. Inspired by shapes defining the 1960's.",
      "img":["img/groove1.png"]
  },
    {
       "id": 2,
       "title": "Dining Shed Collection",
       "year": 2024,
       "medium": "City collection of pandemic dining sheds.",
       "img": [ "img/collectionphotos1.jpg",
       "img/collectionphotos2.jpg",
       "img/collectionphotos3.jpg",
       "img/collectionphotos4.jpg",
       "img/collectionphotos5.jpg",
       "img/collectionphotos6.jpg",
       "img/collectionphotos7.jpg",
       "img/collectionphotos8.jpg",
       "img/collectionphotos9.jpg",
       "img/collectionphotos10.jpg",
       "img/collectionphotos11.jpg",
       "img/collectionphotos12.jpg",
       "img/collectionphotos13.jpg",
       "img/collectionphotos14.jpg",
       "img/collectionphotos15.jpg",
       "img/collectionphotos16.jpg",
       "img/collectionphotos17.jpg",
       "img/collectionphotos18.jpg",
       "img/collectionphotos19.jpg",
       "img/collectionphotos20.jpg",
       "img/collectionphotos21.jpg",
       "img/collectionphotos22.jpg",
       "img/collectionphotos23.jpg",
       "img/collectionphotos24.jpg",
       "img/collectionphotos25.jpg",
       "img/collectionphotos26.jpg",
       "img/collectionphotos27.jpg",
       "img/collectionphotos28.jpg",
       "img/collectionphotos29.jpg"]
    },
    {
        "id": 3,
        "title": "Gardening Book",
        "year": 2025,
        "medium": "Illustrations and found text in a 3.25 x 4.5 inch saddle stitch book.",
        "img":["img/gardeningbook8.jpg",
        "img/gardeningbook9.jpg",
        "img/gardeningbook10.jpg",
        "img/gardeningbook11.jpg",
        "img/gardeningbook12.jpg",
        "img/gardeningbook13.jpg",
        "img/gardeningbook14.jpg",
        "img/gardeningbook15.jpg",
        "img/gardeningbook16.jpg",
        "img/gardeningbook17.jpg",
        "img/gardeningbook18.jpg",
        "img/gardeningbook19.jpg",
        "img/gardeningbook20.jpg",
        "img/gardeningbook21.jpg",
        "img/gardeningbook22.jpg",
        "img/gardeningbook23.jpg",
        "img/gardeningbook24.jpg",
        "img/gardeningbook25.jpg",
        "img/gardeningbook26.jpg",
        "img/gardeningbook27.jpg"]
    },
    
    {
        "id": 4,
        "title": "San Francisco",
        "year": 2025,
        "medium": "Photography. San Francisco Bay",
        "img": ["img/homeshoot1.jpg", "img/homeshoot2.jpg", "img/homeshoot3.jpg","img/homeshoot4.jpg","img/homeshoot5.jpg"]
    },
    {
        "id": 5,
        "title": "Dining Shed Book",
        "year": 2024,
        "medium": "Perfect bound color printed book documenting pandemic dining sheds.",
        "img":["img/diningshed1.jpg",
        "img/diningshed2.jpg",
        "img/diningshed3.jpg",
        "img/diningshed4.jpg",
        "img/diningshed5.jpg",
        "img/diningshed6.jpg",
        "img/diningshed7.jpg",
        "img/diningshed8.jpg",
        "img/diningshed9.jpg",
        "img/diningshed10.jpg",
        "img/diningshed11.jpg",
        "img/diningshed12.jpg",
        "img/diningshed13.jpg",
        "img/diningshed14.jpg",
        "img/diningshed15.jpg",
        "img/diningshed16.jpg",
        "img/diningshed17.jpg",
        "img/diningshed18.jpg",
        "img/diningshed19.jpg",
        "img/diningshed20.jpg",
        "img/diningshed21.jpg",
        "img/diningshed22.jpg",
        "img/diningshed23.jpg",
        "img/diningshed24.jpg",
        "img/diningshed25.jpg",
        "img/diningshed26.jpg"]
    },
    {
        "id": 6,
        "title": "Vegetable",
        "year": 2025,
        "medium": "Photography. La Plaza, New York",
        "img": ["img/6.jpg", "img/7.jpg"]
    },

    {
      "id": 8,
        "title": "Illustrator Graphics",
        "year": 2025,
        "medium": "Visualizing food through digital forms.",
        "img": ["img/friedchicken.jpeg"]
    },
    {
        "id": 9,
        "title": "Food",
        "year": 2024,
        "medium": "Photography. Food styling.",
        "img": ["img/1.jpg", "img/4.jpg"]
    },
]

// work function
const workContainer = document.getElementById("work-container");

photo.forEach((item, index) => {
  // Insert an <hr> separator before every item except the first
  if (index !== 0) {
    const hr = document.createElement("hr");
    hr.classList.add("work-separator");
    workContainer.appendChild(hr);
  }

  const workItem = document.createElement("div");
  workItem.classList.add("work-item");

  // Image wrapper
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("work-image");

  const slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");

  const imgElement = document.createElement("img");
  imgElement.src = item.img[0];
  imgElement.alt = item.title;
  slideshowContainer.appendChild(imgElement);

  // If multiple images: add slideshow logic
  if (item.img.length > 1) {
    let currentIndex = 0;

    const leftZone = document.createElement("div");
    leftZone.classList.add("slideshow-left");

    const rightZone = document.createElement("div");
    rightZone.classList.add("slideshow-right");

    leftZone.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + item.img.length) % item.img.length;
      imgElement.src = item.img[currentIndex];
    });

    rightZone.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % item.img.length;
      imgElement.src = item.img[currentIndex];
    });

    slideshowContainer.appendChild(leftZone);
    slideshowContainer.appendChild(rightZone);
  }

  imageWrapper.appendChild(slideshowContainer);

  // Info section
    const info = document.createElement("div");
    info.classList.add("work-info");
  
    const title = document.createElement("div");
    title.classList.add("work-title");
    title.textContent = item.title;
  
    const year = document.createElement("div");
    year.classList.add("work-year");
    year.textContent = item.year;
  
    const medium = document.createElement("div");
    medium.classList.add("work-medium");
    medium.textContent = item.medium;
  
    info.appendChild(year);
    info.appendChild(title);
    info.appendChild(medium);
  

  
  // Combine and insert
  workItem.appendChild(imageWrapper);
  workItem.appendChild(info);
  workContainer.appendChild(workItem);
});

