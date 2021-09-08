const serviceCards = document.querySelectorAll('.service-option');
const buttons = document.querySelectorAll(".btn");
const fadeInFromLeftElements = document.querySelectorAll(".left-fade");
const fadeInFromRightElements = document.querySelectorAll(".right-fade");


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

const fadeInFromLeftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInFromLeft');
      return;
    }
    entry.target.classList.remove('fadeInFromLeft');
    entry.target.style.opacity = '0';
  }
  )
});

const fadeInFromRightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInFromRight');
      return;
    }
    entry.target.classList.remove('fadeInFromRight');
    entry.target.style.opacity = '0';
  }
  )
});

AddAnimationDurations(serviceCards, 0.2);

serviceCards.forEach(el => {
  fadeInAndUpObserver.observe(el);
});

buttons.forEach(el => {
  popUpObserver.observe(el);
});

fadeInFromLeftElements.forEach(el => {
  fadeInFromLeftObserver.observe(el);
});

fadeInFromRightElements.forEach(el => {
  fadeInFromRightObserver.observe(el);
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
