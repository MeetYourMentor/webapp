
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import history from './history';
import { RegisterMentor } from "./RegisterMentor";
import { MentorViewProfile } from "./MentorViewProfile";
import { SearchMentor } from "./SearchMentor/SearchMentor";
import { RegisterMentee } from "./RegisterMentee";
import { MenteeProfile } from "./MenteeProfile";

export class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/RegisterMentor" component={RegisterMentor} />
                    <Route path="/RegisterMentee" component={RegisterMentee} />
                    <Route path="/ViewProfile" component={MentorViewProfile} />
                    <Route path="/SearchMentor" component={SearchMentor} />
                    <Route path="/MenteeProfile" component={MenteeProfile} />
                </Switch>
            </Router>
        )
    }
}
