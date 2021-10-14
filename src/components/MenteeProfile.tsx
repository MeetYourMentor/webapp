import * as React from 'react';
import './Mentor.css';
import history from './history';
import { Persona, PersonaPresence, PersonaSize, Text } from 'office-ui-fabric-react';
import { PrimaryButton } from '@fluentui/react';

type State = {
    mentor: {
        Name: "Devina Sachin Dhuri",
        Location: "Redmond",
        Email: 'dedhuri@microsoftgraph.com',
        Role: "Software Engineer"
    }
};

export class MenteeProfile extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            mentor: {
                Name: "Devina Sachin Dhuri",
                Location: "Redmond",
                Email: 'dedhuri@microsoftgraph.com',
                Role: "Software Engineer"   
            }
        };
    }
    
    public render(): React.ReactElement {
        return (
            <div className="presentationMentee">
                <div className="persona">
                    <Persona 
                        className="personaCard"
                        text={this.state.mentor.Name}
                        secondaryText={this.state.mentor.Role}
                        tertiaryText={this.state.mentor.Location}
                        optionalText={this.state.mentor.Email}
                        presence={PersonaPresence.online}
                        size={PersonaSize.size120}
                    />
                    <PrimaryButton className="profileMentee" type="button" onClick={() => history.push('/SearchMentor')}>Schedule</PrimaryButton>
                </div>
                <div className="leftSection">
                    <h3>Experience</h3>
                    <Text>2 years.</Text>
                    <h3>Education</h3>
                    <Text>State University of New York, Binghamton</Text>
                    <h3>Language</h3>
                    <Text>English, Spanish, Hindi.</Text>

                    <h3>Super Skills</h3>
                    <ul>
                        <li>Front End Development</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Networking</li>
                    </ul>  

                    <h3>Other Skills</h3>
                    <ul>
                        <li>Time Management</li>
                        <li>Interviewing Tips</li>
                        <li>Leading</li>
                    </ul>  

                </div>
                <div className="rightSection">
                    <h3>About me</h3>
                    <Text> I am Devina and I am a Computer Science Grad Student from SUNY.I write code for a living.
                        I am composed of 68% water and 2% coffee. <br/>
                        Along with coding, I also have a deep interest in cinema and dancing.
                        I love cooking and eating too, so I bet I would be a great company. <br/>
                        And I am always up for a great conversation. 
                    </Text>

                    <h3>Career Level</h3>
                    <Text>IC1</Text>
                    <h3>ERG (if any)</h3>
                    <Text>-</Text><br/>
                    <Text>No Employee Resource Group Recorded</Text>
                    
                </div>
                <PrimaryButton className="profileMentee"  type="button" onClick={() => history.push('/RegisterMentee')}>Edit your profile</PrimaryButton>
            </div >
        );
    }
}