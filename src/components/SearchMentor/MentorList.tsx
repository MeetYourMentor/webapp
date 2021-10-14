import { Separator, Stack } from "office-ui-fabric-react";
import { useEffect, useState } from "react";
import { MockMentorService } from "../../services/MockMentorService";
import { Mentor } from "./Mentor";
import './SearchMentor.css'

export const MentorList = () => {
    const [mentorItems, setMentorItems] = useState<any[]>([]);

    // Load mock data from mock data service
    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMentorMockData().then((results) => {
            setMentorItems(results);
        });
    });

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