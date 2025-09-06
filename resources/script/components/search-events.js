import eventsData from '../vendor/event-data.js';
import { hideLoading, showLoading } from './loading.js';
import renderEvents from './render-events.js';

const SEARCH_DELAY = 800;

/**
 * Get input value by element ID (lowercased)
 * @param {string} id - The ID of the input element
 * @returns {string} - The lowercased input value
 */
const getInputValue = (id) => {
  const element = document.getElementById(id);

  // Safely get value (returns "" if element is missing or empty)
  const value = element?.value.toLowerCase() || '';
  return value;
};

/**
 * Get filtered events based on search input and location
 * @returns {Array<Object>} - A list of filtered event objects
 */
const getEventsBySearchInput = () => {
  const searchInput = getInputValue('searchInput');
  const location = getInputValue('locationSelect');

  return eventsData.filter((event) => {
    const matchesSearch =
      !searchInput ||
      event.title.toLowerCase().includes(searchInput) ||
      event.description.toLowerCase().includes(searchInput) ||
      event.category.toLowerCase().includes(searchInput);

    const matchesLocation = !location || event.city.toLowerCase() === location;

    return matchesSearch && matchesLocation;
  });
};

/**
 * Handles search form submission
 * @param {Event} event - The form submission event
 */
function searchEvents(event) {
  event.preventDefault();
  showLoading();

  setTimeout(() => {
    const currentEvents = getEventsBySearchInput();
    renderEvents(currentEvents);
    hideLoading();
  }, SEARCH_DELAY);
}

export default searchEvents;
