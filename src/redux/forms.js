/*  React-Redux-Form Revisited
1. create a file forms.js
2. export an object that whole initialstate of the form and use it to reset the form later

ConfigureStore.js
3. Import createForms from react-redux-form
4. import initialfeedback object
5. Use both imported resources in combineReducers to set up a reducer for feedbackForm

MainComponent.js
6. import actions, so action creator action.reset available to us. 
7. in mapDispatchToprops, create a function resetFeedbackForm and add action.reset with value feedbackform
8. in Route, pass resetFeedbackForm function as a props. So, we need to change Router contactus to render attribute. 

contactComponent.js
9. change from import LocalForm to Form and add actions
10. in HandleSubmit method, we need to pass resetFeedbackForm function as a method of the props. 
11. change rom LocalForm to Form and add a model ="feedbackForm"
*/

//1
export const InitialFeedback = {//2
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    agree: false,
    contactType: 'Phone',
    feedback: ''
};