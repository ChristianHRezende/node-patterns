const { promisify } = require("util");

const BookAPI = require("./mockAPI");
const { getCategory, getBook, getAuthor } = new BookAPI();

// Promisify cria uma promise de uma funcao de callback
const promiseGetCategory = promisify(getCategory);
const promisegGetBook = promisify(getBook);
const promiseGetAuthor = promisify(getAuthor);

// Dificuldade em manutencao
// Se ocorrer erro quase impossivel saber onde foi
promiseGetCategory()
  .then((category) => {
    console.log("Result", category);
  })
  .catch(function (error) {
    console.log("Error", error);
  });
