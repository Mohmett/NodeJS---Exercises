
import mongoose from "mongoose";


const booksSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
});

const Books = mongoose.model("Books", booksSchema);
export default Books;