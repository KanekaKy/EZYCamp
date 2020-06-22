import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        selectedCampsite: null //2.this property will keep track all of the property was last selected by the user. The current vale is null as we haven't selected anything yet.
        };
    }
onCampsiteSelect(campsite) { //3.create a method to triger the selection of campsite. 
    this.setState({selectedCampsite:campsite}); //4. in react we can't update the state directly. Only in constructor that we can change state. in this case, we use setState method is used to update the DOM properly. 
}
renderSelectedCampsite(campsite){ // 6. this method is created to display info after the campsite is selected. 
    if (campsite) { //7.check if campsite array exists, if true will return image, name and description
        return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    return <div />; //8. if false, will return an empty div
}
    render() {
        const directory = this.props.campsites.map(campsite => { // 1.We change this.state to this.props after creating a class with props in app.js
            return (//5. triger the oncampsite method and passing the props campsite
                <div key={campsite.id} className="col-md-5 m-1"> 
                    <Card onClick = {() => this.onCampsiteSelect(campsite)}> 
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle> {campsite.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return ( //9. {this.renderSelectedCampsite(this.state.selectedCampsite)} is used to retutn the selected campsite. 
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)} 
                    </div>
                </div>
            </div>
        );
    }
}



export default Directory;