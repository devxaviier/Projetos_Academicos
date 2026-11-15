document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const contador = document.getElementById("slide-contador");
  let atual = 0;

  function mostrar(indice) {
    atual = (indice + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      slide.classList.toggle("ativo", n === atual);
    });
    contador.textContent = `${atual + 1} / ${slides.length}`;
  }

  document
    .getElementById("slide-anterior")
    .addEventListener("click", () => mostrar(atual - 1));
  document
    .getElementById("slide-proximo")
    .addEventListener("click", () => mostrar(atual + 1));
});
