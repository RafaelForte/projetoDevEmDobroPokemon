const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// pega o elemento pelo iD
/*const botaoExcluirTema = document.getElementById("botao-excluir-tema");*/
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

const body = document.querySelector("body");
// Consulta um seletor, class, tag...

// identifica o clique do usuario no botão
botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")


    // verifica se o body tem a classe modo-escuro
    body.classList.toggle("modo-escuro");
    // verifica se o modo escuro está ativo
    if (modoEscuroAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        // altera o tema escuro ao body
        //troca a imagem do tema de SOL para LUA
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }


});