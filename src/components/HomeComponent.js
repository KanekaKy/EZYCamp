/*React Animation Components
1. Install PropsType and React Animation components
homecomponent.js
2. Import FadeTransform from reawct animation components
3. Add fadetransform into the card component. Add in attribute is a boolean that tells components to render transition when being mounted. That has the transition from the initial scale 50% to the normal value. It also creates pop affect an moves vertically. 
4. There are two {{}} to create the object because the first one allows us to embed JS inside JSX

campsiteinfocomponent.js
5. import fadetransform, stagger, fade
6. Apply the same fadetransform effect to the card component 
7. Stagger component works on a group of elements. Provide in the boolean attribute.
8. Apply fade effect and requires 'in' boolean attribute as well
*/

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components'; //1,2

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>
    }
    return (//3,4
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale (0.5) translateY(50%)'
            }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    <CardText>
                        {item.description}
                    </CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard
                        item={props.campsite}
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        item={props.promotion}
                        isLoading={props.promotionLoading}
                        errMess={props.promotionErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;   