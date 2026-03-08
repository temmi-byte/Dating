
function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu.style.right === "0px"){
    menu.style.right = "-100%";
  } else {
    menu.style.right = "0px";
  }
}
