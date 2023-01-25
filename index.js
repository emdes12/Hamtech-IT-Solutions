const menuIcon = document.querySelector(".mobile-menu-icon");
const mobMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
  mobMenu.classList.toggle("hidd");
  setTimeout(function () {
    mobMenu.classList.toggle("active");
  }, 500);
});

// collaspe services
const collaspeHead = document.getElementsByClassName("service-heading");

for (i = 0; i < collaspeHead.length; i++) {
  collaspeHead[i].addEventListener("click", collaspeFunc);
}

// fuction to collapse and expand service
function collaspeFunc() {
  console.log("clicked");
  this.parentElement.classList.toggle("show");
}

// countdown animation
