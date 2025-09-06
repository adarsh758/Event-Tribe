import showEventDetails from './show-event-details.js';

/**
 * Create a single event card element
 * @param {Object} event - Event data
 * @returns {HTMLElement} - Event card DOM element
 */
function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.addEventListener('click', () => showEventDetails(event.id));

  // Image
  const imageDiv = document.createElement('div');
  imageDiv.className = 'event-image';

  // Content container
  const contentDiv = document.createElement('div');
  contentDiv.className = 'event-content';

  // Date
  const dateDiv = document.createElement('div');
  dateDiv.className = 'event-date';
  dateDiv.textContent = event.date;

  // Title
  const title = document.createElement('h3');
  title.className = 'event-title';
  title.textContent = event.title;

  // Location
  const locationDiv = document.createElement('div');
  locationDiv.className = 'event-location';
  locationDiv.textContent = `📍 ${event.location}`;

  // Description
  const description = document.createElement('p');
  description.className = 'event-description';
  description.textContent = event.description;

  // Footer
  const footerDiv = document.createElement('div');
  footerDiv.className = 'event-footer';

  const priceDiv = document.createElement('div');
  priceDiv.className = 'event-price';
  priceDiv.textContent = event.price;

  const attendeesDiv = document.createElement('div');
  attendeesDiv.className = 'event-attendees';
  attendeesDiv.textContent = `👥 ${event.attendees.toLocaleString()} attending`;

  // Avatars (static placeholders for now)
  const avatarsDiv = document.createElement('div');
  avatarsDiv.className = 'attendee-avatars';
  for (let i = 0; i < 3; i += 1) {
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatarsDiv.appendChild(avatar);
  }
  attendeesDiv.appendChild(avatarsDiv);

  // Build card
  footerDiv.append(priceDiv, attendeesDiv);
  contentDiv.append(dateDiv, title, locationDiv, description, footerDiv);
  card.append(imageDiv, contentDiv);

  return card;
}

/**
 * Render events into the grid
 * @param {Array<Object>} events - List of event objects
 */
function renderEvents(events) {
  const eventsGrid = document.getElementById('events-grid');
  eventsGrid.innerHTML = ''; // clear grid first

  if (events.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.style.gridColumn = '1 / -1';
    emptyDiv.style.textAlign = 'center';
    emptyDiv.style.padding = '3rem';
    emptyDiv.style.color = 'var(--text-muted)';

    const title = document.createElement('h3');
    title.textContent = 'No events found';

    const msg = document.createElement('p');
    msg.textContent = 'Try adjusting your search criteria or explore different categories.';

    emptyDiv.append(title, msg);
    eventsGrid.appendChild(emptyDiv);
    return;
  }

  // Render all events
  events.forEach((event) => {
    const card = createEventCard(event);
    eventsGrid.appendChild(card);
  });
}

export default renderEvents;
