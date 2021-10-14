import { DefaultButton, Image, ImageFit, Modal, Separator, Stack, Text } from "@fluentui/react"

export const SuccessModal = (props: any) => {
    const { isSuccessModalOpen, hideSuccessModal, mentor } = props;

    return (
        <Modal isOpen={isSuccessModalOpen} onDismiss={hideSuccessModal} isBlocking>
            <Stack className="successModal" horizontalAlign="center">
                <Stack className="successModalContent">
                    <Image src="images/Light.svg" imageFit={ImageFit.contain}/>                            
                </Stack>
                <Text className="successModalText">Congratulations! You have booked your first mentoring session with {mentor.Name}.</Text>
            </Stack>
            <Separator />
            <DefaultButton className="successModalCloseButton" onClick={hideSuccessModal} text="Close"/>
        </Modal>
    );
}