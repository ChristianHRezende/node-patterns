class BookAPI {
  async getCategory(resolve) {
    console.log("Pegando categoria");
    setTimeout(() => resolve("thriller"), 3000);
  }

  async getBook(category, resolve, error) {
    if (!category) {
      error(new Error("Error API"));
      return;
    }
    setTimeout(() => resolve("The death of Elias"), 3000);
  }

  async getAuthor(book, resolve, error) {
    if (!book) {
      error(new Error("Error API"));
      return;
    }
    setTimeout(() => resolve("August Lfer"), 3000);
  }
}

module.exports = BookAPI;
