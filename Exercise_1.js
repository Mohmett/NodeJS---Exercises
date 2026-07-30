const express = require("express");

const App = express();

App.use(express.json());

let books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Muse" },
    { id: 3, title: "Book 3", author: "Author 3" }
]

//ROUTE 1: GET all books - read
App.get("/books", (req, res) => {
    res.json(books);
})

//ROUTE 2: GET single Book by id
App.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("No Book is Found")
    res.json(book);
})


//ROUTE 3: POST single User - Create
App.post("/books", (req, res) => {
    const bookData = req.body;
    const lastId = Math.max(...books.map(book => book.id));
    newBook = {
        id:lastId + 1,
        title: bookData.title,
        author: bookData.author,
    }
    books.push(newBook)

    res.json(newBook)
})


//ROUTE 4: PUT Books by id - Update
App.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Ma jiro Book-gani");

    book.title= req.body.title;
    book.author=req.body.author;
    res.json(book);
})


//ROUTE 5: Delete  - Delete
App.delete("/books/:id",(req,res)=>{
    books = books.filter(b => b.id != req.params.id)
    res.send(`Book ${req.params.id} deleted successfully`)
})




App.listen(3000, () => {
    console.log("✅ Server is running on port 3000");
})