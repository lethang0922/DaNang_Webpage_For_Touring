document.addEventListener('DOMContentLoaded', function () {
  // Add JavaScript code to handle the menu icon click event
  document.getElementById('menuIcon').addEventListener('click', function () {
      var headerRight = document.querySelector('.header-right');
      headerRight.style.display = (headerRight.style.display === 'none' || headerRight.style.display === '') ? 'flex' : 'none';
  });

  // JavaScript to hide the mobile menu on window resize for larger screens
  window.addEventListener('resize', function () {
      var headerRight = document.querySelector('.header-right');
      if (window.innerWidth > 600) {
          headerRight.style.display = 'flex';
      } else {
          headerRight.style.display = 'none';
      }
  });

  // JavaScript for the submit button alert
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', function () {
      alert('Thank you!');
  });
});