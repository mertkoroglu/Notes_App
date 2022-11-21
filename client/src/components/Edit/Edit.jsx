import React from 'react'
import { useSelector } from 'react-redux';
import {  useParams} from 'react-router-dom';
import Form from '../Form/Form';

const Edit = () => {
    const {id} = useParams();
    const post = useSelector((state) => state?.filter((item) => item._id === id)[0]);

    if(post !== undefined)
        localStorage.setItem('editPost', JSON.stringify(post));

    var editPost = JSON.parse(localStorage.getItem('editPost'));

    return (
        <div>
            <Form intent={"edit"} receivedPost={editPost}/>
        </div>
  )
}

export default Edit