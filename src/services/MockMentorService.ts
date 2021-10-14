
const MentorData = [
    {
        name: "Charlene Jast", location: "Port Iliana", role: "Senior analyst"
    },
    {
        name: "Lynda Wehner", location: "New Alenafurt", role: "Security associate"
    },
    {
        name: "Lorraine Simonis", location: "West Aliceton", role: "Security engineer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ultricies mi. Sed aliquet odio et magna maximus, et aliquam ipsum faucibus. Sed pulvinar vel nibh eget scelerisque. Vestibulum ornare id felis ut feugiat. Ut vulputate ante non odio condimentum, eget dignissim erat tincidunt. Etiam sodales lobortis viverra. Sed gravida nisi at nisi ornare, non maximus nisi elementum."
    },
    {
        name: "Dr. Bridget Davis", location: "Helenaville", role: "Marketing analyst"
    }
];

const ConnectionSessionData = [
    {
        Name: "Mentee Name 1", Date: "2020-11-20", Time: "9:00 am"
    },
    {
        Name: "Mentee Name 2", Date: "2020-11-20", Time: "9:00 am"
    },
    {
        Name: "Mentee Name 1", Date: "2021-11-11", Time: "2:00 pm"
    }
];

const MenteeProgressData = [
    {
        Name: "Mentee Name 1", MeetingsCompleted: "1"
    },
    {
        Name: "Mentee Name 2", MeetingsCompleted: "2"
    }
];

export class MockMentorService {
    getMentorMockData = (): Promise<any[]> => {
        return Promise.resolve(MentorData);
    }

    getConnectionSessionData = (): Promise<any[]> => {
        return Promise.resolve(ConnectionSessionData);
    }

    getMenteeProgressData = (): Promise<any[]> => {
        return Promise.resolve(MenteeProgressData);
    }
}