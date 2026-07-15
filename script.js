document.addEventListener("DOMContentLoaded", () => {

  const workContainer = document.getElementById("work-container");

// ======================
// MEDIA CREATION
// ======================
function createMediaElement(src, title) {

  if (src.toLowerCase().endsWith(".mp4")) {

    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;
    video.preload = "metadata";

    return video;

  } else {

    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.loading = "lazy";
    img.decoding = "async";

    return img;
  }
}

  // ======================
  // GRID RENDER
  // ======================
  function renderGrid(filter = "illustration") {

    workContainer.innerHTML = "";

    const filtered = window.photoData.filter(item => {
      return item.category === filter;
    });

    // ======================
    // CLIENTS VIEW
    // ======================
    if (filter === "clients") {

      workContainer.classList.add("clients-grid");

      filtered.forEach(item => {

        const clientRow = document.createElement("div");
clientRow.classList.add("client-row");

if (item.title === "Quentin Bacon") {
  clientRow.classList.add("quentin");
}

if (item.title === "BUTTERGIRL") {
  clientRow.classList.add("buttergirl");
}

        clientRow.innerHTML = `
          <div class="client-title">${item.title}</div>
        `;

        clientRow.addEventListener("click", () => {
          window.location.href = `work.html?id=${item.id}`;
        });

        workContainer.appendChild(clientRow);

      });

      return;
    }

    // ======================
    // NORMAL GRID VIEW
    // ======================
    workContainer.classList.remove("clients-grid");

    filtered.forEach(item => {

      const workItem = document.createElement("div");
      workItem.classList.add("work-item");

      const preview = createMediaElement(item.img[0], item.title);

      const titleEl = document.createElement("div");
      titleEl.textContent = item.title;

      const yearEl = document.createElement("div");
      yearEl.textContent = item.year;

      const mediumEl = document.createElement("div");
      mediumEl.textContent = item.medium;

      workItem.appendChild(preview);
      workItem.appendChild(titleEl);
      workItem.appendChild(yearEl);
      workItem.appendChild(mediumEl);

      workItem.addEventListener("click", () => {
        window.location.href = `work.html?id=${item.id}`;
      });

      workContainer.appendChild(workItem);

    });
  }

  // ======================
  // FILTERS
  // ======================
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const filterSelect = document.querySelector(".filter-select");
  
  // Desktop buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
  
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
  
      if (filterSelect) {
        filterSelect.value = btn.dataset.filter;
      }
  
      renderGrid(btn.dataset.filter);
    });
  });
  
  // Mobile dropdown
  if (filterSelect) {
    filterSelect.addEventListener("change", () => {
  
      renderGrid(filterSelect.value);
  
      filterButtons.forEach(btn => {
        btn.classList.toggle(
          "active",
          btn.dataset.filter === filterSelect.value
        );
      });
  
    });
  }
  if (filterSelect) {
    filterSelect.value = "illustration";
  }

  // ======================
  // INIT
  // ======================
  renderGrid();

});