// import logo from './logo.svg';
import React from 'react';
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import './App.css';
import { RegisterMentor } from './components/RegisterMentor';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        <div className="App">
          <nav className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p className="App-text">Meet your mentor</p>
          </nav>
          <RegisterMentor />
        </div>
      </MsalAuthenticationTemplate >
    );
    function WelcomeUser() {
      const { accounts } = useMsal();
      console.log('accounts ', accounts)
      const username = accounts[0].name;

      return <p>Welcome, {username}</p>
    }
  }
}

export default App;
