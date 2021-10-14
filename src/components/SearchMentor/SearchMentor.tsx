import * as React from 'react';
import { useEffect, useState } from 'react';
import { SearchBox, Stack, Text } from '@fluentui/react';
import { MockMentorService } from '../../services/MockMentorService';
import './SearchMentor.css'
import { SearchOptions } from './SearchOptions';
import { MentorList } from './MentorList';

export const SearchMentor = () => {
    const [mentorItems, setMentorItems] = useState<any[]>([]);

    // Load mock data from mock data service
    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMentorMockData().then((results) => {
            setMentorItems(results);
        });
    });

    return (
        <div className="body">
            <Stack className="search">
                <SearchBox placeholder="Search a mentor" />
                <SearchOptions />
            </Stack>
            <Stack className="searchResults">
                <Text className="searchResultsLengthText">Showing {mentorItems.length} mentors</Text>
                <MentorList />
            </Stack>
        </div>
    );
}