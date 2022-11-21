import {getPosts, editPost, addPost, deletePost, changeColor} from "./routes/posts.js";
// const Express = require("Express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

mongoose.connect(MONGO_URL)
        .then(
            app.listen(5000, () => console.log("App is running on port 5000")),
            );


app.get("/", getPosts);
app.delete("/:id", deletePost);
app.post("/new", addPost);
app.post("/edit/:id", editPost);
app.post("/", changeColor);

