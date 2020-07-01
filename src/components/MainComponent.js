/*1. install the react router dom
2. Import { BrowserRouter } from react-router-dom
3. chang the app.js and index.js using BrowserRouter to wrap around the components
4. create the home component 
5. creat a home page function inside the class 
6. use Switch to group route components together. Route to each page component that we want to display
7. Import Navlink  from react router dom and update header component
8. Remove campsiteinfo and remove onClick handler. Set up router logic. We set up three routes. One going to the home. 
9. act as default keyword. If nothing is selected it will go to home. 
10.Update Header component by setting constructor and super with the props as property
11. Create this.state as object with isNavOpen as a property initialized to to false
12. In HeaderComponent, create a method called toggleNav. This method will set a new state. We need to make the property isNavOpen not equal this.state.isNavOpen
13. In the same component constructor, create an objet for toggleNav called this.toggleNav = this.toggleNav.bind(this). reates a new function that will force the this inside the function to be the parameter passed to bind()
14. Update the Navlink for both header and footer.
15. Removed previous onClick
*/
import React, { Component } from 'react';
import Directory from './DirectoryComponents';
import { CAMPSITES } from '../shared/campsites'; //1. use two dots if we want it to go down one directory 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component { // remove clicking and selected campsite and the event handler 
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    render() {

        const HomePage = () => { //create a locally scoped component
            return (
                <Home />
            );
        }

        return (// remove campsiteinfo and remove onClick handler. Set up router logic. We set up three routes. One going to the home. // act as default keyword. If nothing is selected it will go to home. 
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Redirect to='/home' /> 
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;