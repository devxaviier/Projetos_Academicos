const form = document.getElementById("form-login");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  erroEmail.textContent = "";
  erroSenha.textContent = "";
  let primeiroErro = null;

  if (!email.value.includes("@") || !email.value.includes(".")) {
    erroEmail.textContent = "Digite um e-mail válido.";
    primeiroErro = email;
  }

  if (senha.value.length < 6) {
    erroSenha.textContent = "A senha precisa ter pelo menos 6 caracteres.";
    if (!primeiroErro) primeiroErro = senha;
  }

  if (primeiroErro) {
    primeiroErro.focus();
    return;
  }

  try {
    localStorage.setItem("usuario", email.value.trim());
  } catch (e) {}

  window.location.href = "perfil.html";
});
