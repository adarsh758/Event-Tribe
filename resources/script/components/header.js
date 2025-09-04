// Header scroll effect
function initializeHeader() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(15, 23, 42, 0.95)";
      header.style.borderBottom = "1px solid rgba(99, 102, 241, 0.3)";
    } else {
      header.style.background = "rgba(30, 41, 59, 0.7)";
      header.style.borderBottom = "1px solid #334155";
    }
  });
}

export default initializeHeader;
