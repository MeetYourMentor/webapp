import * as React from 'react';
import './Mentor.css';
import { Dropdown, IDropdownOption, PrimaryButton, Text, TextField } from '@fluentui/react';
import { Person } from '@microsoft/mgt-react';
import history from './history';

// import RoomIcon from '@material-ui/icons/Room';

var arr: string[] = [];

type State = {
    description?: string;
    experience?: string;
    role?: string;
    school?: string;
    mentee?: string;
    topSkills?: string[];
    skills?: string[];
};

export class RegisterMentor extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            description: "",
            experience: "1",
            role: "",
            school: "",
            mentee: "0",
            topSkills: [],
            skills: []
        };
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
    }


    private _getMenteesDropdownOptions = (): IDropdownOption[] => {
        return [{
            key: '1',
            text: '1'
        },
        {
            key: '2',
            text: '2'
        },
        {
            key: '3',
            text: '3'
        }
        ] as IDropdownOption[]
    }
    private _getTopSkillsDropdownOptions = (): IDropdownOption[] => {
        return [{
            key: 'fe',
            text: 'Frontend Development'
        },
        {
            key: 'be',
            text: 'Backend Development'
        },
        {
            key: 'pm',
            text: 'Project Management'
        },
        {
            key: 'ux',
            text: 'UX Design'
        },
        {
            key: 'research',
            text: 'Research'
        }
        ] as IDropdownOption[]
    }
    private _getSkillsDropdownOptions = (): IDropdownOption[] => {
        return [{
            key: 'tm',
            text: 'Time management'
        },
        {
            key: 'em',
            text: 'Effective meetings'
        },
        {
            key: 'cr',
            text: 'Conflict resolution'
        },
        {
            key: 'cc',
            text: 'Career change',
        },
        {
            key: 'leading',
            text: 'Leading without authority'
        }
        ] as IDropdownOption[]
    }

    public onDropdownChangeTopSkills = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item && this.state.topSkills) {
            if (item.selected) {
                arr.push(item.key as string);
              }
              else {
                arr.indexOf(item.key.toString()) !== -1 && arr.splice(arr.indexOf(item.key.toString()), 1);
              }
            }
            this.setState({ topSkills: arr });
    }
    public onDropdownChangeSkills = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item && this.state.skills) {
            if (item.selected) {
                arr.push(item.key as string);
              }
              else {
                arr.indexOf(item.key.toString()) !== -1 && arr.splice(arr.indexOf(item.key.toString()), 1);
              }
            }
            this.setState({ skills: arr });
    }
    public onDropdownChangeMentees = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item && this.state.mentee) {
            this.setState({ mentee: item.key as string });
        }
    }

    onChangeDescription = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        this.setState({ description: newValue });
    };
    onChangeRole = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        this.setState({ role: newValue });
    };
    onChangeSchool = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        this.setState({ school: newValue });
    };
    onChangeExperience = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        this.setState({ experience: newValue });
    };

    public render(): React.ReactElement {
        const { experience, role, topSkills, mentee } = this.state;

        const personDetails = {
            displayName: 'Nikola Metulev',
            mail: 'nikola@contoso.com',
            personImage: 'url'
        }
        return (
            <div className="presentation">
                <h1>Register as a mentor</h1>
                <Text>A great mentor-mentee relationship can be really important in developing your career and being a mentor can be really fulfilling and impactful.<br />
                    Let's get these people together to form amazing mentor-mentee relationships!</Text>
                <div className="person">
                    <Person personDetails={personDetails}></Person>
                </div>
                <div className="information">
                    <div className="information-section">
                        <TextField label="Tell us about yourself" onChange={this.onChangeDescription} />
                    </div>

                    <h4>Experience</h4>
                    <div className="information-section">
                        <TextField label="Number of years of experience" required onChange={this.onChangeExperience} />
                    </div>
                    <div className="information-section">
                        <TextField className="secondBox" label="Current role and Organization" required onChange={this.onChangeRole} />
                    </div>

                    <h4>Education</h4>
                    <div className="information-section">
                        <TextField label="School name" onChange={this.onChangeSchool} />
                    </div>

                    <h4>Skills</h4>
                    <div className="information-section">
                        <Dropdown
                            placeholder="Select upto 3 skills"
                            defaultSelectedKeys={this.state.topSkills}
                            label="What are your top primary skills?"
                            multiSelect
                            required
                            options={this._getTopSkillsDropdownOptions()}
                            onChange={this.onDropdownChangeTopSkills}
                        />
                    </div>
                    <div className="information-section">
                        <Dropdown className="secondBox"
                            placeholder="Select other skills"
                            defaultSelectedKeys={this.state.skills}
                            label="Other skills"
                            multiSelect
                            options={this._getSkillsDropdownOptions()}
                            onChange={this.onDropdownChangeSkills}
                        />
                    </div>

                    <h4>Mentorship information</h4>
                    <div className="information-section">
                        <Dropdown
                            placeholder="Select upto 3 mentees"
                            label="How many mentees do you want to mentor?"
                            required
                            options={this._getMenteesDropdownOptions()}
                            onChange={this.onDropdownChangeMentees}
                        />
                    </div>

                    <h4>Availability</h4>
                    {/* <div className="information-section">
                        <RoomIcon />
                        <Text> Reset </Text>
                    </div> */}
                    <h5>Select which days you would like to mentor</h5>


                    {role && role.length > 0 && topSkills && topSkills.length > 4 && mentee && parseInt(mentee) > 0 && (
                        <PrimaryButton type="button" onClick={() => history.push('/Profile')}>Register</PrimaryButton>
                    )}
                    {!(role && role.length > 0 && topSkills && topSkills.length > 4 && mentee && parseInt(mentee) > 0) && (
                        <PrimaryButton type="button" disabled>Register</PrimaryButton>
                    )}
                    <PrimaryButton onClick={() => history.push('/')} className="button" type="button">Cancel</PrimaryButton>
                </div>
            </div >
        );
    }
}