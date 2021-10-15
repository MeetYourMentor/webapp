import * as React from 'react';
import './Mentor.css';
import history from './history';
import { Persona, PersonaPresence, PersonaSize, Text } from 'office-ui-fabric-react';
import { IDropdownOption, PrimaryButton, TimeConstants } from '@fluentui/react';
import { ScheduleModal } from './Modals/ScheduleModal';
import { SuccessModal } from './Modals/SuccessModal';
import { createFalse } from 'typescript';

type State = {
    mentor: {
        Name: "Lavanya Kasarabada",
        Location: "Redmond",
        Email: 'lkasara@microsoftgraph.com',
        Role: "Senior Program Manager"
    },
    showScheduleModal: boolean,
    isScheduleModalOpen: boolean,
    isSuccessModalOpen: boolean
};


export class MentorProfile extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            mentor: {
                Name: "Lavanya Kasarabada",
                Location: "Redmond",
                Email: 'lkasara@microsoftgraph.com',
                Role: "Senior Program Manager"   
            },
            showScheduleModal: false,
            isScheduleModalOpen: false,
            isSuccessModalOpen: false
        };
    }

    private _getGroupDropdownOptions = (): IDropdownOption[] => {
      return [{ text: "9:00 AM", key: TimeConstants.HoursInOneDay},
        { text: "10:00 AM", key: TimeConstants.HoursInOneDay},
        { text: "10:30 AM", key: TimeConstants.HoursInOneDay},
        { text: "1:00 PM", key: TimeConstants.HoursInOneDay},
        { text: "1:30 PM", key: TimeConstants.HoursInOneDay},
        { text: "3:00 PM", key: TimeConstants.HoursInOneDay},
        { text: "5:00 PM", key: TimeConstants.HoursInOneDay}
      ] as IDropdownOption[]
    }
    
    public showSchedule = (): void => {
      this.setState({ showScheduleModal: true, isScheduleModalOpen: true });
    }
    
    public render(): React.ReactElement {
        return (
            <div className="presentationMentee">
                <div className="personaMentee">
                    <Persona 
                        className="personaCard"
                        text={this.state.mentor.Name}
                        secondaryText={this.state.mentor.Role}
                        tertiaryText={this.state.mentor.Location}
                        optionalText={this.state.mentor.Email}
                        presence={PersonaPresence.online}
                        size={PersonaSize.size120}
                    />
                    <PrimaryButton className="profileMentee" type="button" onClick={this.showSchedule}>Schedule</PrimaryButton>
                    <ScheduleModal
                        isScheduleModalOpen={this.state.isScheduleModalOpen}
                        hideScheduleModal={true}
                        hideScheduleModalShowSuccessModal={false}
                        times={this._getGroupDropdownOptions()}
                        mentor={this.state.mentor}
                    />
                </div>
                <div className="leftSection">
                    <h3>Experience</h3>
                    <Text>14 years.</Text>
                    <h3>Education</h3>
                    <Text>State University of New York, Binghamton</Text>
                    <h3>Language</h3>
                    <Text>English, Spanish, French.</Text>

                    <h3>Super Skills</h3>
                    <ul>
                        <li>Front End Development</li>
                        <li>Back End Development</li>
                        <li>CSS</li>
                        <li>Networking</li>
                        <li>UX Research</li>
                        <li>UX Design</li>
                    </ul>  

                    <h3>Other Skills</h3>
                    <ul>
                        <li>Time Management</li>
                        <li>Interviewing Tips</li>
                        <li>Leading</li>
                        <li>Conflict resolution</li>
                        <li>Diversity and inclusion at workplace</li>
                    </ul>  

                </div>
                <div className="rightSection">
                    <h3>About me</h3>
                    <Text> I am Lavanya and I am a PM working at Microsoft.
                        I am composed of 68% water and 2% coffee. <br/>
                        Along with coding, I also have a deep interest in cinema and dancing.
                        I love cooking and eating too, so I bet I would be a great company. <br/>
                        And I am always up for a great conversation. 
                    </Text>

                    <h3>Career Level</h3>
                    <Text>IC4</Text>
                    <h3>ERG (if any)</h3>
                    <Text>-</Text><br/>
                    <Text>No Employee Resource Group Recorded</Text>
                </div>
            </div >
        );
    }
}