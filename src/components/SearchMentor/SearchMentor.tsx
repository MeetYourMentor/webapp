import * as React from 'react';
import { useEffect, useState } from 'react';
import { Persona, PersonaPresence, PersonaSize, PrimaryButton, SearchBox, Stack, Text } from '@fluentui/react';
import { MockMentorService } from '../../services/MockMentorService';
import './SearchMentor.css'
import { SearchOptions } from './SearchOptions';
import { MentorList } from './MentorList';
import history from '../history';

const filters: string[] = [];

export const SearchMentor = () => {
    const [mentorItems, setMentorItems] = useState<any[]>([]);
    const [filteredMentors, setFilteredMentors] = useState<any[]>([]);

    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMentorMockData().then((results) => {
            setMentorItems(results);
        });
        mockDataClient.getMentorMockData().then((results) => {
            setFilteredMentors(results);
        });
    }, filteredMentors);

    const mentor = {
        Name: "Devina Sachin Dhuri",
        Location: "Redmond",
        Email: 'dedhuri@microsoftgraph.com',
        Role: "Software Engineer"
    }

    const filter = (item: string, isChecked: boolean) => {
        const filtered = isChecked && item ? filteredMentors.filter((mentor) => {
            return mentor.Name.toLowerCase().includes(item.toLowerCase()) ||
                mentor.Role.toLowerCase().includes(item.toLowerCase()) ||
                mentor.Location.toLowerCase().includes(item.toLowerCase());
        }) : mentorItems;
        
        setFilteredMentors(filtered);
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
                <SearchBox placeholder="Search a mentor" onChange={(_, newValue) => {
                    filter(newValue || "", true);
                }}/>
                <SearchOptions filter={filter}/>
            </Stack>
            <Stack className="searchResults">
                <Text className="searchResultsLengthText">Showing {filteredMentors.length} mentors</Text>
                <MentorList mentorItems={filteredMentors}/>
            </Stack>
        </div>
    );
}