import React from "react";
import { GoogleLogout } from 'react-google-login'

function Logout() {
    const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;
    return (
        <div>
            <GoogleLogout
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                buttonText={"Logout"}
                ></GoogleLogout>
        </div>
    )
}

export default Logout