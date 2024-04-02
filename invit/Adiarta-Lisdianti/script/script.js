// Global variables
var isPlaying = false;
var isFirstLoaded = true;

// Run all the function when first loaded
jQuery(document).ready(function () {
  scrollTopOnFirstLoaded();
  runTextAnimation();
  autoplaySlider();
  enableScroll();
  toggleAudio();
  runCountDown();
  showGuestName();
  submitFormToGoogleSheet();
  getGoogleSheet();
});

// Get google sheet data
function getGoogleSheet() {
  // Make an AJAX request to fetch data from AWS Lambda
  var scriptUrl = "https://yzoope2yp2uhjv4ongn2xhc6ny0nibdo.lambda-url.us-east-1.on.aws/";

  jQuery.getJSON(scriptUrl, function (result) {
    console.log("Ucapan: ", result.data);

    jQuery("#list-ucapan-items").empty();

    jQuery.each(result.data, function (index, item) {
      var listItem = jQuery("<li>");
      var nameSpan = jQuery("<span id='nama'>").text(item.nama);
      var tglSpan = jQuery("<span id='tanggal'>").text(" - " + formatDateToIndonesian(item.tanggal));
      var messagePara = jQuery("<p id='pesan'>").text(item.ucapan);

      listItem.append(nameSpan);
      listItem.append(tglSpan);
      listItem.append(messagePara);

      jQuery("#list-ucapan-items").append(listItem);
    });
  });
}

// Scroll top on first loaded
function scrollTopOnFirstLoaded() {
  if (isFirstLoaded) {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery(".halaman-utama").offset().top,
      },
      0
    );
  }
}

// Autolay slider
function autoplaySlider() {
  jQuery(".sliders").slick({
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });
}

// Enable scroll functionality
function enableScroll() {
  jQuery("#enable-scroll").on("click", function (e) {
    e.preventDefault();
    jQuery("body").css("overflow-y", "auto");
    jQuery("#musicBackground")[0].play();
    isPlaying = true;
    jQuery(".audio-icon").css("display", "block");

    jQuery("html, body").animate(
      {
        scrollTop: $("#invitation").offset().top,
      },
      1000
    );

    isFirstLoaded = false;
  });
}

// Toggle Audio functionality
function toggleAudio() {
  jQuery("#toggle-audio").on("click", function () {
    if (isPlaying) {
      jQuery("#musicBackground")[0].pause();
      jQuery(".audio-icon").addClass("off");
    } else {
      jQuery("#musicBackground")[0].play();
      jQuery(".audio-icon").removeClass("off");
    }

    isPlaying = !isPlaying;
  });
}

// countdown
function runCountDown() {
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
}

// Get guest name
function getGuestName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^#]*)|&|#|$)"),
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

// Run text animation
function runTextAnimation() {
  AOS.init();
}

// Submit form to google sheet functionality
function submitFormToGoogleSheet() {
  jQuery("#form-guest").submit(function (e) {
    e.preventDefault();
    var formData = new FormData(jQuery(this)[0]);
    var action = jQuery(this).attr("action");
    jQuery("#submit-button").text("Sedang Mengirim....");
    jQuery.ajax({
      url: action,
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function () {
        jQuery("#submit-button").text("Kirim Ucapan");
        alert("Terimakasih, konfirmasi kehadiran Anda sudah terkirim :)");
        jQuery("input[name=nama]").val("");
        jQuery("textarea[name=ucapan]").val("");
        getGoogleSheet();
      },
    });
  });
}

function formatDateToIndonesian(dateString) {
  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);

  var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return day + " " + months[month - 1] + " " + year;
}
