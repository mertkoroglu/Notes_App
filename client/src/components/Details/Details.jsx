import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Details.css";

const Details = () => {
    const {id} = useParams();
    const post = useSelector((state) => state.filter((item) => item._id === id)[0]);

    if(post !== undefined)
        localStorage.setItem('detailPost', JSON.stringify(post));

    var detailPost = JSON.parse(localStorage.getItem('detailPost'));

  return (
    <div className='selectedPost'>
        <h1 className='selectedTitle'>{detailPost.title}</h1>
        <p className='selectedContent'>{detailPost.content}</p>
    </div>
  )
}

export default Details;