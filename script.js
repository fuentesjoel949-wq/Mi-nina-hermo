// ================= LIBRO =================
const libro = document.getElementById("paginas");
const paginas = document.querySelectorAll(".pagina");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPair = 0;

// ---- ABRIR LIBRO AL INICIAR ----
window.addEventListener("load", () => {
  libro.classList.add("cerrado");

  setTimeout(() => {
    libro.classList.remove("cerrado");
    libro.classList.add("abierto");
  }, 900);

  mostrarLibro();
});

// ---- MOSTRAR DOBLE PÁGINA ----
function mostrarLibro() {
  paginas.forEach(p => {
    p.classList.remove("active", "left", "right", "turn");
  });

  const leftIndex = currentPair * 2;
  const rightIndex = leftIndex + 1;

  if (paginas[leftIndex]) {
    paginas[leftIndex].classList.add("active", "left");
  }

  if (paginas[rightIndex]) {
    paginas[rightIndex].classList.add("active", "right");
  }

  prevBtn.disabled = currentPair === 0;
  nextBtn.disabled = rightIndex >= paginas.length - 1;
}

// ---- PASAR PÁGINA ----
nextBtn.addEventListener("click", () => {
  const rightPage = paginas[currentPair * 2 + 1];
  if (!rightPage) return;

  rightPage.classList.add("turn");

  setTimeout(() => {
    currentPair++;
    mostrarLibro();
  }, 900);
});

// ---- RETROCEDER ----
prevBtn.addEventListener("click", () => {
  if (currentPair > 0) {
    currentPair--;
    mostrarLibro();
  }
});

// ================= ESTRELLAS =================
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 3 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  star.style.animationDuration = (Math.random() * 3 + 2) + "s, " + (Math.random() * 6 + 4) + "s";

  starsContainer.appendChild(star);
}

// ================= MÚSICA =================
const musica = document.getElementById("musicaFondo");
const toggleMusicaBtn = document.getElementById("toggleMusica");

if (musica && toggleMusicaBtn) {
  toggleMusicaBtn.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      toggleMusicaBtn.textContent = "⏸️ Pausar música";
    } else {
      musica.pause();
      toggleMusicaBtn.textContent = "▶️ Reproducir música";
    }
  });
}

// ================= CORAZONES =================
const coloresCorazon = ["#ff4d6d", "#ff7aa2", "#ffd166"];

function crearCorazon(x = null) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = (x !== null ? x : Math.random() * 100) + "vw";
  heart.style.backgroundColor =
    coloresCorazon[Math.floor(Math.random() * coloresCorazon.length)];
  heart.style.animationDuration = (Math.random() * 5 + 6) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

// Lluvia suave constante
setInterval(() => crearCorazon(), 1200);

// Corazones al hacer clic
document.addEventListener("click", (e) => {
  crearCorazon((e.clientX / window.innerWidth) * 100);
});
                                   
