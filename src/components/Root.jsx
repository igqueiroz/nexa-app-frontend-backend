import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import GeoLocation from "./GeoLocation";
import UsersList from "./UsersList";
import { Route } from "react-router-dom";


export default function Root(props) {
    return (
        <React.Fragment>
            <Header />
    		<Route exact path="/" component={Home} />
    		<Route path="/geolocation" component={GeoLocation} />
    		<Route path="/about" component={About} />
    		<Route path="/users" component={UsersList} />
            <Footer/>
        </React.Fragment>
    );
}

