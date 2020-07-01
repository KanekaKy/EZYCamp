import React, { Component } from 'react';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';//after installing react router we import it 
import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;