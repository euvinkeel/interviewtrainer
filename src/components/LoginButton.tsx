import { authUrl } from "../network.tsx";

// create the authorization URL:
// Create a link with the url
export const LoginButton = () => {
    return (    
        <a href={authUrl}>Log in with Google</a>
    )
}