const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(preferers-reducer-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);
    });
}