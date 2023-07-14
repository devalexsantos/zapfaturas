"use client"

import { Auth0Provider } from "@auth0/auth0-react"

interface Auth0Props {
    children: React.ReactNode
}

export default function Auth0({children}: Auth0Props){
    return(
    <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT as string}
        authorizationParams={{
        redirect_uri: "https://zapfaturas.com"
        }}
        useRefreshTokens={ true }
        cacheLocation="localstorage"
    >
        {children}
    </Auth0Provider>
)
}