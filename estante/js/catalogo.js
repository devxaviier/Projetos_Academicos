const campoBusca = document.getElementById("busca-livro");
const campoGenero = document.getElementById("filtro-genero");
const cartoes = document.querySelectorAll(".cartao-livro");
const aviso = document.getElementById("aviso-vazio");
const contador = document.getElementById("contador");

// Ignora maiúsculas e acentos (assim "cortico" acha "O Cortiço")
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrar() {
  const termo = normalizar(campoBusca.value.trim());
  const genero = campoGenero.value;
  let visiveis = 0;

  cartoes.forEach(function (cartao) {
    const texto = normalizar(
      cartao.dataset.titulo + " " + cartao.dataset.autor,
    );
    const combinaBusca = texto.includes(termo);
    const combinaGenero =
      genero === "todos" || cartao.dataset.genero === genero;
    const mostrar = combinaBusca && combinaGenero;

    cartao.hidden = !mostrar;
    if (mostrar) visiveis++;
  });

  contador.textContent =
    visiveis + (visiveis === 1 ? " livro encontrado" : " livros encontrados");
  aviso.hidden = visiveis !== 0;
}

campoBusca.addEventListener("input", filtrar);
campoGenero.addEventListener("change", filtrar);
filtrar();
