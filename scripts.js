//const name = document.getElementById('name').focus();
const sr1List = document.querySelectorAll('.sr1-wrapper');
const sr2List = document.querySelectorAll('.sr2-wrapper');

// Navbar Transform

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    document.getElementById("logo").setAttribute("src", "images/daedalusIconSmall.png");
    document.getElementById("navMenu").style.flexDirection = "row";
    document.getElementById("navMenu").style.height = "40px";

  } else {
    
    document.getElementById("logo").setAttribute("src", "images/block-version-rev-b-darkbg.png");
    document.getElementById("navMenu").style.flexDirection = "column";
  }
}

// Services Slider

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => { 

        if (entry.isIntersecting && entry.target.classList.contains('sr1-wrapper')) {
            entry.target.classList.add('slideFromLeft');
            return;
        } else if (entry.isIntersecting && entry.target.classList.contains('sr2-wrapper')) {
            entry.target.classList.add('slideFromRight');
            return;
        } 


        entry.target.classList.remove('slideFromLeft');
        entry.target.classList.remove('slideFromRight');

    })

});


sr1List.forEach(el => {
    observer.observe(el);
});
sr2List.forEach(el => {
    observer.observe(el);
});






