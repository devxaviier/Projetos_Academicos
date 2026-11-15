const CHAVE_FONTE = "fonte-estante";
const TAMANHOS = [100, 112.5, 125, 150];

let indice = Number(localStorage.getItem(CHAVE_FONTE));
if (!(indice >= 0 && indice < TAMANHOS.length)) indice = 0;

function aplicarFonte() {
  document.documentElement.style.fontSize = TAMANHOS[indice] + "%";
}

// aplica logo de início, em todas as páginas
aplicarFonte();

document.addEventListener("DOMContentLoaded", () => {
  const menos = document.getElementById("fonte-menos");
  const normal = document.getElementById("fonte-normal");
  const mais = document.getElementById("fonte-mais");
  const status = document.getElementById("fonte-status");

  // só existe na página de acessibilidade
  if (!menos) return;

  function atualizar() {
    aplicarFonte();
    localStorage.setItem(CHAVE_FONTE, indice);
    status.textContent = `Tamanho da fonte: ${TAMANHOS[indice]}%`;
  }

  menos.addEventListener("click", () => {
    indice = Math.max(0, indice - 1);
    atualizar();
  });
  normal.addEventListener("click", () => {
    indice = 0;
    atualizar();
  });
  mais.addEventListener("click", () => {
    indice = Math.min(TAMANHOS.length - 1, indice + 1);
    atualizar();
  });

  status.textContent = `Tamanho da fonte: ${TAMANHOS[indice]}%`;
});
