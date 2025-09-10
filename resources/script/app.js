// Imports
import eventsData from './vendor/event-data.js';
import initializeHeader from './components/header.js';
import filterByCategory from './components/filter-events.js';
import { applyHoverEffect, scrollToEvents, showCreateEvent } from './components/interactions.js';
import searchEvents from './components/search-events.js';
import renderEvents from './components/render-events.js';

// DOM Elements
const filterTagElements = document.querySelectorAll('.tag-filter');
const exploreEventBtnElement = document.getElementById('explore-event-btn');
const createEventBtnElement = document.getElementById('create-event-btn');
const searchFormElement = document.querySelector('.search__form');

// Copy of all events
const currentEvents = [...eventsData];

/**
 * Attach click event listeners to filter tags
 */
const initializeFilterTags = () => {
  filterTagElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      const { category } = event.target.dataset;
      filterByCategory(category, event.target);
    });
  });
};

// Initialize app
const initializeApp = () => {
  document.addEventListener('scroll', initializeHeader);
  renderEvents(currentEvents);
  initializeFilterTags();
  document.addEventListener('mousemove', applyHoverEffect);
  exploreEventBtnElement.addEventListener('click', scrollToEvents);
  createEventBtnElement.addEventListener('click', showCreateEvent);
  searchFormElement.addEventListener('submit', searchEvents);
};

document.addEventListener('DOMContentLoaded', initializeApp);
