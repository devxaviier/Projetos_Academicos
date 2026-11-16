const form = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroMensagem = document.getElementById("erro-mensagem");
const sucesso = document.getElementById("sucesso");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  erroNome.textContent = "";
  erroEmail.textContent = "";
  erroMensagem.textContent = "";
  sucesso.textContent = "";
  let primeiroErro = null;

  if (nome.value.trim().length < 2) {
    erroNome.textContent = "Digite seu nome (mínimo 2 letras).";
    primeiroErro = nome;
  }

  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatoEmail.test(email.value.trim())) {
    erroEmail.textContent = "Digite um e-mail válido, como nome@email.com.";
    if (!primeiroErro) primeiroErro = email;
  }

  if (mensagem.value.trim().length < 10) {
    erroMensagem.textContent =
      "A mensagem precisa ter pelo menos 10 caracteres.";
    if (!primeiroErro) primeiroErro = mensagem;
  }

  if (primeiroErro) {
    primeiroErro.focus();
    return;
  }

  // Envio simulado: não há servidor, então só confirmamos na tela
  sucesso.textContent = "Mensagem enviada! Obrigado pelo contato.";
  form.reset();
});
