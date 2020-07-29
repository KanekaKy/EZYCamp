/*Exercise: Fetch Post Comment
redux/actioncreator.js
1. cut and paste export const addComment action creator and move it under addComments action creator. 
2. Add another action creator into addComment, using actionTypes add comment and payload comment
3. Create postComment creator using redux thunk middleware adding dispatch to handle asynchronous call inside it. Remove the addComment action type 
4. Change the payload property payload to a constant newComment which makes an object to handle the same properties. 
5. Create date property for new comment using new Date method and toISOSstring();
6. We return fetch  give a baseUrl + comments and pass second argument in the form of object using method: post. If we don't specify method:post, the default HTTP request method is get
7. supply a body for this request, it is JSON.stringify(newComment)
8. Supply headers which is the content. 
9. In the same addComment action creator, add then method and respond error. 

redux/comments.js
10. Remove comment.id because json server does it for us now and comment.date has been added in the postComment action creator.

components/mainComponent.js
11. Change every addComment instance to postComment 

components/CampsiteInfoComponent.js
12. Change every addComment instance to postComment 
*/

import * as ActionTypes from "./ActionTypes";
import { baseUrl } from '../shared/baseUrl';

export const fetchCampsites = () => dispatch => {
    dispatch(campsitesLoading());
    return fetch(baseUrl + 'campsites')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}:${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}:${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({ 
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = comment => ({//1,2
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {//3
    const newComment = {//4
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString(); //5

    return fetch(baseUrl + 'comments', {//6
            method: "POST", 
            body: JSON.stringify(newComment),//7
            headers: {//8
                "Content-Type": "application/json"
            }
        })
        .then(response => { //9
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}:${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
}

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});