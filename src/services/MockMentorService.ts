
export const MentorData = [
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
export class MockMentorService {
    getMentorMockData = (): Promise<any[]> => {
        return Promise.resolve(MentorData);
    }
}