import * as React from 'react';
import { useEffect, useState } from 'react';
import { Stack } from '@fluentui/react';
import { MockMentorService } from '../services/MockMentorService';

export const MentorViewProfile = () => {

    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMentorMockData().then((results) => {
            //load data
        });

    });

    return (
        <Stack>
            <span>Item One</span>
            <Stack horizontal>
                <span>Item One</span>
                <span>Item Two</span>
            </Stack>
            <span>Item Three</span>
        </Stack>
    );
}