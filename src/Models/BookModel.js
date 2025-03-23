const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Título do livro
  author: { type: String, required: true }, // Autor
  genre: { type: String }, // Gênero
  url:{type: String}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;