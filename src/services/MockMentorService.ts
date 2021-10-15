
const MentorData = [
    {
        Name: "Lavanya Kasarabada", Location: "Redmond", Role: "SENIOR PROGRAM MANAGER"
    },
    {
        Name: "Yogesh Sharma", Location: "New Alenafurt", Role: "SENIOR PROGRAM MANAGER"
    },
    {
        Name: "David Nunez Tejerina", Location: "West Aliceton", Role: "PRINCIPAL PM MANAGER"
    },
    {
        Name: "Dr. Bridget Davis", Location: "Helenaville", Role: "Marketing analyst"
    },
    {
        Name: "Jane Doe", Location: "Atlanta", Role: "UX research"
    },
    {
        Name: "John Smith", Location: "Redmond", Role: "UX Designer"
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
            "UX Designer",
            "UX research",
            "Program Manager"
        ]
    },
    {
        title: "Other skills",
        items: [
            "Time management",
            "Effective meetings",
            "Conflict resolution",
            "Career change",
            "Networking",
            "Leading without authority",
            "Interviewing tips",
            "Diversity and inclusion"
        ]
    },
    {
        title: "Location",
        items: [
            "Redmond",
            "San Francisco",
            "Atlanta",
            "Port Iliana"
        ]
    },
    {
        title: "Employee resource group",
        items: [
            "Asians",
            "BAM",
            "Disability",
            "Families",
            "GLEAM",
            "HOLA",
            "Indigenous",
            "Military",
            "Women"
        ]
    }
];

export const Groups = [
    {title: "Discipline", offset: 0, size: 6},
    {title: "Other skills", offset: 5, size: 8},
    {title: "Location", offset: 12, size: 4},
    {title: "Employee Resource group", offset: 15, size: 9}
]

export const Options = [
    "Frontend development",
    "Backend development",
    "Project management",
    "UX Designer",
    "UX research",
    "Program Manager",
    "Time management",
    "Effective meetings",
    "Conflict resolution",
    "Career change",
    "Networking",
    "Leading without authority",
    "Interviewing tips",
    "Diversity and inclusion",
    "Redmond",
    "San Francisco",
    "Atlanta",
    "Port Iliana",
    "Asians",
    "BAM",
    "Disability",
    "Families",
    "GLEAM",
    "HOLA",
    "Indigenous",
    "Military",
    "Women"
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