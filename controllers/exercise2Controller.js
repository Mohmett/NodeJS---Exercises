import Books from "../models/exercise2Model.js";


export const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createBook = async (req, res) => {
    try {
        const newBook = await Books.create(req.body);
        res.status(201).json(newBook)
    } catch (error) {
        res.status(401).json({
            message: error
        })
    }



}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBook = await Books.findByIdAndUpdate(id, req.body,{new:true});
        if(!updatedBook) return res.send(`${id} is not exist`)
        res.status(201).json(updatedBook)
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
};


export const deleteBook= async(req,res)=>{
    const { id } = req.params;
    try {
        const deletedBook= await Books.findByIdAndDelete(id);
        res.status(200).send(`${id} deleted successfuly`)
    } catch (error) {
        res.send(error)
    }
}