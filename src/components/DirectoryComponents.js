import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props); // use this we don't need to add this.props
        this.state = {// state is a react property which always hold an object in this case is array of object(used to represent the data). this.state store the data 
            campsites: [
                {
                    id: 0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                    id: 1,
                    name: 'Chrome River Campground ',
                    image: 'assets/images/chrome-river.jpg',
                    elevation: 877,
                    description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ],
        };
    }e
    render() {// in react we need to return react elements, we ned to use a special method called render 
        const directory = this.state.campsites.map(campsite => { // this variable contains array of elements. If we pull the array. If will pull up everything. We need to make specification from each photo
            return (//we need to give a key to JSX 
                <div key={campsite.id} className="col"> 
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            )
        })
        return (//in JSX {directory} to call the variable we need to use curly braces around the variable name
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <ExampleParentComponent /> */}
            </div>
        );
    }
}

/* example of parent-child component; the outcome is 333 hello world. we render the class in the Directory class. 
class ExampleParentComponent extends Component{
    constructor (props){
     super(props);
     this.state = {
         number:333
     }
    }
    render(){
    return <ExampleChildComponent number = {this.state.number} greeting = "Hello World"/>;
    }
}
class ExampleChildComponent extends Component {
    render(){
    return <div>{this.props.number} {this.props.greeting}</div>
    }
}
*/ 

export default Directory;