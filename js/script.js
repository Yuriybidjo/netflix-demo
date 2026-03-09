// tabs
document.getElementById("defaultOpen").click();

function openMovie(evt, movieName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(movieName).style.display = "block";
  evt.currentTarget.className += " active";
};

// swiper slider
let popularSlider = new Swiper('.popular-slider__content', {
  slidesPerView: 2,
  spaceBetween: 10,
  grabCursor: true,

  breakpoints: {
    560: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 80
    }
  },

  navigation: {
    nextEl: '.custom-nav-next',
    prevEl: '.custom-nav-prev',
  },
});

// calendar
function updateCalendar() {
  const date = new Date();
  const day = date.getDate();

  // Mapping variables to specific HTML IDs
  const monthNameEl = document.getElementById("month-day");
  const dayNameEl = document.getElementById("day-name");
  const dayNumEl = document.getElementById("day-number");
  // const yearEl = document.getElementById("year");

  // Helper for 1st, 2nd, 3rd, 4th...
  function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  // Injecting the data
  monthNameEl.innerText = date.toLocaleString("en", { month: "long" });
  dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
  dayNumEl.innerText = day + getOrdinalSuffix(day);
  // yearEl.innerText = date.getFullYear();
}

// Run immediately on page load
updateCalendar();

// Check for a new day every 1 hour (3600000 milliseconds)
setInterval(updateCalendar, 3600000);


