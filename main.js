let Menu = "mainMenu";
let livro = {};
let biblioteca = [];
let opcao = 0;

console.log("Gerenciar biblioteca");
console.log("1. Adicionar livro.");
console.log("2. Deletar livro.");
console.log("3. Listar livros.");
console.log("4. Sair.");

process.stdin.on("data", function (data) {
  const usuario = data.toString().trim();

  switch (Menu) {
    case "mainMenu":
      handleMainMenu(usuario);
      break;
    case "addLivroNome":
      livro.nome = usuario;
      console.log("Autor: ");
      Menu = "addLivroAutor";
      break;
    case "addLivroAutor":
      livro.autor = usuario;
      console.log("Gênero: ");
      Menu = "addLivroGenero";
      break;
    case "addLivroGenero":
      livro.genero = usuario;
      console.log("Tamanho: ");
      Menu = "addLivroTamanho";
      break;
    case "addLivroTamanho":
      livro.tamanho = usuario;
      biblioteca.push({ ...livro });
      livro = {};
      console.log("Livro adicionado.");
      console.log("Gerenciar biblioteca");
      console.log("1. Adicionar livro.");
      console.log("2. Deletar livro.");
      console.log("3. Listar livros.");
      console.log("4. Sair.");
      Menu = "mainMenu";
      break;
    case "deleteLivro":
      deleteLivro(usuario);
      break;
    case "listLivro":
      console.log("Digite 'sair' para voltar ao menu principal.");
      if (usuario === "sair") {
        console.log("Gerenciar biblioteca");
        console.log("1. Adicionar livro.");
        console.log("2. Deletar livro.");
        console.log("3. Listar livros.");
        console.log("4. Sair.");
        Menu = "mainMenu";
      }
      break;
  }

  function handleMainMenu(usuario) {
    opcao = Number(data.toString().trim());
    switch (opcao) {
      case 1:
        console.log("Nome: ");
        Menu = "addLivroNome";
        opcao--;
        break;
      case 2:
        console.log("Digite o nome do livro: ");
        Menu = "deleteLivro";
        break;
      case 3:
        listLivro();
        break;
      case 4:
        process.exit();
        break;
      default:
        console.log("Não entendi. Digite novamente.");
    }
  }

  function deleteLivro(nome) {
    const index = biblioteca.findIndex(
      (livro) => livro.nome.toLowerCase() === nome.toLowerCase()
    );
    if (index !== -1) {
      biblioteca.splice(index, 1);
      console.log("Livro deletado.");
    } else {
      console.log("Livro não encontrado.");
    }
    console.log("Gerenciar biblioteca");
    console.log("1. Adicionar livro.");
    console.log("2. Deletar livro.");
    console.log("3. Listar livros.");
    console.log("4. Sair.");
    Menu = "mainMenu";
  }

  function listLivro() {
    if (biblioteca.length > 0) {
      biblioteca.forEach((livro, index) => {
        console.log(
          `${index + 1}. ${livro.nome} por ${livro.autor} - ${livro.genero} - ${
            livro.tamanho
          }`
        );
      });
    } else {
      console.log("Nenhum livro na biblioteca.");
    }
    Menu = "listLivro";
  }
});
