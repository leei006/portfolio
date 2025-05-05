function transformScroll(event) {
    if (!event.deltaY) return;
  
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  
  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', transformScroll);
  
  // Wait until the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const gif = document.getElementById("groove");
    const overlay = document.getElementById("groove-overlay");
  
    if (gif && overlay) {
      gif.addEventListener("click", () => {
        overlay.classList.add("active");
      });
  
      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
      });
    }
  });