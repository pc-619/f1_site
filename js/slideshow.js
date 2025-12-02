const slideshow = document.getElementById("slideshow");
const slideshowImgs = document.getElementsByClassName("slideshowImgs");

for (let i = 0; i < slideshowImgs.length; i++) {
    if (!slideshowImgs[i].classList.contains("ssCurrent")){
        slideshowImgs[i].setAttribute("style", "display: none");
    }
}

function ssLeft() {
    for (let i = 0; i < slideshowImgs.length; i++) {
        if (slideshowImgs[i].classList.contains("ssCurrent")) {
            slideshowImgs[i].classList.remove("ssCurrent");
            slideshowImgs[i].setAttribute("style", "animation: 0.5s fadeOut");
            setTimeout(function () {
                slideshowImgs[i].setAttribute("style", "display: none");
                const prevIndex = (i - 1 + slideshowImgs.length) % slideshowImgs.length;
                slideshowImgs[prevIndex].classList.add("ssCurrent");
                slideshowImgs[prevIndex].setAttribute("style", "display: block");
                slideshowImgs[prevIndex].setAttribute("style", "animation: 0.5s fadeIn");
            }, 510);
            break;
        }
    }
}

function ssRight() {

    for (let i = 0; i < slideshowImgs.length; i++) {
        if (slideshowImgs[i].classList.contains("ssCurrent")) {
            slideshowImgs[i].classList.remove("ssCurrent");
            slideshowImgs[i].setAttribute("style", "animation: 0.5s fadeOut forwards");
            setTimeout(function () {
                slideshowImgs[i].setAttribute("style", "display: none");
                const nextIndex = (i + 1) % slideshowImgs.length;
                slideshowImgs[nextIndex].classList.add("ssCurrent");
                slideshowImgs[nextIndex].setAttribute("style", "display: block");
                slideshowImgs[nextIndex].setAttribute("style", "animation: 0.5s fadeIn");
            }, 510);

            break;
        }
    }
}

let isHovering = false;
var autoRight = setInterval(function () {
    ssRight();
}, 1000);
slideshow.addEventListener("mouseover", () => {
    isHovering = true;
    clearInterval(autoRight);
})

slideshow.addEventListener("mouseout", () => {
    isHovering = false;
    autoRight = setInterval(function () {
        ssRight();
    }, 1000);
})
