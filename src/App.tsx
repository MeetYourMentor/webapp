// import logo from './logo.svg';
import React from 'react';
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import './App.css';
import { MentorViewProfile } from "./components/MentorViewProfile";
// import { RegisterMentor } from './components/RegisterMentor';

function WelcomeUser() {
  const { accounts } = useMsal();
  console.log('accounts ', accounts)
  const username = accounts[0].username;

  return <p>Welcome, {username}</p>
}

function App() {
  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <p>This will only render if a user is signed-in.</p>
      <WelcomeUser />
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Meet your mentor
          </p>
          {/* <RegisterMentor /> */}
          <MentorViewProfile />
        </header>
      </div>
    </MsalAuthenticationTemplate>
  )
};

export default App;
