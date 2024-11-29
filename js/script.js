// ngambil link di html
const humberger = document.querySelector("#humberger");
const linkya = document.querySelector(".link");
const iconn = document.querySelector(".img");
const categoryTanpaPhoto = document.getElementById("category-tanpa-foto");
const categoryIsiPhoto = document.getElementById("category-isi-foto");
const productIsiPhoto = document.querySelector(".include-foto");
const productTanpaPhoto = document.querySelector(".non-include-foto");

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

productIsiPhoto.style.display = "inline-block";
productTanpaPhoto.style.display = "none";
categoryIsiPhoto.style.backgroundColor = "#00cff3";
categoryTanpaPhoto.style.backgroundColor = "white";

categoryIsiPhoto.onclick = () => {
  productIsiPhoto.style.display = "inline-block";
  productTanpaPhoto.style.display = "none";
  categoryIsiPhoto.style.backgroundColor = "#00cff3";
  categoryTanpaPhoto.style.backgroundColor = "white";
  // console.log("")
};
categoryTanpaPhoto.onclick = () => {
  productTanpaPhoto.style.display = "block";
  productIsiPhoto.style.display = "none";
  categoryIsiPhoto.style.backgroundColor = "white";
  categoryTanpaPhoto.style.backgroundColor = "#00cff3";
  // console.log("")
};

// productTanpaPhoto.onclick = () => {
//   console.log("test");
//   // categoryTanpaPhoto.style.backgroundColor = "blue";
//   // productTanpaPhoto.style.display = "block";
//   // categoryIsiPhoto.style.display = "none";
//   // categoryIsiPhoto.style.backgroundColor = "transparant";

//   // console.log("")
// };

// accordion
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
