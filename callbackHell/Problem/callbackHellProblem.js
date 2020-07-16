const BookAPI = require("./mockAPI");
const api = new BookAPI();

// Dificuldade em manutencao
// Se ocorrer erro quase impossivel saber onde foi
api.getCategory((category, error) => {
  console.log("CATEGORIA", { category, error });
  if (category) {
    api.getBook(
      category,
      (book) => {
        if (book) {
          console.log("Livro", { book });
          api.getAuthor(
            book,
            (author) => {
              if (author) {
                console.log("Autor", { author });
              }
            },
            (error) => console.log(error)
          );
        }
      },
      (error) => console.log(error)
    );
  }
});
