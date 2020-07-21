/* Redux action
1. Create two new files in redux folder: ActionTypes & ActionCreators

ActionTypes.js
2. Create a variable ADD_COMMENT and set the value to the string 'ADD_COMMENT and export it. 

ActionCreators.js
3. Import from the ActionTypes using a wildcard(* as) that let us import all the main export from the ActionTypes at once. 
4. Define an action creator function AddComment. We need to pass in all values needed for comment: campsiteID, rating, author, text)
5. We set up this actioncreator to return a type
6. ActionTypes.ADD_COMMENT: this allow us to access the ADD_COMMENT export that we define in ActionTypes
7. payload: we pass in campsiteId, rating, author, text

Redux/comments.js
8. import from the actiontypes using the wildcard syntax
9. In the switch statement, we add a case when actiontypes.addcomment is true. It will return:
10. Create a variable comment to store action.payload whose content of action is an object. 
11. Add more properties to the object. Add comment.id which is the length of comment array that stores part of the state. 
12. We also add today date
13. return new state by using array concat method that allows us to attach new item to the end of array without changing the current array. We can't use push because it will mutate the original array. In this case it will add new comment to the end of array and return new state to the redux store. 

MainComponent.js: dispatch action
14. import addComment from actionCreators
15. Create mapDispatchToProps object and set one property addComment and use campsiteId, rating, author and text as values. For the arrow function body we use the actionCreator data to pass the value 
16. Add mapDispachToProps inside the connect function as the second argument
17. In render method of main, pass the upcoming function as a props. 

CampsiteInfoComponent.js:
18. Update CampsiteInfo Component to use the addComment function, insert addComment and CampsiteId as props.
19 In renderComments, we use object destructuring to grab the props addComment and CampsiteId, we need to insert addComment, campsiteId. 
20. In commentForm, we pass campsiteId and addComment. 
21. Add this.props.addComment....in handleSubmit, when form is submitted, the addComment action creator will create an action using the value from the form 
22. The action will get dispatch to the reducer which will update the state. 
23. Remove console.log & alert
*/
//1,2
export const ADD_COMMENT = 'ADD_COMMENT';
