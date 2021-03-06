import * as React from 'react';
import './Mentor.css';
import { Dropdown, IDropdownOption, PrimaryButton, Text, TextField } from '@fluentui/react';
import history from './history';
import { Checkbox, HoverCard, Icon, Persona, PersonaPresence, PersonaSize, Stack } from 'office-ui-fabric-react';

// import RoomIcon from '@material-ui/icons/Room';

var arr: string[] = [];

type State = {
    description?: string;
    experience?: string;
    role?: string;
    school?: string;
    mentee?: string;
    level?: string;
    group?: string;
    topSkills?: string[];
    skills?: string[];
    mentor: {
        Name: "Dr. Bridget Davis",
        Location: "Helenaville",
        Role: "Marketing analyst",
        Email: 'bdavis@microsoftgraph.com',
        Phone: '+1 (888) 458-784'
    }
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
            level: "0",
            group: "0",
            topSkills: [],
            skills: [],
            mentor: {
                Name: "Dr. Bridget Davis",
                Location: "Helenaville",
                Role: "Marketing analyst",
                Email: 'bdavis@microsoftgraph.com',
                Phone: '+1 (888) 458-784'   
            }
        };
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
    }


    private _availabilityItems = [
        {
            Day: 'Monday', Slots: ['8 AM - 9 AM', '9 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM']
        },
        {
            Day: 'Tuesday', Slots: ['8 AM - 9 AM', '9 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM']
        },
        {
            Day: 'Wednesday', Slots: ['8 AM - 9 AM', '9 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM']
        },
        {
            Day: 'Thursday', Slots: ['8 AM - 9 AM', '9 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM']
        },
        {
            Day: 'Friday', Slots: ['8 AM - 9 AM', '9 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM']
        },
        {
            Day: 'Saturday', Slots: ['8 AM - 9 AM', '9 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM']
        }
    ];
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
            text: 'Asians'
        },
        {
            key: '2',
            text: 'BAM'
        },
        {
            key: '3',
            text: 'Disability'
        },
        {
            key: '4',
            text: 'Families'
        },
        {
            key: '5',
            text: 'GLEAM'
        },
        {
            key: '6',
            text: 'HOLA'
        },
        {
            key: '6',
            text: 'Indigenous'
        },
        {
            key: '6',
            text: 'Military'
        },
        {
            key: '6',
            text: 'Women'
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
                {/* <Stack className="personaCardButtons" horizontal tokens={{ childrenGap: 30 }} horizontalAlign="start">
                    <Icon className="icon" iconName="Chat"/>
                    <Icon className="icon" iconName="Org"/>
                    <Icon className="icon" iconName="Video"/>
                    <Icon className="icon" iconName="Phone"/>
                </Stack> */}
            </Stack>
        );
    }
    
    public render(): React.ReactElement {
        const { experience, role, topSkills, mentee, level } = this.state;

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
                {/* <Stack className="personaCardButtons" horizontal tokens={{ childrenGap: 30 }} horizontalAlign="start">
                    <Icon className="icon" iconName="Chat"/>
                    <Icon className="icon" iconName="Org"/>
                    <Icon className="icon" iconName="Video"/>
                    <Icon className="icon" iconName="Phone"/>
                </Stack> */}
            </Stack>
                </div>
                <div className="information">
                    <div className="information-section">
                        <TextField multiline rows={3} label="Tell us about yourself" onChange={this.onChangeDescription} />
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
                    <div className="information-section">
                        <Dropdown className="secondBox"
                            placeholder="Select career level do you want to mentor?"
                            label="Which career level do you want to mentor?"
                            required
                            options={this._getLevelDropdownOptions()}
                            onChange={this.onDropdownChangeLevels}
                        />
                    </div>
                    <div className="information-section">
                        <Dropdown className="thirdBox"
                            placeholder="Select Employee Resource Groups"
                            label="Select Employee Resource Groups"
                            required
                            options={this._getGroupDropdownOptions()}
                            onChange={this.onDropdownChangeGroup}
                        />
                    </div>

                    <h4>Availability</h4>
                    {/* <div className="information-section">
                        <RoomIcon />
                        <Text> Reset </Text>
                    </div> */}
                    <h5>Select which days you would like to mentor</h5>
                    <div className="calendar">
                        {this._availabilityItems && this._availabilityItems.length > 0 &&
                            this._availabilityItems.map((c, index) => {
                                return (
                                    <Stack horizontal tokens={{ childrenGap: 10, padding: 10 }} key={index}>
                                        <div className="calendar week"><Checkbox label={c.Day} /> </div>
                                    </Stack>
                                )
                            })
                        }
                                    </div>
                        <div className="calendar">
                        {this._availabilityItems && this._availabilityItems.length > 0 &&
                            this._availabilityItems.map((c, index) => {
                                return (
                                    <Stack horizontal tokens={{ childrenGap: 10, padding: 10 }} key={index}>
                                        <Dropdown
                                            className="schedule" 
                                            required
                                            placeholder="Select a slot"
                                            multiSelect
                                            options={c.Slots.map((v, i) => {
                                                return { key: i, text: v }
                                            })} 
                                        />
                                    </Stack>
                                )
                            })
                        }
                        </div>
                    <br/>
                   
                    {role && role.length > 0 && topSkills && topSkills.length > 4 && mentee && parseInt(mentee) > 0 && experience && parseInt(experience) > 0 && level && level.length > 0 && (
                        <PrimaryButton type="button" onClick={() => history.push('/ViewProfile')}>Register</PrimaryButton>
                    )}
                    {!(role && role.length > 0 && topSkills && topSkills.length > 4 && mentee && parseInt(mentee) > 0 && experience && parseInt(experience) > 0 && level && level.length > 0) && (
                        <PrimaryButton type="button" disabled>Register</PrimaryButton>
                    )}
                    <PrimaryButton onClick={() => history.push('/')} className="button" type="button">Cancel</PrimaryButton>
                </div>
            </div >
        );
    }
}