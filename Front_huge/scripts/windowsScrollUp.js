import { btn_up } from "./ui.js";

window.addEventListener("scroll", trackScroll);

btn_up.addEventListener("click", goTop);
function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
// console.log(scrolled);
  if (scrolled > 300) {
    btn_up.classList.add("up-show");
  } else {
    btn_up.classList.remove("up-show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -20)
    setTimeout(goTop, 0)
  }
}