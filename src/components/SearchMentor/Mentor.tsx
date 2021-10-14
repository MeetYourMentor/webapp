import { TimeConstants } from "@fluentui/react";
import {
    DefaultButton,
    HoverCard,
    Icon,
    IDropdownOption,
    Persona,
    PersonaPresence,
    PersonaSize,
    Stack
} from "office-ui-fabric-react";
import './SearchMentor.css'
import { useBoolean } from '@fluentui/react-hooks';
import { ScheduleModal } from "../Modals/ScheduleModal";
import { SuccessModal } from "../Modals/SuccessModal";

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

    const [isScheduleModalOpen, { setTrue: showScheduleModal, setFalse: hideScheduleModal }] = useBoolean(false);
    const [isSuccessModalOpen, { setTrue: showSuccessModal, setFalse: hideSuccessModal }] = useBoolean(false);
    
    // This is hacky, will fix later
    const hideScheduleModalShowSuccessModal = () => {
        hideScheduleModal();
        showSuccessModal();
    }

    const times: IDropdownOption[] = [
        { text: "9:00 AM", key: TimeConstants.HoursInOneDay},
        { text: "10:00 AM", key: TimeConstants.HoursInOneDay},
        { text: "10:30 AM", key: TimeConstants.HoursInOneDay},
        { text: "1:00 PM", key: TimeConstants.HoursInOneDay},
        { text: "1:30 PM", key: TimeConstants.HoursInOneDay},
        { text: "3:00 PM", key: TimeConstants.HoursInOneDay},
        { text: "5:00 PM", key: TimeConstants.HoursInOneDay}
    ]

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
            </HoverCard>
            <Stack className="mentorButtons" tokens={{ childrenGap: 10 }} horizontal horizontalAlign="end" verticalAlign="center">
                <DefaultButton onClick={showScheduleModal} text="Schedule"/>
                <ScheduleModal
                    isScheduleModalOpen={isScheduleModalOpen}
                    hideScheduleModal={hideScheduleModal}
                    hideScheduleModalShowSuccessModal={hideScheduleModalShowSuccessModal}
                    times={times}
                    mentor={mentor}
                />
                <SuccessModal
                    isSuccessModalOpen={isSuccessModalOpen}
                    hideSuccessModal={hideSuccessModal}
                    mentor={mentor}
                />
                <DefaultButton text="Email"/>
            </Stack>
        </Stack>
    );
}