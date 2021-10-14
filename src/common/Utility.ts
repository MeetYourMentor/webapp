export const FilterPreviousSessionData = (sessionData: any[]): any[] => {
    return sessionData.filter(sd => compareDates(sd.Date, new Date()) < 0);
}

export const FilterUpcomingSessionData = (sessionData: any[]): any[] => {
    return sessionData.filter(sd => compareDates(new Date(), sd.Date) < 0);
}

//Compare Dates
export const compareDates = (a: any, b: any) => {
    // Use toUpperCase() to ignore character casing for string
    const bandA = new Date(a);
    const bandB = new Date(b);

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
};