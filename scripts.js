const serviceCards = document.querySelectorAll('.service-option');
const headers = document.querySelectorAll("h2");


// Observers

const fadeInAndUpObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInAndUp');
      return;
    }
    entry.target.classList.remove('fadeInAndUp');
    entry.target.style.opacity = '0';
  }
  )
});

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
      return;
    }
    entry.target.classList.remove('fadeIn');
    entry.target.style.opacity = '0';
  }
  )
});

const popUpObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('popUp');
      return;
    }
    entry.target.classList.remove('popUp');
    entry.target.style.opacity = '0';
  }
  )
});

AddAnimationDurations(serviceCards, 0.2);

serviceCards.forEach(el => {
  fadeInAndUpObserver.observe(el);
});

headers.forEach(el => {
  popUpObserver.observe(el);
});

// Helper Functions

function AddAnimationDurations(elementsArray, increaseAmount) {
  // Adds incrementing animation durations so that elements will appear to cascade 
  let counter = 0.0;
  elementsArray.forEach(el => {
    el.style.animationDuration = counter.toString() + 's';
    counter += increaseAmount;
  });
}
