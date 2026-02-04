window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;

  // Activa la animación de salida
  splash.classList.add("splash--out");

  // Quita el splash cuando termine (delay + duración)
  // delay 1.8s + anim 0.45s = 2.25s => 2250ms
  setTimeout(() => {
    splash.remove();
  }, 2250);
});


const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel__btn.prev');
const nextBtn = document.querySelector('.carousel__btn.next');

let index = 0;

function updateCarousel(){
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

const icon = document.querySelector(".song__icon");

btn.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      btn.classList.add("is-playing");
      if (icon) icon.src = icon.dataset.pause;
    } else {
      audio.pause();
      btn.classList.remove("is-playing");
      if (icon) icon.src = icon.dataset.play;
    }
  } catch (e) {
    console.warn("No se pudo reproducir el audio:", e);
  }
});

audio.addEventListener("ended", () => {
  btn.classList.remove("is-playing");
  if (icon) icon.src = icon.dataset.play;
});

function startCountdown(targetDateISO){
  const target = new Date(targetDateISO).getTime();
  const els = {
    days: document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]')
  };

  function pad(n){ return String(n).padStart(2, "0"); }

  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    if (els.days) els.days.textContent = String(days);
    if (els.hours) els.hours.textContent = pad(hours);
    if (els.minutes) els.minutes.textContent = pad(minutes);
    if (els.seconds) els.seconds.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
}

/* BODA: 18 julio 2026  (ajusta hora si quieres) */
document.addEventListener("DOMContentLoaded", () => {
  startCountdown("2026-07-18T18:00:00");
});


document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("weddingSong");
  const btn = document.querySelector(".song__btn");
  const icon = document.querySelector(".song__icon");

  if (!audio || !btn) return;

  btn.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        btn.classList.add("is-playing");
        if (icon?.dataset.pause) icon.src = icon.dataset.pause;
      } else {
        audio.pause();
        btn.classList.remove("is-playing");
        if (icon?.dataset.play) icon.src = icon.dataset.play;
      }
    } catch (e) {
      console.warn("No se pudo reproducir el audio:", e);
    }
  });

  audio.addEventListener("ended", () => {
    btn.classList.remove("is-playing");
    if (icon?.dataset.play) icon.src = icon.dataset.play;
  });
});
