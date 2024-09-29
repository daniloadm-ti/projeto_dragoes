// - Passo 1
const botoesCarrosssel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Passo 2 
botoesCarrosssel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // - Passo 3
        desativarBotaoSelecionado();
        
        // - Passo 4
        marcarBotaoSelecionado(botao);

        // - Passo 5
        esconderImagemAtiva();

        // - Passo 6 
        mostrarImagemDeFundo(indice);

        // - Passo 7 
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        
        // - Passo 8
        informacoes[indice].classList.add("ativa");
        

        function newFunction() {
            esconderInformacaoesAtivas();
        }
    });
});

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacaoesAtivas(indice) {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoes[indice].classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}