// Render events
function renderEvents(events) {
  const eventsGrid = document.getElementById("eventsGrid");

  if (events.length === 0) {
    eventsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                        <h3>No events found</h3>
                        <p>Try adjusting your search criteria or explore different categories.</p>
                    </div>
                `;
    return;
  }

  eventsGrid.innerHTML = events
    .map(
      (event) => `
                <div class="event-card" onclick="showEventDetails(${event.id})">
                    <div class="event-image"></div>
                    <div class="event-content">
                        <div class="event-date">${event.date}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-location">
                            📍 ${event.location}
                        </div>
                        <p class="event-description">${event.description}</p>
                        <div class="event-footer">
                            <div class="event-price">${event.price}</div>
                            <div class="event-attendees">
                                👥 ${event.attendees.toLocaleString()} attending
                                <div class="attendee-avatars">
                                    <div class="avatar"></div>
                                    <div class="avatar"></div>
                                    <div class="avatar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
}

// Show event details (placeholder)
function showEventDetails(eventId) {
  const event = eventsData.find((e) => e.id === eventId);
  alert(
    `Event Details:\n\n${event.title}\n${event.date}\n${event.location}\n\n${event.description}\n\nPrice: ${event.price}\nAttendees: ${event.attendees}`
  );
}

export { renderEvents, showEventDetails };
