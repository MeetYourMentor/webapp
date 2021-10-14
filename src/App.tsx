import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import './App.css';
import { SearchMentor } from './components/SearchMentor';

function WelcomeUser() {
    const { accounts } = useMsal();
    console.log('accounts ', accounts)
    const username = accounts[0].name;

    return <p>Welcome, {username}</p>
}

function App() {
    return (
        <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
            <div className="App">
              <WelcomeUser />
              <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                  Meet your mentor
                </p>
                <SearchMentor/>
              </header>
            </div>
        </MsalAuthenticationTemplate>
      )
};

export default App;
