const musicBackground = document.getElementById("musicBackground");
const audioIcon = document.querySelector(".audio-icon");
let isPlaying = false;

// Enable scrolling
function enabledScroll() {
  document.body.style.overflowY = "auto";
  musicBackground.play();
  isPlaying = true;
  audioIcon.style.display = "block";
}

jQuery(document).ready(function () {
  jQuery(".sliders").slick({
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
});

// Audio
function toggleAudio() {
  if (isPlaying) {
    musicBackground.pause();
    audioIcon.classList.add("off");
  } else {
    musicBackground.play();
    audioIcon.classList.remove("off");
  }

  isPlaying = !isPlaying;
}

// Get guest name
function getGuestName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Show guest name
function showGuestName() {
  var parameterValue = getGuestName("untuk");
  var hasilElement = document.getElementById("untuk");
  if (parameterValue !== null) {
    hasilElement.textContent = parameterValue;
  } else {
    hasilElement.textContent = "-";
  }
}
window.onload = showGuestName;

// countdown
simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 4, // required
  day: 11, // required
  hours: 9, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "Hari", plural: "Hari" },
    hours: { singular: "Jam", plural: "Jam" },
    minutes: { singular: "Menit", plural: "Menit" },
    seconds: { singular: "Detik", plural: "Detik" },
  },
});
