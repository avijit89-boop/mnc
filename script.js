// fade in up
document.addEventListener('DOMContentLoaded', function () {
  function handleScrollAnimation() {
      // Select all sections with the class 'fade-in-up'
      const fadeElements = document.querySelectorAll('.fade-in-up');

      fadeElements.forEach(function (element) {
          const position = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          // Add 'visible' class if the element is within the viewport
          if (position < windowHeight - 50) {
              element.classList.add('visible');
          }
      });
  }

  // Run on scroll and page load
  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // Trigger the animation for elements in view on load
});

// end of fade in up


// JavaScript code to display the image on click with a close button
document.addEventListener('DOMContentLoaded', function() {
  const aboutImages = document.querySelectorAll('.about-image img');
  const lightbox = document.createElement('div');
  const lightboxImg = document.createElement('img');
  const closeButton = document.createElement('button');

  // Style the lightbox
  lightbox.style.display = 'none';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.zIndex = '1000';

  // Style the image
  lightboxImg.style.maxWidth = '90%';
  lightboxImg.style.maxHeight = '90%';
  lightbox.appendChild(lightboxImg);

  // Style the close button
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '20px';
  closeButton.style.right = '20px';
  closeButton.style.backgroundColor = 'transparent';
  closeButton.style.color = '#fff';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.cursor = 'pointer';
  lightbox.appendChild(closeButton);

  document.body.appendChild(lightbox);

  aboutImages.forEach(image => {
    image.addEventListener('click', function() {
      lightboxImg.src = this.src; // Set the lightbox image source to the clicked image
      lightbox.style.display = 'flex'; // Show the lightbox
    });
  });

  // Close the lightbox on button click
  closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none'; // Hide the lightbox
  });

  // Close the lightbox on clicking the lightbox background
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none'; // Hide the lightbox if the background is clicked
    }
  });
});
// animation place for room section
document.addEventListener('DOMContentLoaded', function () {
  const rooms = document.querySelectorAll('.room');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.8; // When 80% of the viewport height is reached

    rooms.forEach(room => {
      const boxTop = room.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        room.classList.add('visible'); // Add the visible class to trigger animation
      } else {
        room.classList.remove('visible'); // Optional: Remove class when not in view
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check to see if any are already in view
});
//about section js
document.addEventListener('scroll', function () {
  const aboutTexts = document.querySelectorAll('.about-text');
  const aboutImages = document.querySelectorAll('.about-image');

  const windowHeight = window.innerHeight;

  // Check if each about text is in the viewport
  aboutTexts.forEach(text => {
      const textTop = text.getBoundingClientRect().top;
      if (textTop < windowHeight * 0.8) {
          text.classList.add('visible');
      }
  });

  // Check if each about image is in the viewport
  aboutImages.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      if (imageTop < windowHeight * 0.8) {
          image.classList.add('visible');
      }
  });
});
//Memory section java script
// JavaScript to add fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.memory-box img'); // Select all memory box images
  const modal = document.createElement('div'); // Create a modal div
  const modalContent = document.createElement('div'); // Modal content div
  const modalImage = document.createElement('img'); // Modal image element
  const closeBtn = document.createElement('span'); // Close button

  // Setup modal structure and styling
  modal.classList.add('modal');
  modalContent.classList.add('modal-content');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;'; // Close button text

  modalContent.appendChild(modalImage); // Add image to modal content
  modalContent.appendChild(closeBtn); // Add close button to modal content
  modal.appendChild(modalContent); // Add modal content to modal
  document.body.appendChild(modal); // Add modal to the body of the document

  // CSS for the modal, you can also include this in your CSS file
  const style = document.createElement('style');
  style.innerHTML = `
    .modal {
      display: none; /* Hidden by default */
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      position: relative;
      max-width: 80%;
      max-height: 80%;
      padding: 20px;
    }
    .modal-content img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 30px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    .close-btn:hover {
      color: red;
    }
  `;
  document.head.appendChild(style);

  // Click event to open the modal
  images.forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.src; // Set clicked image source in modal
      modal.style.display = 'flex'; // Show the modal
    });
  });

  // Click event to close the modal when clicking the close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
  });

  // Also close modal if user clicks outside the modal image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'; // Hide modal
    }
  });
});
