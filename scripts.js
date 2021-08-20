const name = document.getElementById('name').focus();
const numSteps = 20.0;

let servicesElement;
let prevRatio = 0.0;

window.addEventListener("load", (event) => {
    servicesElement = document.querySelector('#servicesSection');

    createObserver();
} )

function createObserver() {
    let observer;
    

    let options = {
        root: document.querySelector(null),
        rootMargin: "0px",
        threshold: [0.2, 0.3]
        //threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(servicesElement);
}

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
            entry.target.style.opacity = entry.intersectionRatio;
        } 

        prevRatio = entry.intersectionRatio;
    });
    
}
