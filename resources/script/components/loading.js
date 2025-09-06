const lodingElement = document.getElementById('loading');
const eventGridElement = document.getElementById('events-grid');

/**
 * Show the loading indicator and reduce the event grid opacity.
 */
function showLoading() {
  lodingElement.style.display = 'block';
  eventGridElement.style.opacity = '0.3';
}

/**
 * Hide the loading indicator and restore the event grid opacity.
 */
function hideLoading() {
  lodingElement.style.display = 'none';
  eventGridElement.style.opacity = '1';
}

export { showLoading, hideLoading };
