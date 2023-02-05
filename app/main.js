let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'


getBuscaLivros()

async function getBuscaLivros(){
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exbibeLivrosNaTela(livrosComDesconto)
}