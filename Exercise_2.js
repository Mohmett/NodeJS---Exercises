import express from "express";
import mongoose from "mongoose";
import exercise2Routes from "./routes/exercise2Routes.js";
const App = express();
const PORT = 3000;
App.use(express.json());


App.use("/books",exercise2Routes);

mongoose.connect("mongodb://localhost:27017/books")
.then(() => {
    App.listen(PORT, () => {
        console.log(`✅ Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});