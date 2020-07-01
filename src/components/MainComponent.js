/*
1. In Directory component, import Link from react router DOM. 
2. Use link to link to the directory with ID number
3. In Main component, we need to add another route '/directory/:campsiteID'. The colon(:) tells route what follows after the / is the parameter. CampsiteID is the property that store value of parameter directory 
4. This format create 'match' object and 'params'
5. We create a function called CampsiteWithId with match as the object. 
6. Inside the return, we will return Campsite info by using the filter method. We want to return something that has the campsite ID match the param of the property campsiteId. 
7. for + match.params.campsiteId, + is the unary plus operator. When we have a string that we want to convert as a number, we can add + in front of that string. 
8. In CampsiteInfo component, remove the campsite from this.campsite.comments => this.comments because we moved the comments out of the campsite object. 
*/

import React, { Component } from 'react';
import Directory from './DirectoryComponents';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import CampsiteInfo from './CampsiteInfoComponent';
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
        const CampsiteWithId = ({ match }) => { //4,5,6,7
            return (
                <CampsiteInfo
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };

        return (//3
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} /> 
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;