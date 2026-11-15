document.addEventListener("DOMContentLoaded", () => {
  const campoNome = document.getElementById("busca-nome");
  const campoRegiao = document.getElementById("busca-regiao");
  const contagem = document.getElementById("resultado-contagem");
  const cartoes = document.querySelectorAll(".cartao-clube");

  function filtrar() {
    const texto = campoNome.value.trim().toLowerCase();
    const regiao = campoRegiao.value;
    let visiveis = 0;

    cartoes.forEach((cartao) => {
      const combinaTexto = cartao.textContent.toLowerCase().includes(texto);
      const combinaRegiao = regiao === "" || cartao.dataset.regiao === regiao;
      const mostrar = combinaTexto && combinaRegiao;
      cartao.hidden = !mostrar;
      if (mostrar) visiveis++;
    });

    contagem.textContent =
      visiveis === 1 ? "1 clube encontrado" : `${visiveis} clubes encontrados`;
  }

  campoNome.addEventListener("input", filtrar);
  campoRegiao.addEventListener("change", filtrar);
});
