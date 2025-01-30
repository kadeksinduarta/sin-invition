// menu
const themes = [
  {
    id: 1,
    name: "Tema 1",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-1.png",
    link: "https://s-invitation.my.id/tema-1/?untuk=Nama+Tamu",
  },
  {
    id: 2,
    name: "Tema 2",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-2.png",
    link: "https://s-invitation.my.id/tema-2/?untuk=Nama+Tamu",
  },
  {
    id: 3,
    name: "Tema 3",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-3.png",
    link: "https://s-invitation.my.id/tema-3/?untuk=Nama+Tamu",
  },
  {
    id: 4,
    name: "Tema 4",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-4.png",
    link: "https://s-invitation.my.id/tema-4/?untuk=Nama+Tamu",
  },
  {
    id: 5,
    name: "Tema 5",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-5.png",
    link: "https://s-invitation.my.id/tema-5/?untuk=Nama+Tamu",
  },
  {
    id: 6,
    name: "Tema 6",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-6.png",
    link: "https://s-invitation.my.id/tema-6/?untuk=Nama+Tamu",
  },
  {
    id: 7,
    name: "Tema 7",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-7.png",
    link: "https://s-invitation.my.id/tema-7/?untuk=Nama+Tamu",
  },
  {
    id: 8,
    name: "Tema 8",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-8.png",
    link: "https://s-invitation.my.id/tema-8/?untuk=Nama+Tamu",
  },
  {
    id: 9,
    name: "Tema 9",
    category: "Tema",
    price: 200000,
    image: "../gambar/template-9.png",
    link: "https://s-invitation.my.id/tema-9/?untuk=Nama+Tamu",
  },
  {
    id: 10,
    name: "Tema 10",
    category: "Tema",
    price: 200000,
    image: "../gambar/Tema-10.png",
    link: "https://s-invitation.my.id/tema-10/?untuk=Nama+Tamu",
  },
  {
    id: 11,
    name: "Tema 11",
    category: "Tema",
    price: 200000,
    image: "../gambar/Tema-11.png",
    link: "https://s-invitation.my.id/tema-11/?untuk=Nama+Tamu",
  },
  {
    id: 12,
    name: "Tema 12",
    category: "Tema",
    price: 200000,
    image: "../gambar/Tema-12.png",
    link: "https://s-invitation.my.id/tema-12/?untuk=Nama+Tamu",
  },
  {
    id: 13,
    name: "Monochrome",
    category: "Tema",
    price: 200000,
    image: "../gambar/monochrome.png",
    link: "https://s-invitation.my.id/monochrome/?untuk=Nama+Tamu",
  },
  {
    id: 14,
    name: "Cream Elegant",
    category: "Tema",
    price: 200000,
    image: "../gambar/Cream-Elegant.png",
    link: "https://s-invitation.my.id/cream-elegant/?untuk=Nama+Tamu",
  },
  {
    id: 15,
    name: "Elegant 1",
    category: "Elegant",
    price: 200000,
    image: "../gambar/tema-Elegant-1.png",
    link: "https://s-invitation.my.id/elegant-1/?untuk=Nama+Tamu",
  },
  {
    id: 16,
    name: "Elegant 2",
    category: "Elegant",
    price: 200000,
    image: "../gambar/tema-Elegant-2.png",
    link: "https://s-invitation.my.id/elegant-2/?untuk=Nama+Tamu",
  },
  {
    id: 17,
    name: "Elegant 3",
    category: "Elegant",
    price: 200000,
    image: "../gambar/tema-Elegant-3.png",
    link: "https://s-invitation.my.id/elegant-3/?untuk=Nama+Tamu",
  },
  {
    id: 18,
    name: "Elegant 4",
    category: "Elegant",
    price: 200000,
    image: "../gambar/tema-Elegant-4.png",
    link: "https://s-invitation.my.id/elegant-4/?untuk=Nama+Tamu",
  },
  {
    id: 19,
    name: "Elegant 5",
    category: "Elegant",
    price: 200000,
    image: "../gambar/tema-Elegant-5.png",
    link: "https://s-invitation.my.id/elegant-5/?untuk=Nama+Tamu",
  },
];

const themesTanpaFoto = [
  {
    id: 1,
    name: "Tanpa Foto Tema 1",
    category: "Tanpa Foto",
    price: 55000,
    image: "../gambar/tanpa-foto-tema-1.png",
    link: "https://s-invitation.my.id/tanpa-foto-tema-1/?untuk=nama+tamu",
  },
  {
    id: 2,
    name: "Tanpa Foto Tema 2",
    category: "Tanpa Foto",
    price: 55000,
    image: "../gambar/tanpa-foto-tema-2.png",
    link: "https://s-invitation.my.id/tanpa-foto-tema-2/?untuk=nama+tamu",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".card-demo.include-foto .paket");
  const btnTanpaFoto = document.querySelector("#btnTanpaFoto");
  const btnIncludeFoto = document.querySelector("#btnIncludeFoto");
  const btnBerurutan = document.querySelector("#btnBerurutan");
  const btnTerbaru = document.querySelector("#btnTerbaru");
  const btnElegant = document.querySelector("#temaElegant");
  btnBerurutan.style.backgroundColor = "#00cff3";
  function renderThemes(data) {
    container.innerHTML = "";
    data.forEach((theme) => {
      container.innerHTML += `
          <a href="${theme.link}" target="_blank">
            <div class="gambar">
              <img src="${theme.image}" alt="${theme.name}" />
            </div>
            <div class="deskripsi">
              <div class="contentt">
                <h2>${theme.name}</h2>
                <p>Harga</p>
                <p class="harga">Rp.${theme.price.toLocaleString()}</p>
              </div>
              <div class="button-preview">
                <h1>Lihat</h1>
              </div>
            </div>
          </a>
        `;
    });
  }
  // Event listener untuk tombol "Tanpa Foto"
  btnTanpaFoto.addEventListener("click", () => {
    renderThemes(themesTanpaFoto);
    btnBerurutan.style.display = "none";
    btnElegant.style.display = "none";
    btnTerbaru.style.display = "none";
  });

  // Event listener untuk tombol "Include Foto"
  btnIncludeFoto.addEventListener("click", () => {
    const ElegantTema = themes.filter((theme) => theme.category === "Tema");
    renderThemes(ElegantTema);
    btnBerurutan.style.display = "block";
    btnElegant.style.display = "block";
    btnTerbaru.style.display = "block";
  });

  btnBerurutan.addEventListener("click", () => {
    const BerurutanTema = themes.filter((theme) => theme.category === "Tema");
    renderThemes(BerurutanTema);
    btnBerurutan.style.backgroundColor = "#00cff3";
    btnElegant.style.backgroundColor = "#ffffff";
    btnTerbaru.style.backgroundColor = "#ffffff";
  });

  btnTerbaru.addEventListener("click", () => {
    renderThemes([...themes].reverse());
    btnElegant.style.backgroundColor = "#ffffff";
    btnBerurutan.style.backgroundColor = "#ffffff";
    btnTerbaru.style.backgroundColor = "#00cff3";
  });

  btnElegant.addEventListener("click", () => {
    btnTerbaru.style.backgroundColor = "#ffffff";
    btnBerurutan.style.backgroundColor = "#ffffff";
    btnElegant.style.backgroundColor = "#00cff3";
    const ElegantTema = themes.filter((theme) => theme.category === "Elegant");
    renderThemes(ElegantTema);
  });

  // Default tampilkan tema dengan foto
  renderThemes(themes);
});
