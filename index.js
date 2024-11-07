// Atividade 1:
const quadrados = document.querySelectorAll(".quadrado");
quadrados.forEach(quadrado => {
    quadrado.addEventListener("click", () => {
        const original = quadrado.getAttribute("data-original");
        quadrado.style.backgroundColor = quadrado.style.backgroundColor === original ? "yellow" : original;
    });
});
 
// Atividade 2:
let contador = 0;
const contadorDisplay = document.getElementById("contador");
document.getElementById("contarCliques").addEventListener("click", () => {
    contador++;
    contadorDisplay.innerText = contador;
});
document.getElementById("resetarCliques").addEventListener("click", () => {
    contador = 0;
    contadorDisplay.innerText = contador;
});

// Atividade 3:
const texto = document.getElementById("textoEscondido");  
document.getElementById("toggleTexto").addEventListener("click", () => {
    texto.style.display = texto.style.display === "none" ? "block" : "none";
});


// Atividade 4: 
document.getElementById("mudarTexto").addEventListener("click", () => {
    const novoTexto = prompt("digite o novo texto:");
    if (novoTexto !== null) {
        document.getElementById("textoPadrao").innerText = novoTexto;
    }
});

// Atividade 5: 
document.addEventListener("keydown", (event) => {
    document.getElementById("mensagemTecla").innerText = `você pressionou: ${event.key}`;
});
 
// Atividade 6: 
const candidatos = {
    "1": { nome: "Lula", foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportBusinessNews/tagreuters.com2024binary_LYNXMPEK5H0DZ-FILEDIMAGE-e1719942259255.jpg?w=420&h=240&crop=1&quality=85" },
    "2": { nome: "Bolsonaro", foto: "https://cdn.folhape.com.br/upload/dn_arquivo/2024/02/superior-tribunal-de-justica-stj-fcpzzb-abr0495061222.jpg" }
};
const votos = { "1": 0, "2": 0, nulo: 0 };
const nome = document.getElementById("nome");
const foto = document.getElementById("foto");
const confirmacao = document.getElementById("confirmacao");
const confirmarVoto = document.getElementById("confirmarVoto");
document.getElementById("votar").addEventListener("click", () => {
    const voto = prompt("digite o número do candidato (1 para lula, 2 para bolsonaro, outro para voto nulo):");
 
    if (candidatos[voto]) {
       nomeCandidato.innerText = candidatos[voto].nome;
        foto.src = candidatos[voto].foto;
        foto.style.display = "block";
        confirmacao.style.display = "block";
        confirmarVoto.style.display = "block";
    } else {
        nome.innerText = "voto nulo";
        foto.style.display = "none";
        confirmacao.style.display = "none";
        confirmarVoto.style.display = "block";
    }
});
confirmarVoto.addEventListener("click", () => {
    const candidatoAtual = nome.innerText;
 
    if (candidatoAtual === "lula") {
        votos["1"]++;
    } else if (candidatoAtual === "bolsonaro") {
        votos["2"]++;
    } else {
        votos.nulo++;
    }
 
    console.log("contagem de votos:", votos);
 
    nome.innerText = "";
    foto.style.display = "none";
    confirmacao.style.display = "none";
    confirmarVoto.style.display = "none";
});