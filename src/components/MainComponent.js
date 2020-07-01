/*1. create a file called contactus component and create a function 
2.  in main component, create a route for contact us. . we don't need to use the state data so we don't need render syntax like directory
3. download three files to the shared folder. Each file has an object featurd that is set to property true
4. Import contactus compoenent, partners, comments, promotion to main component. Then add them into this.state.
5. in variable homepage, we pass three props: campsite, promotion and partner. We use the filter message to retrieve the data. Featured is a property. The one with value true will be returned. We return only one index. So, we use [0]
6. Arrow function inherit this from the parent scope. That's why we use it instead of function in hompage. 
7. In HomeComponent, create a function called RenderCard with item as param. 
8. In this function, we create a card element which has card image, card title, card text
9. In Function Home, we pass the render RenderCard function and info we want from each file with featured as true in shared folder. 
}
*/
import React, { Component } from 'react';
import Directory from './DirectoryComponents';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;