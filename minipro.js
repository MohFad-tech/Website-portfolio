const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
});

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

function toggleStickyHeader() {
  if (window.pageYOffset > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.addEventListener('scroll', toggleStickyHeader);

const projectsContainer = document.querySelector('#projects');
const projectSlides = projectsContainer.querySelectorAll('.project');
let currentSlideIndex = 0;

function showSlide(slideIndex) {
  projectSlides.forEach((slide) => {
    slide.style.display = 'none';
  });

  projectSlides[slideIndex].style.display = 'block';
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % projectSlides.length;
  showSlide(currentSlideIndex);
}

function previousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + projectSlides.length) % projectSlides.length;
  showSlide(currentSlideIndex);
}

const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');

previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);
