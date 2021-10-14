
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { RegisterMentor } from "./RegisterMentor";
import { MentorProfile } from "./MentorProfile";
import { Home } from "./Home";
import history from './history';
import { MentorViewProfile } from "./MentorViewProfile";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Register" component={RegisterMentor} />
                    <Route path="/Profile" component={MentorProfile} />
                    <Route path="/ViewProfile" component={MentorViewProfile} />
                </Switch>
            </Router>
        )
    }
}
