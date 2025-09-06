/** 
 * Scroll smoothly to the "events" section 
 */
const scrollToEvents = () => {
  document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
};

/**
 *  Show "Create Event" placeholder alert 
*/
const showCreateEvent = () => {
  alert(
    'Create Event feature coming soon! 🚀\n\nThis will allow you to create and manage your own events.'
  );
};

/**
 * Apply hover tilt effect to cards 
*/
const applyHoverEffect = (event) => {
  const cards = document.querySelectorAll('.event-card, .preview-card');

  cards.forEach((card) => {
    const cardElement = card;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      cardElement.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(1.02)
      `;
    }
    // Reset transform only when mouse is outside the card
    cardElement.style.transform = '';
  });
};

export { scrollToEvents, showCreateEvent, applyHoverEffect };
