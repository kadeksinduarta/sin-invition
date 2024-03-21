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