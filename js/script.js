// ngambil link di html
const humberger = document.querySelector("#humberger");
const linkya = document.querySelector(".link");
const iconn = document.querySelector(".img");
const categoryIsiPhoto = document.getElementById("btnIncludeFoto");
const categoryTanpaPhoto = document.getElementById("btnTanpaFoto");

// fungsi untuk toggle di menu humberger
const menu = (document.querySelector("#humberger").onclick = () => {
  linkya.classList.toggle("active");
});

// fungsi event link hamberger
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !linkya.contains(e.target)) {
    linkya.classList.remove("active");
  }
});

categoryIsiPhoto.style.backgroundColor = "#00cff3";
categoryTanpaPhoto.style.backgroundColor = "white";

categoryIsiPhoto.onclick = () => {
  categoryIsiPhoto.style.backgroundColor = "#00cff3";
  categoryTanpaPhoto.style.backgroundColor = "white";
};

categoryTanpaPhoto.onclick = () => {
  categoryIsiPhoto.style.backgroundColor = "white";
  categoryTanpaPhoto.style.backgroundColor = "#00cff3";
};
