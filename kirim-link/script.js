//
// let LinkUndangan = document.getElementById("Link-undangan").value;

function tampilkanLinkUndangan() {
  function tampilanUndangan() {
    let linkUndangan = document.getElementById("link").value;
    let namaMempelai = document.getElementById("nama-mempelai").value;
    // let RSVP = document.getElementById("RSVP").value;

    const template = `Yth Nama Tamu

Tanpa mengurangi rasa hormat,
Karena keterbatasan jarak dan waktu,
kami bermaksud mengundang Bapak/Ibu/Saudara/i
dalam acara Pernikahan yang akan diselenggarakan, pada :

Klik link undangan berikut:
${linkUndangan}

Suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i dan teman-teman dapat hadir pada acara pernikahan kami dan memberikan doa restu.🙏

Kami yang berbahagia,

${namaMempelai}

Terima kasih.`;

    document.getElementById("link-undangan").value = template;
  }

  function tampilanTutor() {
    let linkUndangan = document.getElementById("link").value;
    // let RSVP = document.getElementById("RSVP").value;

    const template = `Cara Menulis Nama Tamu di Undangan Web:

${linkUndangan}/?to=namatamu

Untuk penulisan namatamu tinggal ganti link paling belakang kak,, seperti ini kak
${linkUndangan}/?to=ben

Untuk spasi pakai tanda +
${linkUndangan}/?to=nama+tamu

Untuk & pakai %26 kak
${linkUndangan}/?to=nama+%26+tamu

Selamat mencoba kak 😊😘🙏
Kalo tidak isi tinggal dihapus aja  link belakangnya kak☺`;

    document.getElementById("link-tutor").value = template;
  }

  function tampilkanRsvp() {
    let RSVP = document.getElementById("RSVP").value;

    const template = `Hi kak, dibawah ini link untuk mengecek tamu yang melakukan RSVP, jadi kk bisa memperkirakan jumlah tamu yang akan hadir. Selamat Mencoba kk! ${RSVP}`;

    document.getElementById("link-rsvp").value = template;
  }

  tampilanUndangan();
  tampilanTutor();
  tampilkanRsvp();
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

function salinTextTuror() {
  const texsTutor = document.getElementById("link-tutor").value;

  navigator.clipboard
    .writeText(texsTutor)
    .then(() => {
      alert("Teks berhasil disalin ke clipboard!");
    })
    .catch((err) => {
      alert("Gagal menyalin teks: " + err);
    });
}

function salinTextRsvp() {
  const texsRsvp = document.getElementById("link-tutor").value;

  navigator.clipboard
    .writeText(texsRsvp)
    .then(() => {
      alert("Teks berhasil disalin ke clipboard!");
    })
    .catch((err) => {
      alert("Gagal menyalin teks: " + err);
    });
}
// function linkUndangan() {}
