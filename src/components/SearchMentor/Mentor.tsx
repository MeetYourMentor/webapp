import {
    DefaultButton,
    HoverCard,
    Icon,
    Persona,
    PersonaPresence, PersonaSize, Stack, Text } from "office-ui-fabric-react";
import './SearchMentor.css'
import history from '../history';

export const Mentor = (props: any) => {
    const { mentor } = props;

    const onRenderCard = (item: any): JSX.Element => {
        return (
            <Stack verticalAlign="stretch">
                <Persona 
                    className="personaCard"
                    text={item.Name}
                    secondaryText={item.Role}
                    tertiaryText={item.Location}
                    presence={PersonaPresence.online}
                    size={PersonaSize.size72}
                />
                <Stack className="personaCardButtons" horizontal tokens={{ childrenGap: 30 }} horizontalAlign="start">
                    <Icon className="icon" iconName="Chat"/>
                    <Icon className="icon" iconName="Org"/>
                    <Icon className="icon" iconName="Video"/>
                    <Icon className="icon" iconName="Phone"/>
                </Stack>
            </Stack>
        );
    };

    return (
        <Stack horizontal horizontalAlign="space-between">
            <HoverCard expandingCardProps={{onRenderCompactCard: onRenderCard, renderData: mentor, expandedCardHeight: 0}}>
                <Persona 
                    className="persona"
                    text={mentor.Name}
                    secondaryText={mentor.Role}
                    tertiaryText={mentor.Location}
                    optionalText={mentor.Location}
                />
                <div className="personaProfile" onClick={() => history.push('/MentorProfile')}>
                    View Profile
                </div>
            </HoverCard>
            <Stack className="mentorButtons" tokens={{ childrenGap: 10 }} horizontal horizontalAlign="end" verticalAlign="center">
                <DefaultButton text="Schedule"/>
                <DefaultButton text="Email"/>
            </Stack>
        </Stack>
    );
}