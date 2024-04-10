const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
botoes[j].classList.remove("ativo");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
<div class="aba-conteudo ativo">
    <h3 class="aba-conteudo-titulo-principal">Estudar 4 cursos na Alura</h3>
    <h4 class="aba-conteudo-titulo-secundario">tempo para completar o objetivo</h4>
    <div class="contador"></div>
</div>
