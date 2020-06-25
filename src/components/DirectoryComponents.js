import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({ campsite, onClick }) { //1. create a function because there is no constructor and state in this component.
    return (//2. bring card element from render in the class to function return & remove this.prop from this.props.onClick(campsite.id)} as function component doesn't need this
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle> {campsite.name} </CardTitle>
            </CardImgOverlay>
        </Card>);
}
function Directory(props) { //3. this is the main function that stores other functions and we need to call others function in this function 
    const directory = props.campsites.map(campsite => { //4. remove this.pops... as function doesn't need this
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
            </div>
        );
    })
    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;