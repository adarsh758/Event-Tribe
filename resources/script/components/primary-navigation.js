const navElement = document.getElementById('primary-navigation');

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
 *
 * @param {boolean} isVisible - Whether the navigation is visible (true) or hidden (false)
 */
function updateNavigationVisibility(isVisible) {
  navElement.setAttribute('data-nav-visibility', isVisible);
  navElement.classList.toggle('header__nav--active');
}

/**
 * Toggles the navigation menu's visibility state and updates related attributes.
 *
 * Enables or disables page scroll by modifying `body`'s `overflow-y` style
 */
function toggleNavigation() {
  const navVisibility = navElement.getAttribute('data-nav-visibility');

  if (navVisibility === 'true') {
    setAriaExpandedOnMenuButtons(false);
    updateNavigationVisibility(false);
    document.body.style.removeProperty('overflow-y');
  } else {
    setAriaExpandedOnMenuButtons(true);
    updateNavigationVisibility(true);
    document.body.style.overflowY = 'hidden';
  }
}

/**
 * Handles clicks outside the navigation menu and closes it if open.
 * @param {MouseEvent} event - The click event
 */
function outsideClickHandler(event) {
  const isMenuBtn = event.target.closest('.header__menu-btn');
  const isInsideNav = event.target.closest('.header__nav');

  if (isMenuBtn || isInsideNav) return;

  const isVisible = navElement.getAttribute('data-nav-visibility') === 'true';
  if (isVisible) {
    toggleNavigation();
  }
}

export { toggleNavigation, outsideClickHandler };
