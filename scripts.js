const serviceCards = document.querySelectorAll('.service-option');
const headers = document.querySelectorAll("h2");

// onload fade-in animation
//const heroText = document.getElementById('heroText').style.opacity = '1'; 




const fadeInAndUpObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInAndUp');
      return;
    }
    entry.target.classList.remove('fadeInAndUp');
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
  }
  )
});



function AddAnimationDurations(elementsArray, increaseAmount) {
  // Adds incrementing animation durations so that elements will animate with increasing durations
  let counter = 0.0;
  elementsArray.forEach(el => {
    el.style.animationDuration = counter.toString() + 's';
    counter += increaseAmount;
  });
}

AddAnimationDurations(serviceCards, 0.2);

serviceCards.forEach(el => {
  fadeInAndUpObserver.observe(el);
});

headers.forEach(el => {
  fadeInObserver.observe(el);
});



//const name = document.getElementById('name').focus();
// const sr1List = document.querySelectorAll('.sr1-wrapper');
// const sr2List = document.querySelectorAll('.sr2-wrapper');


// Services Slider

// const observer = new IntersectionObserver(entries => {

  //     entries.forEach(entry => { 
    
//         if (entry.isIntersecting && entry.target.classList.contains('sr1-wrapper')) {
  //             entry.target.classList.add('slideFromLeft');
  //             return;
  //         } else if (entry.isIntersecting && entry.target.classList.contains('sr2-wrapper')) {
    //             entry.target.classList.add('slideFromRight');
    //             return;
    //         } 
    
    
    //         entry.target.classList.remove('slideFromLeft');
    //         entry.target.classList.remove('slideFromRight');
    
    //     })
    
    // });
    
    // sr1List.forEach(el => {
      //     observer.observe(el);
      // });
      // sr2List.forEach(el => {
        //     observer.observe(el);
        // });
        
        // Navbar Transform
        
        // window.onscroll = function() {scrollFunction()};
        
        // function scrollFunction() {
        //   if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        //     document.getElementById("logo").setAttribute("src", "images/daedalusIconSmall.png");
        //   } else {
        //     document.getElementById("logo").setAttribute("src", "images/block-version-rev-b-darkbg.png");
        //   }
        // }
        
        
        
        
        
        