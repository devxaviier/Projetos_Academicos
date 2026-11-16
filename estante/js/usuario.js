(function () {
  let email = null;
  try {
    email = localStorage.getItem("usuario");
  } catch (e) {}

  function nomeDe(endereco) {
    const parte = endereco.split("@")[0];
    return parte.charAt(0).toUpperCase() + parte.slice(1);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Menu: troca "Entrar" por "Sair" quando há alguém logado
    const linkLogin = document.querySelector('.menu a[href="login.html"]');
    if (email && linkLogin) {
      linkLogin.textContent = "Sair";
      linkLogin.setAttribute("href", "#");
      linkLogin.addEventListener("click", function (evento) {
        evento.preventDefault();
        try {
          localStorage.removeItem("usuario");
        } catch (e) {}
        window.location.href = "index.html";
      });
    }

    // Perfil: mostra o nome do usuário
    const campoNome = document.getElementById("nome-usuario");
    if (campoNome) {
      campoNome.textContent = email ? nomeDe(email) : "Visitante";
    }
  });
})();
