// ngambil link di html
const linkya = document.querySelector(".link");
const iconn = document.querySelector(".img");

// fungsi untuk toggle di menu humberger
const menu = (document.querySelector("#humberger").onclick = () => {
  linkya.classList.toggle("active");
});

// ngambil menu humberger di html
const humberger = document.querySelector("#humberger");

// fungsi event link hamberger
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !linkya.contains(e.target)) {
    linkya.classList.remove("active");
  }
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
