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
