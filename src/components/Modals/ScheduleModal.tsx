import { DatePicker, DefaultButton, Dropdown, Modal, PrimaryButton, Stack, Text } from "@fluentui/react";

export const ScheduleModal = (props: any) => {
    const {
        isScheduleModalOpen,
        hideScheduleModal,
        hideScheduleModalShowSuccessModal,
        times,
        mentor
    } = props;

    return (
        <Modal isOpen={isScheduleModalOpen} onDismiss={hideScheduleModal} isBlocking>
            <Stack className="scheduleModal" verticalAlign="stretch" horizontalAlign="center">
                <Text className="mentorScheduleHeader">To get the best out of your mentorship experience, we recommend scheduling at least 3 sessions with {mentor.Name}.</Text>
                <Stack>
                    <Text className="sessionText">Session 1</Text>
                    <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="space-evenly">
                        <DatePicker className="datePicker" label="Date"/>
                        <Dropdown className="timePicker" options={times} label="Available time slots"/>
                    </Stack>
                    <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="space-evenly">
                        <DatePicker className="datePicker" />
                        <Dropdown className="timePicker" options={times} />
                    </Stack>
                </Stack>
                <Stack>
                    <Text className="sessionText">Session 2</Text>
                    <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="space-evenly">
                        <DatePicker className="datePicker" label="Date"/>
                        <Dropdown className="timePicker" options={times} label="Available time slots"/>
                    </Stack>
                    <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="space-evenly">
                        <DatePicker className="datePicker" />
                        <Dropdown className="timePicker" options={times} />
                    </Stack>
                </Stack>
                <Stack>
                    <Text className="sessionText">Session 3</Text>
                    <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="space-evenly">
                        <DatePicker className="datePicker" label="Date"/>
                        <Dropdown className="timePicker" options={times} label="Available time slots"/>
                    </Stack>
                    <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="space-evenly">
                        <DatePicker className="datePicker" />
                        <Dropdown className="timePicker" options={times} />
                    </Stack>
                </Stack>
            </Stack>
            <Stack className="scheduleButtons" tokens={{ childrenGap: 10 }} horizontal horizontalAlign="start">
                <PrimaryButton onClick={hideScheduleModalShowSuccessModal} text="Schedule"/>
                <DefaultButton onClick={hideScheduleModal} text="Cancel"/>
            </Stack>
        </Modal>
    );
}