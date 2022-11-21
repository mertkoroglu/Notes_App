import React from 'react'
import "./Posts.css";
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state);

    return (
        <div className='container'>
            <div className='posts'>
            {
                posts.length ?
                posts.map((post) => (   <Post key={post._id} post={post}/>      )) 
                : 
                <div className='errorMsg'>Add new notes to continue</div>
            }
            </div>
        </div>
        
    )
}

export default Posts;