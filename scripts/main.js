//tools slider

let activeWidth = document.querySelector(".tools__list-item-active")
  .offsetWidth;
let activeLeft = document.querySelector(".tools__list-item-active").offsetLeft;
document.querySelector(".tools-slider").style.width = activeWidth + "px";
document.querySelector(".tools-slider").style.left = activeLeft + "px";
let toolsList = document.querySelectorAll(".tools__list > li");
console.log(toolsList);
for (let i = 0; i < toolsList.length; i++) {
  toolsList[i].addEventListener("mouseover", function(e) {
    let val = e.target.closest("li").offsetLeft;
    let width = e.target.closest("li").offsetWidth;
    document.getElementsByClassName("tools-slider")[0].style.left = val + "px";
    document.getElementsByClassName("tools-slider")[0].style.width =
      width + "px";
  });
  toolsList[i].addEventListener("mouseout", function(e) {
    document.querySelector(".tools-slider").style.left = activeLeft + "px";
    document.querySelector(".tools-slider").style.width = activeWidth + "px";
  });
}

//features script

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let fList = document.querySelector(".features__list");
next.addEventListener("click", function() {
  fList.style.marginLeft = -300 + "px";
});

prev.addEventListener("click", function() {
  fList.style.marginLeft = 0 + "px";
});

//menu button

let menu = document.querySelector("#menu");
let headerNav = document.querySelector(".header_nav");
menu.addEventListener("click", function() {
  if (menu.innerHTML == "Close") {
    menu.innerHTML = "Menu";
  } else {
    menu.innerHTML = "Close";
  }
  document.querySelector("html").classList.toggle("scrollOff");
  headerNav.classList.toggle("headerShow");
});

//menu click function

let headerNavBtn = document.querySelectorAll(".header_nav > nav >  a");

for (let i = 0; i < headerNavBtn.length; i++) {
  headerNavBtn[i].addEventListener("click", function() {
    document.querySelector("html").classList.remove("scrollOff");
    headerNav.classList.remove("headerShow");
  });
}
