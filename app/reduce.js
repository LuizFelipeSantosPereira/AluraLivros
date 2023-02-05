function calcularValorTotalDeLivrosDisponiveis(livros){
    return valorTotal = livros.reduce((acc,livro)=>acc + livro.preco,0 ).toFixed(2)
}