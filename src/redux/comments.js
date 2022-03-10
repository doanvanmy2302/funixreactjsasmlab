
import * as ActionTypes from './ActionTypes';

export const Comments = (state = {errMess:null , comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, comments:action.payload, errMess: null}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess:action.payload}
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            
            console.log("Comment: ", comment);
            return {...state, comments: state.comments.concat(comment)};

        default:
          return state;
      }
};