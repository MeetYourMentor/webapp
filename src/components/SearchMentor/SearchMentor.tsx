import * as React from 'react';
import { useEffect, useState } from 'react';
import { PrimaryButton, SearchBox, Stack, Text } from '@fluentui/react';
import { MockMentorService } from '../../services/MockMentorService';
import './SearchMentor.css'
import { SearchOptions } from './SearchOptions';
import { MentorList } from './MentorList';
import { Persona, PersonaPresence, PersonaSize } from 'office-ui-fabric-react';
import history from '../history';

export const SearchMentor = () => {
    const [mentorItems, setMentorItems] = useState<any[]>([]);

    // Load mock data from mock data service
    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMentorMockData().then((results) => {
            setMentorItems(results);
        });
    });

    const mentor = {
        Name: "Devina Sachin Dhuri",
        Location: "Redmond",
        Email: 'dedhuri@microsoftgraph.com',
        Role: "Software Engineer"
    }

    return (
        <div className="body">
            <div>
                <Persona 
                    className="personaCard"
                    text={mentor.Name}
                    secondaryText={mentor.Role}
                    tertiaryText={mentor.Location}
                    optionalText={mentor.Email}
                    presence={PersonaPresence.online}
                    size={PersonaSize.size120}
                />
                <PrimaryButton className="profile" type="button" onClick={() => history.push('/MenteeProfile')}>View Profile</PrimaryButton>
            </div>
            <Stack className="search">
                <SearchBox placeholder="Search a mentor" />
                <SearchOptions />
            </Stack>
            <Stack className="searchResults">
                <Text className="searchResultsLengthText">Showing {mentorItems.length} mentors</Text>
                <MentorList mentorItems={mentorItems}/>
            </Stack>
        </div>
    );
}