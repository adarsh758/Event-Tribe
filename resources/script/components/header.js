// Change Header Background color and add border botoom in it
const changeHeaderStyle = (bgColor, borderColor) => {
  const headerElement = document.querySelector('.header');

  headerElement.style.background = bgColor;
  headerElement.style.borderBottom = `1px solid ${borderColor}`;
};

/**
 * Header scroll effect
 * Change header color when scroll
 */
const initializeHeader = () => {
  if (window.scrollY > 100) {
    // Add solid background + colored border on header when scrolled
    changeHeaderStyle('rgba(var(--border-color), 0.95)', 'rgba(99, 102, 241, 0.3)');
  }

  // Otherwise keep semi-transparent background on header
  changeHeaderStyle('rgba(var(--card-bg), 0.7)', 'var(--border-color)');
};

export default initializeHeader;
