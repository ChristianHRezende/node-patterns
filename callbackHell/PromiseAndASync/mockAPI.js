class BookAPI {
  constructor() {}

  async getCategory() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("thriller"), 3000);
    });
  }

  async getBook(category) {
    return new Promise((resolve, reject) => {
      if (!category) {
        reject(new Error("Error API"));
        return;
      }
      setTimeout(() => resolve("The Elias`s death"), 3000);
    });
  }

  async getAuthor(book) {
    return new Promise((resolve, reject) => {
      if (!book) {
        reject(new Error("Error API"));
      }
      setTimeout(() => resolve("August Lfer"), 3000);
    });
  }
}

module.exports = BookAPI;
