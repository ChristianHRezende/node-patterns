const BookAPI = require("./mockAPI");
const { getCategory, getAuthor, getBook } = new BookAPI();

// Ease of maintenance
// Identify error most ease

async function fetchAuthor() {
  try {
    const category = await getCategory();
    console.log(`The category is ${category}`);

    const book = await getBook(category);
    console.log(`The book is ${book}`);

    const author = await getAuthor(book);
    console.log(`The author is ${author}`);
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log("Finished");
  }
}

fetchAuthor();
