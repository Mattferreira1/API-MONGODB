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
                error: e
            })
        }
    }

    async update(req, res){
        try{
            let id = req.params.id
            const livro = req.body
            const data = await Book.findByIdAndUpdate(id, livro, {new: true})
            res.status(200).json(data)
        }catch(e){
            res.json({
                error: e, message: "Ocorreu um erro ao atualizar o livro"
            })
        }
    }

    async delete(req, res){
        try{
            let id = req.params.id
            const data = await Book.findByIdAndDelete(id)
            if(!data){
                res.status(404).json({message: "Livro não encontrado"})
            }
            res.status(200).json({
                message: "Livro deletado!"
            })
        }catch(e){
            res.json({
                error: e, message: "Ocorreu um erro ao deletar o livro"
            })
        }
    }
}

module.exports = BookController