/*
1. Inside redux folder, create four files: campsites.js, comments.js, partners.js, promotions,js
Inside each newly-created file:
2. import Campsite from campsite shared folder
3. add a reducer function to handle each part of the state. Using export and give it a name. In this case we give Campsites as a name. 
4. all reducer takes two parameters: state(take previous state or existing or current state already in the store and going to be changed by the reducer). 
5. The first time the reducer is called, the state will not exist. We use default function parameter syntax(CAMPSITES) from the imported data to initialize the state
6. The second parameter is action object. 
7. The body of the function will check for the type of action using switch statement. The default case is to return the state. 
ConnfigureStore.js
8. CreateStore function will accept only one reducer. So, we will use combineReducers and remove Import Reducer as we no longer use it. 
9.  Import Campsite,Partners, Promotions and Comments that we just created. 
10. Replace Reducer and initialState with combineReducers and pass all reducers as properties: campsites, comments, partners and promotions
11. Delete reducer.js
*/
//8
import { createStore, combineReducers } from 'redux'; 
//9
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {//10,11
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );
    return store;
};