const name = document.getElementById('name').focus();
const sr1List = document.querySelectorAll('.sr1-wrapper');
const sr2List = document.querySelectorAll('.sr2-wrapper');

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






// const numSteps = 20.0;

// let servicesElement;
// let prevRatio = 0.0;

// window.addEventListener("load", (event) => {
//     servicesElement = document.querySelector('#servicesSection');

//     createObserver();
// } )

// function createObserver() {
//     let observer;
    

//     let options = {
//         root: document.querySelector(null),
//         rootMargin: "0px",
//         threshold: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
//         //threshold: buildThresholdList()
//     };

//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(servicesElement);
// }

// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 20;

//     for (let i=1.0; 1<=numSteps; i++) {
//         let ratio = i/numSteps;
//         thresholds.push(ratio);
//     }

//     thresholds.push(0);
//     return thresholds;
// }

function handleIntersect(entries, observer) {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            console.log(entry.intersectionRatio);
        } 

        prevRatio = entry.intersectionRatio;
    });
    
}
