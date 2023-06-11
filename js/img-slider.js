// An array of image URLs
const images = [
'Images/gallery/img (10).jpg',
'Images/gallery/img (2).jpg',
'Images/gallery/img (3).jpg',
'Images/gallery/img (4).jpg',
'Images/gallery/img (5).jpg',
'Images/gallery/img (6).jpg',
'Images/gallery/img (7).jpg',
'Images/gallery/img (8).jpg',
'Images/gallery/img (9).jpg',
'Images/gallery/img (1).jpg',
'Images/gallery/img (11).jpg',
'Images/gallery/img (12).jpg',
'Images/gallery/img (13).jpg',
'Images/gallery/img (14).jpg',
'Images/gallery/img (15).jpg',
// Add more image URLs here
];

let currentIndex = 0; // Index of the currently displayed image

// Function to open the popup and display the selected image
function openPopup(src) {
  const popup = document.querySelector('.popup');
  const popupImage = document.querySelector('.popup-image');
  popupImage.src = src;
  popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}

// Function to create image elements
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = 'Gallery Image';
  image.addEventListener('click', function() {
    openPopup(src);
  });

  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.appendChild(image);
}

// Add images dynamically
images.forEach(function(image) {
  createImage(image);
});

// Close the popup when the close button is clicked
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closePopup);

// Function to navigate to the previous image
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  displayImageAtIndex(currentIndex);
}

// Function to navigate to the next image
function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  }
  displayImageAtIndex(currentIndex);
}

// Function to display the image at the given index
function displayImageAtIndex(index) {
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(function(image, i) {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

// Add event listeners to the previous and next buttons
const prevButton = document.querySelector('.prev-button');
prevButton.addEventListener('click', prevImage);

const nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', nextImage);