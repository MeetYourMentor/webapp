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
    const graphResponse = await fetch(graphConfig.graphMe, header);
    console.log('response graph', graphResponse)
    if(graphResponse.status == 200){
        const data = await graphResponse.json()
        console.log('response data', data)
        return data
    }
    return null
}

export async function getMyPhoto(accessToken: string) {
    const header = getHeader(accessToken,"GET");
    const graphResponse = await fetch(graphConfig.graphMyPhoto, header);
    console.log('response graph', graphResponse)
    const data = await graphResponse.json()
    if(graphResponse.status == 200){
        const data = await graphResponse.json()
        console.log('response data', data)
        return data
    }
    return null
}
