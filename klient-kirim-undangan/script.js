//
// let LinkUndangan = document.getElementById("Link-undangan").value;

function tampilkanLinkUndangan() {
  let linkUndangan = document.getElementById("link").value;
  let namaTamu = document.getElementById("nama-tamu").value;
  let namaMempelai = document.getElementById("nama-mempelai").value;

  const template = `Yth ${namaTamu}

Tanpa mengurangi rasa hormat,
Karena keterbatasan jarak dan waktu,
kami bermaksud mengundang Bapak/Ibu/Saudara/i
dalam acara Pernikahan yang akan diselenggarakan, pada :

Klik link undangan berikut:
${linkUndangan}/?untuk=${namaTamu}

Suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i dan teman-teman dapat hadir pada acara pernikahan kami dan memberikan doa restu.🙏

Kami yang berbahagia,

${namaMempelai}

Terima kasih.`;

  document.getElementById("link-undangan").value = template;
}

function salinTextUndangan() {
  const teks = document.getElementById("link-undangan").value;

  navigator.clipboard
    .writeText(teks)
    .then(() => {
      alert("Teks berhasil disalin ke clipboard!");
    })
    .catch((err) => {
      alert("Gagal menyalin teks: " + err);
    });
}
