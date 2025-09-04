// Scroll to events section
function scrollToEvents() {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}

// Show create event (placeholder)
function showCreateEvent() {
  alert(
    "Create Event feature coming soon! 🚀\n\nThis will allow you to create and manage your own events."
  );
}

// Add some interactive hover effects
const initializeHoverEffects = () => {
  document.addEventListener("mousemove", function (e) {
    const cards = document.querySelectorAll(".event-card, .preview-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      } else {
        card.style.transform = "";
      }
    });
  });
};

export {
    scrollToEvents,
    showCreateEvent,
    initializeHoverEffects
}