import * as React from 'react';
import './Mentor.css';
import { Dropdown, IDropdownOption, PrimaryButton, Text, TextField } from '@fluentui/react';
import history from './history';
import { Persona, PersonaPresence, PersonaSize, Stack } from 'office-ui-fabric-react';

// import RoomIcon from '@material-ui/icons/Room';

var arr: string[] = [];

type State = {
    description?: string;
    language?: string;
    experience?: string;
    role?: string;
    school?: string;
    level?: string;
    group?: string;
    topSkills?: string[];
    skills?: string[];
    mentor: {
        Name: "Devina Sachin Dhuri",
        Location: "Redmond",
        Role: "Software Engineer",
        Email: 'dedhuri@microsoftgraph.com',
        Phone: '+1 (607) 458-784' 
    }
};

export class RegisterMentee extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            description: "",
            language: "",
            experience: "1",
            role: "",
            school: "",
            group: "0",
            topSkills: [],
            skills: [],
            mentor: {
                Name: "Devina Sachin Dhuri",
                Location: "Redmond",
                Role: "Software Engineer",
                Email: 'dedhuri@microsoftgraph.com',
                Phone: '+1 (607) 458-784'   
            }
        };
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
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
    private _getLevelDropdownOptions = (): IDropdownOption[] => {
        return [{
            key: '1',
            text: 'IC1'
        },
        {
            key: '2',
            text: 'IC2'
        },
        {
            key: '3',
            text: 'IC3'
        },
        {
            key: '4',
            text: 'IC4'
        },
        {
            key: '5',
            text: 'IC5'
        }
        ] as IDropdownOption[]
    }
    private _getGroupDropdownOptions = (): IDropdownOption[] => {
        return [{
            key: '1',
            text: 'ERG1'
        },
        {
            key: '2',
            text: 'ERG2'
        },
        {
            key: '3',
            text: 'ERG3'
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
    public onDropdownChangeLevels = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item && this.state.level) {
            this.setState({ level: item.key as string });
        }
    }
    public onDropdownChangeGroup = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item && this.state.group) {
            this.setState({ group: item.key as string });
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
    onChangeLanguage = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        this.setState({ language: newValue });
    };

    onRenderCard = (item: any): JSX.Element => {
        return (
            <Stack verticalAlign="stretch">
                <Persona 
                    className="personaCard"
                    text={item.Name}
                    secondaryText={item.Role}
                    tertiaryText={item.Location}
                    optionalText={item.Email}
                    presence={PersonaPresence.online}
                    size={PersonaSize.size120}
                />
            </Stack>
        );
    }
    
    public render(): React.ReactElement {
        const { experience, role, topSkills, level } = this.state;

        return (
            <div className="presentation">
                <h1>Register as a Mentee</h1>
                <Text>A great mentor-mentee relationship can be really important in developing your career and being a mentor can be really fulfilling and impactful.<br />
                    Let's get these people together to form amazing mentor-mentee relationships!</Text>
                <div className="person">
                <Stack verticalAlign="stretch">
                <Persona 
                    className="personaCard"
                    text={this.state.mentor.Name}
                    secondaryText={this.state.mentor.Role}
                    tertiaryText={this.state.mentor.Location}
                    optionalText={this.state.mentor.Email}
                    presence={PersonaPresence.online}
                    size={PersonaSize.size72}
                />
            </Stack>
                </div>
                <div className="information">
                    <div className="information-section">
                        <TextField multiline rows={3} label="Tell us about yourself" onChange={this.onChangeDescription} />
                    </div>

                    <h4>Basic Information</h4>
                    <div className="information-section">
                        <TextField label="Preferred language" required onChange={this.onChangeLanguage} />
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
                            placeholder="Select upto 3 SUPERPOWERs"
                            defaultSelectedKeys={this.state.topSkills}
                            label="What are your SUPERPOWERs?"
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

                    <h4>Career Level</h4>
                    <div className="information-section">
                        <Dropdown
                            placeholder="Select your career level"
                            label="Select your career level"
                            required
                            options={this._getLevelDropdownOptions()}
                            onChange={this.onDropdownChangeLevels}
                        />
                    </div>
                    <div className="information-section">
                        <Dropdown className="secondBox"
                            placeholder="Select your EmployeeResourceGroups"
                            label="Select you EmployeeResourceGroups"
                            options={this._getGroupDropdownOptions()}
                            onChange={this.onDropdownChangeGroup}
                        />
                    </div>

                    <br/><br/>
                    <PrimaryButton type="button" onClick={() => history.push('/SearchMentor')}>Search Your Mentor</PrimaryButton>
                    <PrimaryButton onClick={() => history.push('/')} className="button" type="button">Cancel</PrimaryButton>
                </div>
            </div >
        );
    }
}