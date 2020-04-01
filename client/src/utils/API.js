import axios from "axios";


export const saveBook = bookData => {
  return axios.post("/api/books", bookData)
}

export const getSavedBooks = () => {
  return axios.get("/api/books")
}

export const removeBooks = bookid => {
  return axios.delete("/api/books/${bookid}")
}

export const searchGoogleBooks = query => {
  return axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q: query
    }
  });
}

export default {
  saveBook,
  getSavedBooks,
  removeBooks,
  searchGoogleBooks
}
// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
