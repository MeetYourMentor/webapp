// import logo from './logo.svg';
import React from 'react';
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './components/Routes';

function WelcomeUser() {
  const { accounts } = useMsal();
  console.log('accounts ', accounts)
  const username = accounts[0].name;

  return <p>Welcome, {username}</p>
}

class App extends React.Component<any, any> {
 

  render() {
    return (
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        <Router>
          <p>This will only render if a user is signed-in.</p>
          <WelcomeUser />
          <div className="App">
            <nav className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <p className="App-text">Meet your mentor</p>
            </nav>
            <Routes />
          </div>
        </Router>
      </MsalAuthenticationTemplate >
    );
  }
}

export default App;
