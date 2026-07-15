// ============================
// MENU MOBILE
// ============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const aberto = navMenu.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", aberto);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================
// CONTATO (clique para copiar)
// ============================

const botoesContato = document.querySelectorAll(".contato-btn");

botoesContato.forEach((botao) => {
  const textoPadrao = botao.dataset.default;
  const valor = botao.dataset.value;

  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(valor);
      botao.textContent = "Copiado!";
      botao.classList.add("copiado");
    } catch (err) {
      // fallback: mostra o valor caso o navegador bloqueie a área de transferência
      botao.textContent = valor;
    }

    setTimeout(() => {
      botao.textContent = textoPadrao;
      botao.classList.remove("copiado");
    }, 1800);
  });
});

// ============================
// TROCAR PROJETOS
// ============================

const botoesProjeto = document.querySelectorAll(".projeto-btn");
const conteudos = document.querySelectorAll(".projetos-nãoativo");

botoesProjeto.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    conteudos.forEach((conteudo) => conteudo.classList.remove("ativo"));
    botoesProjeto.forEach((btn) => btn.classList.remove("ativo"));

    conteudos[index].classList.add("ativo");
    botao.classList.add("ativo");
  });
});

// ============================
// LINKS (abrir em nova aba)
// ============================

function abrir(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const bnt_edu = document.getElementById("bnt_edu");
const horta_bnt = document.getElementById("horta_bnt");
const bnt_eduProjeto = document.getElementById("bnt_eduProjeto");

// Obs: o botão do GitHub NÃO tem listener aqui de propósito —
// ele já é um <a href="..." target="_blank"> no HTML.
// Ter os dois ao mesmo tempo abria duas abas ao clicar.

bnt_edu.addEventListener("click", () => {
  abrir(
    "https://www.figma.com/proto/4FLax3DbRZd7DsKASorQFc/projeto-integrador?node-id=60-68&starting-point-node-id=60%3A68&t=o3IJfoFqLH2zVfek-1"
  );
});

horta_bnt.addEventListener("click", () => {
  abrir(
    "https://www.figma.com/proto/5Ybr07JMRCXbMjpIBI2nSJ/Untitled?node-id=50-184&starting-point-node-id=177%3A1374&t=W66tesrIet3qlNmV-1"
  );
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));