const botoes = document.querySelectorAll('.btn')//encontra todos os botoes
botoes.forEach(btn=>btn.addEventListener('click', filtrarLivros))//cria um evento de click em cada botao
function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)//encontra o id de cada botao da iteração
    const categoria = elementoBtn.value//encontra o valor da categoria
    let livrosFiltrados = categoria === 'disponivel'? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exbibeLivrosNaTela(livrosFiltrados)
    if(categoria === 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
function filtrarPorDisponibilidade(){
    return livros.filter(livro=> livro.quantidade>0)
}
function filtrarPorCategoria(categoria){
    return livros.filter(livro=> livro.categoria === categoria)
}
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}