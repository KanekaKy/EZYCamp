import * as ActionTypes from './ActionTypes'; //8

export const Comments = (state = { errMess: null, comments: []}, action) => {//9
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};//10

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};//11

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.comments.length;//12
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};//13

        default:
            return state;
    }
};