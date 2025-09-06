import eventsData from '../vendor/event-data.js';

/**
 * Show event details (placeholder)
 * @param {number} eventId - ID of the event
 */
function showEventDetails(eventId) {
  const selectedEvent = eventsData.find((event) => event.id === eventId);
  if (!selectedEvent) return;

  alert(
    `Event Details:\n\n${selectedEvent.title}\n${selectedEvent.date}\n${selectedEvent.location}\n\n${selectedEvent.description}\n\nPrice: ${selectedEvent.price}\nAttendees: ${selectedEvent.attendees}`
  );
}

export default showEventDetails;
