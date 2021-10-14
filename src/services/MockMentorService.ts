
const MentorData = [
    {
        Name: "Lavanya Kasarabada", Location: "Port Iliana", Role: "SENIOR PROGRAM MANAGER"
    },
    {
        Name: "Yogesh Sharma", Location: "New Alenafurt", Role: "SENIOR PROGRAM MANAGER"
    },
    {
        Name: "David Nunez Tejerina", Location: "West Aliceton", Role: "PRINCIPAL PM MANAGER"
    },
    {
        Name: "Dr. Bridget Davis", Location: "Helenaville", Role: "Marketing analyst"
    }
];


const ConnectionSessionData = [
    {
        Name: "Arijit Mondal", Date: "2020-11-20", Time: "9:00 am"
    },
    {
        Name: "Zach DeBardlebon", Date: "2020-08-20", Time: "9:00 am"
    },
    {
        Name: "Jason Cole", Date: "2020-04-20", Time: "9:00 am"
    },
    {
        Name: "Michael Cai", Date: "2021-11-15", Time: "9:00 am"
    },
    {
        Name: "Anchal Aggarwal", Date: "2021-11-11", Time: "2:00 pm"
    },
    {
        Name: "Devina Sachin Dhuri", Date: "2021-09-11", Time: "2:00 pm"
    },
    {
        Name: "Sarah Battle", Date: "2021-11-11", Time: "2:00 pm"
    },
    {
        Name: "Vishnu Sankar", Date: "2021-12-11", Time: "2:00 pm"
    }
];

const MenteeProgressData = [
    {
        Name: "Devina Sachin Dhuri", MeetingsCompleted: "3"
    },
    {
        Name: "Zach DeBardlebon", MeetingsCompleted: "1"
    },
    {
        Name: "Jason Cole", MeetingsCompleted: "3"
    },
    {
        Name: "Arijit Mondal", MeetingsCompleted: "2"
    }
];


export const SearchOptions = [
    {
        title: "Discipline",
        items: [
            "Frontend development",
            "Backend development",
            "Project management",
            "UX design",
            "UX research"
        ]
    },
    {
        title: "Other skills",
        items: [
            "Other skill 1",
            "Other skill 2"
        ]
    },
    {
        title: "Location",
        items: [
            "Redmond",
            "San Francisco",
            "Atlanta"
        ]
    },
    {
        title: "Employee resource group",
        items: [
            "ERG 1",
            "ERG 2"
        ]
    }
];

export const Groups = [
    {title: "Discipline", offset: 0, size: 5},
    {title: "Other skills", offset: 4, size: 2},
    {title: "Location", offset: 5, size: 3},
    {title: "Employee Resource group", offset: 7, size: 2}
]

export const Options = [
    "Frontend development",
    "Backend development",
    "Project management",
    "UX design",
    "UX research",
    "Other skill 1",
    "Other skill 2",
    "Redmond",
    "San Francisco",
    "Atlanta",
    "ERG 1",
    "ERG 2"
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
    
    getSearchOptionsMockData = (): Promise<any[]> => {
        return Promise.resolve(SearchOptions);
    }

    getGroupMockData = (): Promise<any[]> => {
        return Promise.resolve(Groups);
    }

    getOptionsMockData = (): Promise<any[]> => {
        return Promise.resolve(Options);
    }
}