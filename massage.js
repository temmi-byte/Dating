function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu.style.right === "0px"){
    menu.style.right = "-100%";
  } else {
    menu.style.right = "0px";
  }
}

const previews = document.querySelectorAll(".preview-video");
const popup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const closeBtn = document.querySelector(".close-popup");

previews.forEach(preview => {
  preview.addEventListener("click", () => {
    const videoSrc = preview.getAttribute("data-src");
    popup.style.display = "flex";
    popupVideo.src = videoSrc;
    popupVideo.play();
  });
});

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", e => {
  if(e.target === popup) closePopup();
});

function closePopup(){
  popup.style.display = "none";
  popupVideo.pause();
  popupVideo.src = "";
}
