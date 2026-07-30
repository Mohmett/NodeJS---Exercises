import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/exercise2Controller.js";

const exercise2Routes= Router();

exercise2Routes.post("/create",createBook)
exercise2Routes.get("/",getAllBooks)
exercise2Routes.get("/:id",getBookById)
exercise2Routes.put("/:id",updateBook)
exercise2Routes.delete("/delete/:id",deleteBook)


export default exercise2Routes;