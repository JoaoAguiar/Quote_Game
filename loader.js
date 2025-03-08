/**
 * Quote Game - Loader Module
 * Manages the loading animation and transition to game content
 */

/**
 * Wait for the DOM to be fully loaded before showing the game content
 * @param {function} callback - Function to call when DOM is ready
 */
function onReady(callback) {
  if (document.readyState === "complete" || 
      (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    // Document already fully loaded
    setTimeout(function() {
      callback();
    }, 1000); // Slight delay to ensure all assets are loaded
  } else {
    // Set up event listener for when DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
        callback();
      }, 1000);
    });
    
    // Fallback - check periodically in case the event listener fails
    let checkReadyState = setInterval(function() {
      if (document.readyState === "complete") {
        clearInterval(checkReadyState);
        setTimeout(function() {
          callback();
        }, 1000);
      }
    }, 100);
  }
}

/**
 * Change visibility of an element
 * @param {string} selector - CSS selector for the target element
 * @param {boolean} visible - Whether the element should be visible
 * @returns {boolean} - Success status of the operation
 */
function setVisible(selector, visible) {
  try {
    const element = document.querySelector(selector);
    if (!element) {
      console.error(`Element not found: ${selector}`);
      return false;
    }
    
    element.style.display = visible ? 'block' : 'none';
    return true;
  } catch (error) {
    console.error(`Error changing visibility for ${selector}:`, error);
    return false;
  }
}

/**
 * Handle page transitions after loading
 */
function handlePageTransition() {
  // Hide loading animation and show game content
  const contentVisible = setVisible('.page', true);
  const loaderHidden = setVisible('.wrapper', false);
  
  // Add animation class to game content
  if (contentVisible) {
    const pageElement = document.querySelector('.page');
    if (pageElement) {
      pageElement.style.animation = 'fadeIn 1s ease-in forwards';
    }
  }
  
  // Log any issues with the transition
  if (!contentVisible || !loaderHidden) {
    console.warn('Page transition may not have completed correctly');
  }
}

// Initialize the loader when the script loads
onReady(handlePageTransition);

// Add fade-in animation if not already present in CSS
if (!document.getElementById('loader-animations')) {
  const style = document.createElement('style');
  style.id = 'loader-animations';
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}