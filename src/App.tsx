// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { RegisterMentor } from './components/RegisterMentor';

class App extends React.Component<any, any> {  
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
  <div className="App">
      <nav className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="App-text">Meet your mentor</p>
      </nav>
      <RegisterMentor />
    </div>
  );
}
}

export default App;
