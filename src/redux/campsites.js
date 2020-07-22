import * as ActionTypes from './ActionTypes';//19

export const Campsites = (state = {//20
    isLoading: true,
    errMess: null,
    campsites: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES: //21
            return { ...state, isLoading: false, errMess: null, campsites: action.payload };
        case ActionTypes.CAMPSITES_LOADING://22
            return { ...state, isLoading: true, errMess: null, campsites: [] };
        case ActionTypes.CAMPSITES_FAILED://23
            return { ...state, isLoading: false, errMess: action.payload }
        default:
            return state;
    }
};