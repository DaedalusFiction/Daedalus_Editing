const name = document.getElementById('name').focus();

window.addEventListener("load", (slide) => {
    servicesElement = document.querySelector('#servicesItem');
    firstElement = document.querySelector("#firstOption");
    createObserver();
} )

function createObserver() {
    let observer;
    

    let options = {
        root: document.querySelector(null),
        rootMargin: "0px",
        threshold: 0.2
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(servicesElement);
}

function handleIntersect(entries, observer) {
    //firstElement.classList.add("sr1");
    alert("hi");

}
