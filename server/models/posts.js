import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {type: String},
    content: {type: String},
    color: {type: String}
});

const Posts =  mongoose.model("NotesPosts", PostSchema);

export default Posts;