document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("work-page");

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const item = window.photoData.find(p => p.id === id);

  if (!item) {
    container.innerHTML = "<p style='padding:20px;'>Work not found.</p>";
    return;
  }

  let currentIndex = 0;

  // ======================
  // BACK BUTTON
  // ======================
  const back = document.createElement("a");
  back.href = "index.html";
  back.textContent = "← Back";
  back.classList.add("work-back");
  document.body.appendChild(back);

  // ======================
  // ARROWS (only if multiple images)
  // ======================
  let leftArrow, rightArrow;

  if (item.img.length > 1) {

    leftArrow = document.createElement("div");
    leftArrow.classList.add("work-arrow", "left");
    leftArrow.innerHTML = "‹";

    rightArrow = document.createElement("div");
    rightArrow.classList.add("work-arrow", "right");
    rightArrow.innerHTML = "›";

    document.body.appendChild(leftArrow);
    document.body.appendChild(rightArrow);

    leftArrow.addEventListener("click", prev);
    rightArrow.addEventListener("click", next);
  }

  // ======================
  // SLIDE RENDER
  // ======================
  function renderSlide() {

    container.innerHTML = "";

    const wrap = document.createElement("div");
    wrap.classList.add("work-slideshow");

    const src = item.img[currentIndex];

    let media;

    if (src.toLowerCase().endsWith(".mp4")) {

      media = document.createElement("video");
      media.src = src;
      media.autoplay = true;
      media.loop = true;
      media.muted = true;
      media.playsInline = true;

    } else {

      media = document.createElement("img");
      media.src = src;
      media.alt = item.title;
      media.decoding = "async";
    }

    wrap.appendChild(media);
    container.appendChild(wrap);

    // ======================
    // CAPTION (FIXED ALEO TYPOGRAPHY)
    // ======================
    const caption = document.createElement("div");
    caption.classList.add("work-caption"); // 👈 THIS enforces Aleo via CSS

    caption.style.position = "fixed";
    caption.style.bottom = "60px";
    caption.style.left = "30px";

    caption.innerHTML = `
      <div><strong>${item.title}</strong></div>
      <div>${item.year} — ${item.medium}</div>
      ${item.description ? `<div>${item.description}</div>` : ""}
    `;

    container.appendChild(caption);
  }

  // ======================
  // NAVIGATION
  // ======================
  function next() {
    currentIndex = (currentIndex + 1) % item.img.length;
    renderSlide();
  }

  function prev() {
    currentIndex =
      (currentIndex - 1 + item.img.length) % item.img.length;
    renderSlide();
  }

  // ======================
  // KEYBOARD CONTROLS
  // ======================
  document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();

    if (e.key === "Escape") {
      window.location.href = "index.html";
    }

  });

  // ======================
  // INIT
  // ======================
  renderSlide();

});