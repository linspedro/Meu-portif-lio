// ============================
// CONTATO
// ============================

const insta = document.getElementById("insta");
const tele = document.getElementById("tele");
const Email = document.getElementById("Email");

// Instagram
insta.addEventListener("click", () => {
  if (insta.value === "Instagram") {
    insta.value = "pedro_lins.h";
  } else {
    insta.value = "Instagram";
  }
});

// Telefone
tele.addEventListener("click", () => {
  if (tele.value === "Telefone") {
    tele.value = "(45) 99834-8568";
  } else {
    tele.value = "Telefone";
  }
});

// Email
Email.addEventListener("click", () => {
  if (Email.value === "Email") {
    Email.value = "lins90748@gmail.com";
  } else {
    Email.value = "Email";
  }
});


// ============================
// TROCAR PROJETOS
// ============================

const botoesProjeto = document.querySelectorAll(".projeto-btn");
const conteudos = document.querySelectorAll(".projetos-nãoativo");

botoesProjeto.forEach((botao, index) => {
  botao.addEventListener("click", () => {

    conteudos.forEach((conteudo) => {
      conteudo.classList.remove("ativo");
    });

    botoesProjeto.forEach((btn) => {
      btn.classList.remove("ativo");
    });

    conteudos[index].classList.add("ativo");
    botao.classList.add("ativo");

  });
});


// ============================
// LINKS
// ============================

function abrir(url) {
  window.open(url, "_blank");
}

const bnt_git = document.getElementById("bnt_git");
const bnt_edu = document.getElementById("bnt_edu");
const horta_bnt = document.getElementById("horta_bnt");
const bnt_eduProjeto = document.getElementById("bnt_eduProjeto");

bnt_git.addEventListener("click", () => {
  abrir("https://github.com/linspedro");
});

bnt_edu.addEventListener("click", () => {
  abrir("https://www.figma.com/proto/4FLax3DbRZd7DsKASorQFc/projeto-integrador?node-id=60-68&starting-point-node-id=60%3A68&t=o3IJfoFqLH2zVfek-1");
});

horta_bnt.addEventListener("click", () => {
  abrir("https://www.figma.com/proto/5Ybr07JMRCXbMjpIBI2nSJ/Untitled?node-id=50-184&starting-point-node-id=177%3A1374&t=W66tesrIet3qlNmV-1");
});

bnt_eduProjeto.addEventListener("click", () => {
  abrir("https://edu-ia-frontend.vercel.app");
});


// ============================
// ANIMAÇÃO AO CARREGAR A PÁGINA
// ============================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});