import { Configuration, PopupRequest } from "@azure/msal-browser";
export const loginRequest: PopupRequest = {
    scopes: [
        "User.Read"
    ]
}

export const msalConfig: Configuration = {
    auth: {
        clientId: "74dfde91-aacc-412c-9c7a-c717014be33d",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "https://meetmentor.azurewebsites.net/callback" //"http://localhost:3000/callback" for your local testing 
    },
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: false
    }
};