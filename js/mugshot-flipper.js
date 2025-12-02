// slideshow.addEventListener("mouseover", () => {
//     isHovering = true;
//     clearInterval(autoRight);
// })

// slideshow.addEventListener("mouseout", () => {
//     isHovering = false;
//     autoRight = setInterval(function () {
//         ssRight();
//     }, 1000);
// })

function startSpin(obj) {
    obj.classList.add("infiniRotate");
}

function endSpin(obj) {
    obj.classList.remove("infiniRotate");
}



// const header = document.getElementById("header");
// console.log(header);
// console.log(header.style.opacity);
// window.addEventListener("scroll", function () {
//     if (window.scrollY > 0) {
//         header.classList.remove("headerFadeIn");
//         header.classList.add("headerFadeOut");
//     }
//     else if (window.scrollY == 0) {
//         header.classList.remove("headerFadeOut");
//         header.classList.add("headerFadeIn");
//     }
// });
