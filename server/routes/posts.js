
import Posts from "../models/posts.js";

export const getPosts = async (req, res) => {
    try{
        const posts = await Posts.find();
         
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error.message});

    }

}

export const deletePost = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted = await Posts.findByIdAndRemove(id);
         
        res.status(200).json(deleted);
    }catch(error){
        res.status(404).json({message: error.message});

    }

}

export const editPost = async (req,res) => {
    try{
        const data = req.body;
        console.log(data);

        const post = await Posts.findByIdAndUpdate(data._id, {title : data.title, content: data.content}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated User : ", docs);
            }});

        console.log(post);

        res.status(200).json(post);

    }catch(error){
        res.status(404).json({message: error.message});

    }
    
}

export const changeColor = async (req,res) => {
    try{
        const data = req.body.data;
        const id = req.body.id;

        console.log(id);
        console.log(data);
        const post = await Posts.findByIdAndUpdate(id, {color : data.hex}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated User : ", docs);
            }});

        console.log(post);

        res.status(200).json(post);

    }catch(error){
        res.status(404).json({message: error.message});

    }
    
}

export const addPost = async (req, res) => {
    const data = req.body;

    const post = new Posts(data);
    await post.save();
}