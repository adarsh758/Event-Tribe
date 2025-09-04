import eventsData from "./vendor/event-data.js";
import { renderEvents, showEventDetails } from "./components/render-events.js";
import { initializeHoverEffects, scrollToEvents, showCreateEvent } from "./components/interactions.js";
import searchEvents from "./components/search-events.js";
import filterByCategory from "./components/filter-events.js";
import initializeHeader from "./components/header.js";

let currentEvents = [...eventsData];

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  initializeHeader();
});

document.addEventListener("DOMContentLoaded", function () {
  renderEvents(currentEvents);
});

const FILTER_TAGS_ELEMENT = document.querySelectorAll(".filter-tags");

FILTER_TAGS_ELEMENT.forEach((element) => {
  element.addEventListener("click", () => {
    filterByCategory('all');
  });
});

document.querySelector('.hero-buttons .btn-primary').addEventListener("click", scrollToEvents);

document.querySelector('.hero-buttons .btn-secondary').addEventListener("click", showCreateEvent);

document.querySelector('.search-form').addEventListener('submit', searchEvents);




document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('.event-card').addEventListener('click', (event)=> {
        showEventDetails(event.id);
    })
})

initializeHoverEffects();
