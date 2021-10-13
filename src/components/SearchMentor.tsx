import * as React from 'react';
import { useEffect, useState } from 'react';
import { DetailsList, SearchBox } from '@fluentui/react';
import { MockMentorService } from '../services/MockMentorService';

export const SearchMentor = () => {

    const [mentorItems, setMentorItems] = useState<any[]>([]);

    // Load mock data from mock data service
    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMentorMockData().then((results) => {
            setMentorItems(results);
        });

    });

    return (<>
        <SearchBox placeholder="Search a mentor" underlined={true} />
        <DetailsList items={mentorItems}></DetailsList>
    </>);
}