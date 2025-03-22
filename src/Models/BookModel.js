const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Título do livro
  author: { type: String, required: true }, // Autor
  genre: { type: String }, // Gênero
  publishedYear: { type: Number }, // Ano de publicação
  publisher: { type: String }, // Editora
  isbn: { type: String, unique: true }, // Código ISBN
  createdAt: { type: Date, default: Date.now } // Data de cadastro
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;