import * as React from 'react';
import { PrimaryButton } from '@fluentui/react';
import history from './history';
import "./Home.css";

const text1 = "Meet Your Mentor is a great way to find the right Mentor based on the superpower  you are looking for."
const text2 = "We have a curated set of mentors with unique “superpowers”."
const text3 = "Mentees can choose the right mentor based on the superpower they want to acquire"
const text4 = "Click below to register either as a mentor or mentee or both!"

export class Home extends React.Component<any, any> {
    render() {
        return (
            <div className="Home">
                <div className="Home-header">
                    <p className="Home-text">Meet your mentor</p>
                    <div className="Home-text-2">
                        <div>{text1}</div>
                        <div>{text2}</div>
                        <div>{text3}</div>
                        <div>{text4}</div>
                    </div>
                </div>
                <PrimaryButton className="regBut" onClick={() => history.push('/Register')}>Click button to register as Mentor</PrimaryButton>
            </div>
        );
    }
}