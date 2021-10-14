import * as React from 'react';
import { PrimaryButton } from '@fluentui/react';
import history from './history';
import "./Home.css";

export class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <nav className="Home-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p className="Home-text">Meet your mentor</p>
                </nav>
                <PrimaryButton className="regBut" onClick={() => history.push('/Register')}>Click button to register as Mentor</PrimaryButton>
            </div>
        );
    }
}