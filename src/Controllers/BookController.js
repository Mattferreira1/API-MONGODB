const Book = require("../Models/BookModel")
class BookController{
     async list(req, res){
        try{
            const data = await Book.find()
            res.status(200).json(data)
        }catch(e){
            console.log(e)
        }
    }

    async find(req, res){
        let id = req.params.id
        try{
            const book = await Book.findById(id)
            if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
            res.json(book);
        }catch(e){
            console.log(e)
        }
    }

    async create(req, res){
        try{
            const livro = req.body
            const newBook = new Book(livro);
            await newBook.save();
            console.log(".")
            res.json({
                message: "livro registrado!"
            })
        }catch(e){
            console.log(e)
            res.json({
                message: "este livro já existe"
            })
        }
    }

    async update(req, res){
        try{
            const data = await Book.find()
            res.status(200).json(data)
        }catch(e){
            console.log(e)
        }
    }

    async delete(req, res){
        try{
            const data = await Book.find()
            res.status(200).json(data)
        }catch(e){
            console.log(e)
        }
    }
}

module.exports = BookController