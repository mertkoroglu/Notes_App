import React, {  useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import {Github} from '@uiw/react-color';

import "./Post.css";
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/posts';
import { useNavigate } from "react-router-dom";
import { changeColor } from '../../actions/posts';

const Post = ({post}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

 
  const removeFunc = () => {
    dispatch(deletePost(post._id));
  }

  const seePost = () => {
    navigate(`/selected/${post._id}`);
  }

  const editPost = () => {
    navigate(`/edit/${post._id}`);
  }

  return (
    <div className='post' style={{backgroundColor: post.color}} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>  
        <div style={{cursor: "pointer"}} onClick={seePost}>
          <h1 className='postTitle'>{post.title}</h1>
          <p className='postContent'>{post.content}</p>
        </div>
        <div className='logos'>
          {isShown &&  <Github
              color={post.color}
              onChange={(color) => {
                  dispatch(changeColor(color, post._id));
                  window.location.reload();
              }}
          />}
          <ClearIcon  className='deleteIcon' onClick={removeFunc}/>
          <EditIcon  className='editIcon' onClick={editPost}/>
        </div>
    </div>
  )
}

export default Post;