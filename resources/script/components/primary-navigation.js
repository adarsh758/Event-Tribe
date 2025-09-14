/**
 * Updates the `aria-expanded` attribute on all menu toggle buttons
 * @param {boolean} isExpanded - Whether the menu is expanded (true) or collapsed (false)
 */
function setAriaExpandedOnMenuButtons(isExpanded) {
  const menuBtnElements = document.querySelectorAll('.header__menu-btn');

  menuBtnElements.forEach((element) => {
    element.setAttribute('aria-expanded', isExpanded);
  });
}

/**
 * Sets the `data-nav-visibility` attribute and toggles the active class on the navigation element
 * @param {HTMLElement} navElement - The navigation element to update
 * @param {boolean} isVisible - Whether the navigation is visible (true) or hidden (false)
 */
function updateNavigationVisibility(element, isVisible) {
  element.setAttribute('data-nav-visibility', isVisible);
  element.classList.toggle('header__nav--active');
}

/**
 * Toggles the navigation menu's visibility state and updates related attributes.
 * 
 * Enables or disables page scroll by modifying `body`'s `overflow-y` style
 */
const toggleNavigation = () => {
  const navElement = document.getElementById('primary-navigation');
  const navVisibility = navElement.getAttribute('data-nav-visibility');

  if (navVisibility === 'true') {
    setAriaExpandedOnMenuButtons(false);
    updateNavigationVisibility(navElement, false);
    document.body.style.removeProperty('overflow-y');
  } else {
    setAriaExpandedOnMenuButtons(true);
    updateNavigationVisibility(navElement, true);
    document.body.style.overflowY = 'hidden';
  }
};

export default toggleNavigation;
