import * as ActionTypes from './ActionTypes';//14

export const Promotions = (state = {//15
    isLoading: true,
    errMess: null,
    promotions: []
}, action) => {
    switch (action.type) {//16
        case ActionTypes.ADD_PROMOTIONS:
            return { ...state, isLoading: false, errMess: null, promotions: action.payload };

        case ActionTypes.PROMOTIONS_LOADING:
            return { ...state, isLoading: true, errMess: null, promotions: [] }

        case ActionTypes.PROMOTIONS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};