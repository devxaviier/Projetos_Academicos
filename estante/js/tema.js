const CHAVE = "tema-estante";
const salvo = localStorage.getItem(CHAVE);
const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
let tema = salvo || (prefereEscuro ? "escuro" : "claro");

// aplica logo de início, para a página não "piscar" no tema errado
document.documentElement.dataset.tema = tema;

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao-tema");

  function atualizarTexto() {
    botao.textContent = tema === "escuro" ? "☀️ Modo claro" : "🌙 Modo escuro";
  }

  botao.addEventListener("click", () => {
    tema = tema === "escuro" ? "claro" : "escuro";
    document.documentElement.dataset.tema = tema;
    localStorage.setItem(CHAVE, tema);
    atualizarTexto();
  });

  atualizarTexto();
});
