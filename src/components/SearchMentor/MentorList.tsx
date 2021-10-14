import { Separator, Stack } from "office-ui-fabric-react";
import { Mentor } from "./Mentor";
import './SearchMentor.css'

export const MentorList = (props: any) => {
    const mentorItems: any[] = props.mentorItems;

    return (
        <Stack className="mentor" tokens={{ childrenGap: 5 }}>
            {mentorItems.map((mentor: any) => {
                return (
                    <>
                        <Mentor mentor={mentor}/>
                        <Separator />
                    </>
                )
            })}
        </Stack>
    );
}