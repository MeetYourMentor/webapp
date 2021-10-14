import { graphConfig } from "./config";

type HeaderObject = {
    method: string,
    header: Headers
}

function getHeader(accessToken: string, method: string):HeaderObject {
    const header = new Headers()
    const bearer = `Bearer ${accessToken}`;
    header.append("Authorization", bearer);

    return {
        method,
        header
    }
}

export async function getMe(accessToken: string) {
    const header = getHeader(accessToken,"GET");

    return fetch(graphConfig.graphMe, header)
        .then(response => {
            console.log('response graph', response)
            return response.json()
        })
        .catch(error => console.log(error));
}

export async function getMyPhoto(accessToken: string) {
    const header = getHeader(accessToken,"GET");

    return fetch(graphConfig.graphMyPhoto, header)
        .then(response => {
            console.log('response graph', response)
            return response.json()
        })
        .catch(error => console.log(error));
}
