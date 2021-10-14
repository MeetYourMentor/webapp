import {
    PublicClientApplication,
    EventMessage, AuthenticationResult,
    EventType
} from "@azure/msal-browser";
import { msalConfig } from "./config";
// import { Providers, ProviderState, Msal2Provider } from '@microsoft/mgt';


const msalInstance = new PublicClientApplication(msalConfig);

const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult;
        const account = payload.account;
        msalInstance.setActiveAccount(account);

        // Providers.globalProvider = new Msal2Provider({
        //     publicClientApplication: msalInstance as PublicClientApplication,
        //     options: msalConfig
        // });
        // Providers.globalProvider.setState(ProviderState.SignedIn);

    }
});

export default msalInstance