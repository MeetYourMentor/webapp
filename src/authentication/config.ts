export const loginRequest = {
    scopes: [
        "User.Read"
    ]
}

export const msalConfig = {
    auth: {
        clientId: "74dfde91-aacc-412c-9c7a-c717014be33d",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "https://meetmentor.azurewebsites.net/.auth/login/aad/callback" // for your local testing "http://localhost:3000/callback"
    },
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: false
    }
};