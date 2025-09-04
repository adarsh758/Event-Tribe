import { showLoading, hideLoading } from "./loading.js";

// Filter by category
function filterByCategory(category) {
  // Update active filter tag
  document.querySelectorAll(".filter-tag").forEach((tag) => {
    tag.classList.remove("active");
  });
  event.target.classList.add("active");

  showLoading();

  setTimeout(() => {
    if (category === "all") {
      currentEvents = [...eventsData];
    } else {
      currentEvents = eventsData.filter((event) => event.category === category);
    }
    renderEvents(currentEvents);
    hideLoading();
  }, 500);
}

export default filterByCategory;