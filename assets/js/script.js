document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const banner = document.getElementById('banner');
  const mainDivs = document.querySelectorAll('div.main-div:not(#banner):not(#content):not(footer)');
  let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

  // Scroll to section on navigation link click
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const sectionId = this.getAttribute('href');
          const section = document.querySelector(sectionId);

          window.scrollTo({
              behavior: 'smooth',
              top: section.offsetTop - header.offsetHeight
          });
      });
  });

  // Scroll event listener for animating sections
  window.addEventListener('scroll', function() {
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
      const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';
      prevScrollPos = currentScrollPos;

      mainDivs.forEach(mainDiv => {
          const divTop = mainDiv.offsetTop;
          const divHeight = mainDiv.clientHeight;
          const windowHeight = window.innerHeight;

          if (scrollDirection === 'down' && currentScrollPos > divTop - windowHeight + (divHeight / 2)) {
              mainDiv.classList.add('visible', 'animate', 'stay');
          }
      });

      // Adjust header position and visibility
      if (scrollDirection === 'down') {
          header.style.top = `-${header.offsetHeight}px`;
          navbarToggle.classList.remove('active');
      } else {
          header.style.top = '0';
      }

      // Change header background when it goes past the banner section
      const bannerBottom = banner.offsetTop + banner.offsetHeight;
      if (currentScrollPos > bannerBottom) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  // Toggle visibility of navbar
  navbarToggle.addEventListener('click', () => {
      navbarToggle.classList.toggle('active');
      sidebar.classList.toggle('active');
  });

  // Adjust header position on window resize
  window.addEventListener('resize', function () {
      banner.style.marginTop = `-${header.offsetHeight}px`;
  });

  // Adjust scroll position after page load
  window.addEventListener('load', function () {
      banner.style.marginTop = `-${header.offsetHeight}px`;
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPos > banner.offsetTop) {
          header.classList.add('sticky');
      }
  });
});
