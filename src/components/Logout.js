import React from "react";
import { GoogleLogout } from 'react-google-login'

const clientId = '88908660898-d2mtcptaeqck3jh7k0ick3jnf7oruukd.apps.googleusercontent.com';

function Logout() {
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                ></GoogleLogout>
        </div>
    )
}

export default Logout