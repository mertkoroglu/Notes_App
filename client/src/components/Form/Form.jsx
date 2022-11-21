import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../../actions/posts';
import "./Form.css";

const Form = ({intent, receivedPost, ref}) => {
    
    const [title, setTitle] = useState(intent === "add" ? "" : receivedPost.title);
    const [content, setContent] = useState(intent === "add" ? "" : receivedPost.content);
    
    const dispatch = useDispatch();

    

    const submit =  () => {
        const post = {"title": title, "content": content, "color": "#ffff"};
        dispatch(addPost(post));
        alert("Note created successfully");
    }

    const edit =  () => {
        const post = {"_id": receivedPost._id, "title": title, "content": content};
        dispatch(editPost(post));
        alert("Note edited successfully");
    }

  return (
    <div>
        <form onSubmit={intent === "add" ? submit : edit} className="form">
            {intent === "add" ? <h1>Create New Post</h1> : <h1>Edit Post</h1>} 
            <label>Title</label>
            <br /> 
            <input value={title} className="tfTitle" onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <label>Content</label>
            <br /> 
            <textarea  cols="45" rows="8" maxlength="65525" value={content} className="tfContent" onChange={(e) => setContent(e.target.value)}></textarea>
            <br />
            <button type='submit' className='sbmt'>{intent === "add" ? "Add" : "Edit"}</button>
        </form>
    </div>
  )
}

export default Form