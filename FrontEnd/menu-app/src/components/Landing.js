import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

function Landing() {
    const [toSignIn, setToSignIn] = useState(false);

    if (toSignIn === true) {
        return <Navigate to='signin' />
    }
    return (
        <div>
            <header>
                <h1>Welcome to the Drury Dining Menu App!</h1>
                <div>Click here to Sign In</div>
                <input onClick={() => setToSignIn(() => !toSignIn)} type="button" value='Sign In' />
            </header>
        </div>
    )
}

export default Landing