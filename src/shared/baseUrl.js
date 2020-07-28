/*Exercise: Fetch from server
shared
1. run JSON server 
2. create a file baseUrl.js and add a configuration setting we can use in other files. Create export cost local cost. 

Redux/actiontype.js
2. Add five new actions type: ADD_COMMENTS, COMMENTS_FAILED, PROMOTIONS_LOADING,ADD_PROMOTIONS,PROMOTIONS_FAILED

Redux/actioncreator.js
3. Import baseUrl
4. for fetchCampsites action creator, we replace the setTimeOut that simulates the server delay with the call to fetch baseURL for the json server + campsites the location we want for the campsite data
5. change then method. Call to fetch return a promise. when promise is resolved, then method will use json method to convert the response from  JSON to javascript(array of campsite)
6. we can change another then method, grab the javascript array when the promise is resolved, dispatch addCampsite action creator to be used as payload with campsite as argument 
7. add a new action creator to fetch comment using the the thunk action creator. Set up fetch call for comment similar to the fetchCampsite. create the rest action creator.

Redux/comments.js
8. Delete the import COMMENT 
9. We don't want to return comments array anymore, we want to return an object containing errMess initialized to null and comments initialized to empty array
10. Add two more cases, ADD_COMMENT will return the previous state, errMess and comment from action.payload
11. COMMENT_FAILED case will return the previous state and errMess
12. comment.id will no longer be state.length  because the comment is stored in comments object so we need to add comments into state.comments.length
13. We can't concat the comment to the end anymore, we need to spread the previous state and add the comments property.

Redux/promotions.js
14. Delete the import PROMOTIONS 
15. We don't want to return promotions array anymore, we want to return an object containing isLoading initialized to true, errMess initialized to null, promotions initialized to empty array
16. Add three cases similar to comments.js

components/maincomponents.js
17. import fetchComments and FetchPromotions from actioncreator.js
18. add the two imported action creators to mapDispatchToProps
19. in the componentDidMount, add the action creators
20. in Home Component, we add promotions which points to promotion object
21. Add to more props: promotionLoading and promotionErrMess
22. In campsiteInfo, add comments into the comments props
23. Pass commentsErrMess

components/DirectoryComponent.js
24. Import baseUrl
25. Add baseUrl to cardImg to pull photos from the server 

components/HomeComponent.js
26. Import baseUrl
27. Add baseUrl to cardImg to pull photos from the server 
28. add isLoading and errMess to the renderCard for promotions

components/CampsiteInfoComponent.js
29. Import baseUrl
30. Add baseUrl to cardImg to pull photos from the server 
*/

export const baseUrl = 'http://localhost:3001/'; //1,2