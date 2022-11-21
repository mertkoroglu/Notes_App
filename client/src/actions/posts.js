import * as api from "../api/posts";

export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.getPosts();

        dispatch({type: "FETCH", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const addPost = (data) => async (dispatch) => {
    try{
        const {post} = await api.addPost(data);

        dispatch({type: "ADD", payload: post});
    }catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: "DELETE", payload: id});
    }catch(error){
        console.log(error);
    }
}

export const editPost = (data) => async (dispatch) => {
    try{
        const post = await api.editPost(data);

        await dispatch({type: "EDIT", payload: post});
        
        
    }catch(error){
        console.log(error);
    }
}

export const changeColor = (data, id) => async (dispatch) => {
    try{
        const post = await api.changeColor(data, id);
        

        await dispatch({type: "EDIT", payload: post});
        
    }catch(error){
        console.log(error);
    }
}

