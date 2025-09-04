// Search events
function searchEvents(event) {
  event.preventDefault();
  showLoading();

  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const location = document
    .getElementById("locationSelect")
    .value.toLowerCase();

  setTimeout(() => {
    let filteredEvents = eventsData.filter((event) => {
      const matchesSearch =
        !searchTerm ||
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.category.toLowerCase().includes(searchTerm);

      const matchesLocation = !location || event.city === location;

      return matchesSearch && matchesLocation;
    });

    currentEvents = filteredEvents;
    renderEvents(currentEvents);
    hideLoading();
  }, 800);
}

export default searchEvents;