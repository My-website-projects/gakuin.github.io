
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


