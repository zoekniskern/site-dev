import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from './components/Projects';

import { 
    BrowserRouter as Router,
    Route,
} from "react-router-dom";


ReactDOM.render(
    <Router>
        <div className="row">
            <div className="col-md-4 left">
                <div className="container">
                    <Route path="/" component={App} />
                </div>
            </div>
            <div className="col-md-8 right">
                <div className="container">
                    <Route exact path="/" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
        </div>
    </Router>, 
    document.getElementById('root')
);

