const notice = document.getElementsByClassName("notice")[0];
const noticeBtn = document.getElementById("notice-button");
const anchor    = document.getElementById("notice-anchor");
const hasSeenNotice = localStorage.getItem("hasSeenNotice");
// localStorage.clear("hasSeenNotice");
if (hasSeenNotice) {
    console.log("notice button already clicked!");
}
else {
    notice.style.display = "grid";
    anchor.addEventListener("click", function() {
        localStorage.setItem("hasSeenNotice", "true");
        // alert("button status saved");
        notice.classList.add("fadeOut");
        setTimeout(() => {
            notice.style.display = "none";
        }, 500);
    });
    noticeBtn.addEventListener("click", function() {
        localStorage.setItem("hasSeenNotice", "true");
        // alert("button status saved");
        notice.classList.add("fadeOut");
        setTimeout(() => {
            notice.style.display = "none";
        }, 500);
    });
}
