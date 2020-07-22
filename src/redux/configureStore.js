import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';//3
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { InitialFeedback } from './forms';//4

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({//5
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};