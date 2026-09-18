var nomeLivro = document.getElementById("nomeLivro");
var adicionar = document.getElementById("adicionar");
var listaLivros = document.getElementById("listaLivros");

adicionar.addEventListener("click", function() {
    if (nomeLivro.value !== "") {
        var livro = document.createElement("li");

        livro.textContent = nomeLivro.value;

        var remover = document.createElement("button");
        remover.textContent = "Remover";

        var favorito = document.createElement("button");
        favorito.textContent = "Favorito";

      favorito.addEventListener("click", function() {
          livro.style.fontWeight = "bold";
     });

     livro.appendChild(favorito);

        remover.addEventListener("click", function() {
            livro.remove();
        });

        livro.appendChild(remover);
        listaLivros.appendChild(livro);

        nomeLivro.value = "";

        alert("Livro cadastrado com sucesso!");
        console.log("Livro cadastrado!");
        console.log("cadastro realizado com sucesso!");
    }
});