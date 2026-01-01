 const audio = document.getElementById("global-audio");

  // volume optional
  audio.volume = 0.6;

  // check if user already allowed audio
  const audioAllowed = localStorage.getItem("audioAllowed");

  if (audioAllowed === "true") {
    audio.play().catch(() => {});
  }

  function startAudioOnce() {
    audio.play().then(() => {
      localStorage.setItem("audioAllowed", "true");
    }).catch(() => {});

    document.removeEventListener("click", startAudioOnce);
  }

  // first user interaction
  document.addEventListener("click", startAudioOnce);
  
const pages = [
  "neon-loader.html",    // Page 0
  "fireworks.html",      // Page 1
  "happy-new-year.html"  // Page 2
];

let current = 0;
let isTransitioning = false;

const viewer = document.getElementById("viewer");
const clickLayer = document.getElementById("click-layer");
const splash = document.getElementById("white-splash");

// Initialize - always start from first page on refresh
function init() {
  current = 0;
  viewer.src = pages[current];
  updateUI();
  
  // Set initial state
  window.history.replaceState({ page: 0 }, '', window.location.pathname);
}

// Update UI based on current page
function updateUI() {
  console.log(`Current page: ${current + 1}/${pages.length} - ${pages[current]}`);
  
  if (current === pages.length - 1) {
    // Last page - disable click layer
    clickLayer.style.pointerEvents = "none";
  } else {
    // Not last page - enable click layer
    clickLayer.style.pointerEvents = "auto";
  }
}

// Navigate to a specific page with animation
function navigateToPage(pageIndex, skipAnimation = false) {
  if (isTransitioning || pageIndex === current || pageIndex < 0 || pageIndex >= pages.length) {
    return;
  }
  
  if (skipAnimation) {
    // Direct navigation without animation (for back/forward)
    current = pageIndex;
    viewer.src = pages[current];
    updateUI();
    return;
  }
  
  isTransitioning = true;
  
  // Start splash
  splash.classList.add("active");
  
  // Switch page mid-animation
  setTimeout(() => {
    current = pageIndex;
    viewer.src = pages[current];
  }, 700);
  
  // Reset splash
  setTimeout(() => {
    splash.classList.remove("active");
    updateUI();
    isTransitioning = false;
  }, 1500);
}

// Click handler - go to next page (forward)
clickLayer.addEventListener("click", () => {
  if (current + 1 < pages.length && !isTransitioning) {
    const nextPage = current + 1;
    
    // Add to browser history
    window.history.pushState({ page: nextPage }, '', `?page=${nextPage}`);
    
    // Navigate with animation
    navigateToPage(nextPage);
  }
});

// Handle browser back/forward buttons
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.page !== undefined) {
    const targetPage = event.state.page;
    
    // Check if going back or forward
    if (targetPage < current) {
      console.log(`Going back: Page ${current + 1} → Page ${targetPage + 1}`);
    } else if (targetPage > current) {
      console.log(`Going forward: Page ${current + 1} → Page ${targetPage + 1}`);
    }
    
    // Navigate to the target page with animation
    navigateToPage(targetPage);
  } else {
    // No state - go back to first page
    navigateToPage(0);
  }
});

// Initialize on load - always starts from page 1
init();
// ```

