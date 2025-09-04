
// Show loading
function showLoading() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("eventsGrid").style.opacity = "0.3";
}

// Hide loading
function hideLoading() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("eventsGrid").style.opacity = "1";
}

export {showLoading, hideLoading}