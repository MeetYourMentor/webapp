// import logo from './logo.svg';
import React, { useEffect, useState, useCallback } from 'react';
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import { getMe, getMyPhoto } from './graph/api';
import {loginRequest} from './authentication/config';
import { Person } from '@microsoft/mgt-react';

function WelcomeUser() {
  const { accounts } = useMsal();
  console.log('accounts ', accounts)
  const username = accounts[0].name;

  return <p>Welcome, {username}</p>
}

interface ProfileData  {
  data: {} | null,
  photo: {}| null
}

const personDetails = {
  displayName: 'Nikola Metulev',
  mail: 'nikola@contoso.com',
  personImage: 'https://i.picsum.photos/id/191/100/100.jpg?hmac=pemmPV2vXzPN8h_ona4f7TI67NwAvroAWZqA2ZwyPD4'
}

const App= (): React.FunctionComponentElement<any> => {
  const [profile, getProfile] = useState<ProfileData>({
    data: {}, photo:{}
  });
  
  const { instance, accounts } = useMsal();

  const getProfileData = useCallback(async () => { 
    console.log('accounts ', accounts)
    if(accounts.length>0){
      const response = await instance.acquireTokenSilent({
              ...loginRequest,
              account: accounts[0]
      });
      const graphData: ProfileData = {data:{},photo:{}};
      console.log('token', response.accessToken)

      if(response.accessToken){
        graphData.data = await getMe(response.accessToken)
        graphData.photo = await getMyPhoto(response.accessToken)
      }

      getProfile(graphData)
    }
  }, [accounts])

  useEffect(()=>{
    getProfileData()
  },[])

  return (
   <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <Router>
        <div className="App">
            <nav className="App-header">
              <div className="App-header-content">
                <p className="App-text">Meet your mentor</p>
                <div className="App-persona">
                  <Person personDetails={personDetails}/>
                </div> 
              </div>
            </nav>
            <Routes />
        </div>
      </Router>
    </MsalAuthenticationTemplate >
  );
}

export default App;
