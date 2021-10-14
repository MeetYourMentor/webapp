import { useEffect, useState } from 'react';
import {
    DetailsList, DocumentCard, DocumentCardDetails, DocumentCardLocation,
    DocumentCardPreview, DocumentCardTitle, DocumentCardType, IStackTokens, PrimaryButton, Separator, Stack
} from '@fluentui/react';
import { MockMentorService } from '../services/MockMentorService';
import * as ViewProfileStyles from '../componentStyles/MentorViewProfileStyles';
import { FilterPreviousSessionData, FilterUpcomingSessionData } from '../common/Utility';
import history from './history';
import { Persona, PersonaPresence, PersonaSize } from 'office-ui-fabric-react';
import './Mentor.css';

export const MentorViewProfile = () => {

    const [sessionItems, setSessionItems] = useState<any>();
    const [mentoringProgressItems, setMentoringProgressItems] = useState<any[]>([]);


    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getConnectionSessionData().then((results) => {
            setSessionItems({
                upcoming: FilterUpcomingSessionData(results),
                past: FilterPreviousSessionData(results)
            });
        });
    }, []);

    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getMenteeProgressData().then((d) => {
            setMentoringProgressItems(d);
        });
    }, []);

    const mentor = {
        Name: "Dr. Bridget Davis",
        Location: "Helenaville",
        Email: 'bdavis@microsoftgraph.com',
        Role: "Marketing analyst"
    }

    const verticalGapStackTokens: IStackTokens = {
        childrenGap: 10,
        padding: 10,
    };

    const previewImage = {
        name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: '/images/victory.png',
        width: 128,
        height: 120
    };

    return (
        <Stack tokens={verticalGapStackTokens}>
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
                <PrimaryButton className="profile" type="button" onClick={() => history.push('/RegisterMentor')}>View Profile</PrimaryButton>
            </div>
            <Stack horizontal horizontalAlign="space-evenly">
                <Stack>
                    <p className="App-text">Upcoming sessions</p>
                    {sessionItems && sessionItems.upcoming.length > 0 &&
                        <DetailsList items={sessionItems.upcoming}></DetailsList>
                    }
                    {sessionItems && sessionItems.upcoming.length === 0 &&
                        <p className="App-text">There are no upcoming sessions.</p>
                    }
                </Stack>
                <Separator vertical alignContent="center">
                    {/* <Icon iconName="Clock" styles={ViewProfileStyles.iconStyles} /> */}
                </Separator>
                <Stack>
                    <p className="App-text">Past sessions</p>
                    {sessionItems && sessionItems.past.length > 0 &&
                        <DetailsList items={sessionItems.past}></DetailsList>
                    }
                    {sessionItems && sessionItems.past.length === 0 &&
                        <p className="App-text">There are no past sessions.</p>
                    }
                </Stack>
            </Stack>
            <Stack>
                <p className="App-text">2 Credits</p><br/>
                <Stack horizontal horizontalAlign="start">
                    {mentoringProgressItems && mentoringProgressItems.length > 0 &&
                        mentoringProgressItems.sort((a, b) => a.itemM > b.itemM ? 1 : -1).map((c, index) => {
                            return (
                                <>
                                    <DocumentCard 
                                        key={index}
                                        aria-label="Show mentorship progress"
                                        type={DocumentCardType.compact}
                                        styles={ViewProfileStyles.documentCardStyles}
                                    >
                                        <DocumentCardPreview previewImages={[previewImage]} />
                                        <DocumentCardDetails>
                                            <DocumentCardLocation
                                                location={c.MeetingsCompleted + "/3 meetings completed"}
                                                locationHref="http://microsoft.com"
                                                ariaLabel="Credit eligibilty progress"
                                            />
                                            <DocumentCardTitle title={c.Name} shouldTruncate />
                                            <DocumentCardTitle showAsSecondaryTitle title="Complete 3 meetings to claim credit" shouldTruncate />
                                        </DocumentCardDetails>
                                    </DocumentCard>
                                    <div className="credits">
                                    </div>
                                </>
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Stack>
    );
}