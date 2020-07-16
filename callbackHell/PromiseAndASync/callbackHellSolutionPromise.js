const BookAPI = require("./mockAPI");
const { getCategory, getAuthor, getBook } = new BookAPI();

// Ease of maintenance
// Identify error most ease
getCategory()
  .then((category) =>
    getBook(category)
      .then((book) =>
        getAuthor(book)
          .then((author) => console.log("Author", author))
          .catch((error) => console.log("ERROR AUTHOR", error))
      )
      .catch((error) => console.log("ERROR BOOK", error))
  )
  .catch((error) => console.log("ERROR CATEGORY", error));
