// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  
 

  function refreshAfterScrollWithDelay(delay) {
    scrollToTop();
    setTimeout(function() {
      location.reload();
    }, delay);
  }
  
  // Call the refreshAfterScrollWithDelay function with a delay of 2000 milliseconds (2 seconds)
  refreshAfterScrollWithDelay(2000);

  // Function to clear cache and refresh the page
function clearCacheAndRefresh() {
  if (caches) {
    // Clear the cache
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name);
      }
    });
  }

  // Refresh the page
  location.reload();
}

// Call the clearCacheAndRefresh function when needed
clearCacheAndRefresh();