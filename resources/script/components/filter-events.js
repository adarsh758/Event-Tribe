import eventsData from '../vendor/event-data.js';
import { showLoading, hideLoading } from './loading.js';
import renderEvents from './render-events.js';

/**
 * Update active class on filter tags
 * @param {HTMLElement} target - The clicked filter tag element
 */
const updateActiveFilterTag = (target) => {
  const filterTagElements = document.querySelectorAll('.tag-filter__item');
  filterTagElements.forEach((tag) => {
    tag.classList.remove('tag-filter__item--active');
  });
  target.classList.add('tag-filter__item--active');
};

/**
 * Get filtered events by category
 * @param {string} category - The category to filter by (e.g. "all", "sports", "music")
 * @returns {Array<Object>} - A list of filtered event objects
 */
const getFilteredEvents = (category) => {
  let currentEvents = [];

  if (category === 'all') {
    currentEvents = [...eventsData];
    return currentEvents;
  }

  currentEvents = eventsData.filter((event) => event.category === category);
  return currentEvents;
};

// Render Filterd Events after delay (current delay = 0.5sec)
const renderFilteredEvents = (category) => {
  setTimeout(() => {
    const currentEvents = getFilteredEvents(category);
    renderEvents(currentEvents);
    hideLoading();
  }, 500);
};

/**
 * Filter events by category
 * @param {string} category - The category name
 * @param {HTMLElement} target - The clicked filter tag element
 */
const filterByCategory = (category, target) => {
  updateActiveFilterTag(target);
  showLoading();
  renderFilteredEvents(category);
};

export default filterByCategory;
