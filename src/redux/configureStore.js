/* Redux thunk
1. Install Redux thunk and redux logger

configureStore.js
2. import applyMiddleware from the redux
3. Import redux think and logger
4. To use thunk and logger, use applyMiddleware and pass thunk and logger in it. 

ActionTypes.js
5. Adding three more action types
6. First: CAMPSITES_LOADING will be when our app is loading the the campsite data, it hasn't received the data yet. It just made the request and is waiting the response.
7. Second: CAMPSITES_FAILED is when the server request failed and we are unable to load the data. Then, this action will let redux store knows that. So, the state can update to show the error message. 
8. Third: ADD_CAMPSITES is when the campsite data has been successfully retrieved from the server and successfully added to the state.  

ActionCreators.js
9. We need to usee redux thunk to make an asynchronous request to the server
10. Since we haven't set up the server, we just pretend that we are talking to the server by using a brief setTimeOut
11. After the delay we will add the data to the state. 
12. Import CAMPSITES data into this file, so we can use in server simulation
13. Create an action creator fetchCampsites and use redux thunk syntax to enable the nested function and use dispatch()method to dispatch different action CampsitesLoading.
14. Use setTimeOut to stimulate the delay 2000 miliseconds
15. Create another action creator campsitesLoading. This has only one arrow which is a standard action creator that just returns an action object but nothing else. 
16. In this action creator, there is no payload, we will give only type. Since its is not thunk, there is no interception, it will go straight to the reducer as normal. 
17. Next add another action creator campsitesFailed to create an action for campsites failed. This action will have an action and payload. 
18. Create another action creator addCampsites with an action and also payload as campsite array. 

redux/campsites.js
19. we no longer need to import campsites data from shared/campsite, but we need to import it from action. So, we remove this import
20. Change state inside the Campsites adding three properties: boolean isLoading and errMess null and campsite array. 
21. Add responses to campsite by using case statement. For ADD_CAMPSITES ActionTypes, we return a new state that consists of a previous state spread out, update value to say no longer loading, if no error message campsites will be populated with the payload. 
22. Add another case for Campsites_loading action type, update the state to say if loading is true, error message is null, campsites is an empty because we haven't finished adding the campsite. 
23. Add another case for campsite_failed, we set isLoading to false, errMess to the action.payload. We don't need to update campsite array.

LoadingComponent.js
24. create a new file LoadingComponent.js
25. Import React 
26. Create a function component that return the font awesome spinner. and text say loading. 

MainComponent.js
27. Import fetchCampsite by adding it to the existing import actionCreators
28. add to mapDispatchToProps object the fetchCampsites. Now it's available as Props. 
29. When we want to fetch the campsite data as soon as the main component is rendered to the DOM. We need to use a special method called componentDidMount() which is a lifecycle method. 
30. Every React component has a lifecycle, meaning at a certain its created, inserted, updated, and removed from the DOM.
31. Change the campsite props that we passed in HomeComponent. Before it holds only campsite array, now its holding the isLoading & errMess. Add campsite. 
32. We need to add another isLoading property and error message as props: campsitesLoading, campsitesErrMess
33. in function CampsiteWithId, we add another campsites and pass isLoading and errMess.

HomeComponents.js
34. Import loading component
35. In renderCard, add isLoading and errMess as parameter.
36. Set up some logic, if isLoading is truthy, return loading component
37. if errMess is truthy, return {errMess}
38. Update Home function, pass isLoading and errorMess prop to renderCard component as mainComponent pass it to home

CampsiteInfoComponent.js 
39. Import loading component
40. add a couple of if statements in function CampsiteInfo for isLoading and errMess

DirectoryComponent.js
41. import loading component
42. get campsite by adding campsite into directory function. 
43. Add if statements in function CampsiteInfo for isLoading and errMess
*/

import { createStore, combineReducers, applyMiddleware } from 'redux';//2
import thunk from 'redux-thunk';//3
import logger from 'redux-logger';//3
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger) //4
    );
    return store;
};