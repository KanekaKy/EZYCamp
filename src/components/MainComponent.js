import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponents';
import { CAMPSITES } from '../shared/campsites'; //1. use two dots if we want it to go down one directory 
import CampsiteInfo from './CampsiteInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null 
        };
    }
    onCampsiteSelect(campsiteId) { 
        this.setState({selectedCampsite:campsiteId}); 
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">EzyCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick = {campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite= {this.state.campsites.filter(campsite =>campsite.id === this.state.selectedCampsite)[0]} />
            </div>
        );
    }
}

export default Main;