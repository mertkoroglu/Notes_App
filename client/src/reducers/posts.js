
const PostReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH":
            return action.payload;
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter((item) => item._id !== action.payload);
        case "EDIT":
            return state.forEach((item, index) => {
                if(item._id === action.payload._id) {
                    state[index] = action.payload;
                }
            });
        default:
            return state;
    }
}

export default PostReducer;