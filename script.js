var nomeLivro = document.getElementById("nomeLivro");
var adicionar = document.getElementById("adicionar");
var listaLivros = document.getElementById("listaLivros");

adicionar.addEventListener("click", function() {
    if (nomeLivro.value !== "") {
        var livro = document.createElement("li");

        livro.textContent = nomeLivro.value;

        listaLivros.appendChild(livro);

        nomeLivro.value = "";
    }
});