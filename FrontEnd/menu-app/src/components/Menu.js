import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Menu() {
    const [toSignIn, setToSignIn] = useState(false)
    const [toLanding, setToLanding] = useState(false)

    if (toSignIn === true) {
        return <Navigate to='/signin' />
    }
    if (toLanding === true) {
        return <Navigate to='/' />
    }
    
    return (
        <div>
            <h1>Welcome to the Menu</h1>
            <input onClick={() => setToSignIn(() => !toSignIn)} type="button" value='Log Out' />
            <input onClick={() => setToLanding(() => !toLanding)} type='button' value='Home' />
        </div>
    )
}

export default Menu