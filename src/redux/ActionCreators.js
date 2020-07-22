
import * as ActionTypes from "./ActionTypes";
//9,10,11,12
import { CAMPSITES } from "../shared/campsites";

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCampsites = () => dispatch => {//13
    dispatch(campsitesLoading());
    setTimeout(() => {//14
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({//15,16
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({//17
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({//18
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

