/*
*reducer folder
** redux
1. create a new folder called redux to move the reponsibility from maincomponent to redux. 
2. create a file reducer.js to create and update state. Import campsite, comments, partners, promotion.
3. Create an object called initialState which will be the initial state of our app to get the info from the data files. 
4. create a reducer function. If there is no state passed in, it will default to the initialState. It also has action as a parameter and return state that passed in. 
5. add export to the two variables because we need to access it form another files. 
** ConfigureStore.js
6. in Redux folder, create configureStore.js file, import createStore from redux and reducer and initialState from reducer file. 
7. make a name export const configureStore with arrow function. Inside this function we will create store variable with createStore from redux. We will pass to it reducer and initialState. This function will return store. 
}
*App.js
8. import Provider and ConfigureStore.js which return store. 
9. Capture store in app.js by create a store variable and equalize it to ConfigureStore function as it returns store. 
10. in the App component, wrap everything in Provider and give store as an attribute, so redux store is available to all connected components. 
*MainComponent
11. need to add to two new import, withRouter from react-router-dom and connect from react-redux
12. No need import from campsite, partner, comments, and promotions. So, we remove these imports and also constructors from Main. 
13. Set a variable mapStateToProps to grab info from redux. Take state as an argument and return campsites, comments,partners and promotions array as props
14. change the occurances of state to props in main. 
15. We need to set up export by adding the connect method. We will first have mapStateToProps and then Main. It allows us to get info from redux store. 
16. Use withRouter to wrap connect if we want to continue using react-router. 
*/

//1, 2
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {//3,5
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};
export const Reducer = (state = initialState, action) => { //4,5
    return state;
};